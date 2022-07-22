import { Header } from './components/Header'
import { InputTask } from './components/InputTask'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <InputTask />
        ToDo List
      </main>
    </div>
  )
}

export default App
