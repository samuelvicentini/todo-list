import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <InputTask />
        <Tasks />
      </main>
    </div>
  )
}

export default App
