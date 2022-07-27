import { ChangeEvent, FormEvent, useState } from 'react';
import {PlusCircle} from 'phosphor-react';

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
    const newTask: TaskProps ={
      id: Math.random(),
      description: inputDescription,
      status: false
    }
    setTask([...task, newTask])
  }

  function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
    setInputDescription(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.wrapper}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={handleInputTask}
        />
        <button type='submit'>Criar <PlusCircle size={16} /></button>
      </form>
      <Tasks task={task} />
    </>

  )
}