import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import { Tasks } from './Tasks';

import styles from './InputTask.module.css'

interface TaskProps {
  id: number
  description: string
  status: boolean
}

export function InputTask() {
  const [task, setTask] = useState<TaskProps[]>([
    {
      id: 1,
      description: 'Hello',
      status: false
    }
  ])
  const [inputDescription, setInputDescription] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask: TaskProps = {
      id: Math.floor(Math.random() * 100),
      description: inputDescription,
      status: false
    }
    setTask([...task, newTask])
    setInputDescription('')
  }

  function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
    setInputDescription(event.target.value)
  }

  function handleConcludeTask(id: number) {
    task.filter((item) => {
      if (item.id === id) {
        item.status = !item.status
        setTask([...task])
      }
    })
  }

  function handleDeleteTask(id: number) {
    task.map((item, index) => {
      if (item.id === id) {
        task.splice(index, 1)
        setTask([...task])
      }
    })
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.wrapper}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={handleInputTask}
          value={inputDescription}
        />
        <button type='submit'>Criar <PlusCircle size={16} /></button>
      </form>
      <Tasks
        task={task}
        handleConcludeTask={handleConcludeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </>

  )
}