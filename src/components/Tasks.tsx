import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>Tarefas Criadas <span>0</span></div>
        <div className={styles.completed}>Concluídas <span>0 de 5</span></div>
      </header>
      <main>
        <div className={styles.task}>
          <input type='checkbox' />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button>
            <Trash size={24} />
          </button>
        </div>
      </main>
    </>
  )
}