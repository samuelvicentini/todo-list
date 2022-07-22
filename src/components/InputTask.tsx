import {PlusCircle} from 'phosphor-react';

import styles from './InputTask.module.css'

export function InputTask() {
  return (
    <form className={styles.wrapper}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
      />
      <button>Criar <PlusCircle size={16} /></button>
    </form>
  )
}