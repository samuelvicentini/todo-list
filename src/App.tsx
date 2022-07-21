import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        ToDo List
      </main>
    </div>
  )
}

export default App
