import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

interface TaskProps {
  task: {
    id: number
    description: string
    status: boolean
  }[]
  handleConcludeTask: (id: number) => void
  handleDeleteTask: (id: number) => void
}

export function Tasks({ task, handleConcludeTask, handleDeleteTask }: TaskProps) {


  return (
    <>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>Tarefas Criadas <span>{task.length}</span></div>
        <div className={styles.completed}>Concluídas <span>0 de {task.length}</span></div>
      </header>
      <main>
        {task.map(item => {
          return (
            <div key={item.id} className={styles.task}>
              <input type='checkbox' onClick={() => handleConcludeTask(item.id)} />
              <p>{item.description}</p>
              <button onClick={() => handleDeleteTask(item.id)}>
                <Trash size={24} />
              </button>
            </div>
          )
        })}
      </main>
    </>
  )
}