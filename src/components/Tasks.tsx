import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

interface TaskProps {
  task: {
    id: number
    description: string
    status: boolean
  }[]
}

export function Tasks({task}: TaskProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>Tarefas Criadas <span>0</span></div>
        <div className={styles.completed}>Concluídas <span>0 de 5</span></div>
      </header>
      <main>
        {task.map(item => {
          return (
            <div className={styles.task}>
              <input type='checkbox' />
              <p>{item.description}</p>
              {console.log(item.id)}
              <button>
                <Trash size={24} />
              </button>
            </div>
          )
        })}
      </main>
    </>
  )
}