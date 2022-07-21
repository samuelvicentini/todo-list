import Logo from '../assets/toDoLogo.svg'

import style from './Header.module.css'

export function Header() {
  return (
    <div className={style.wrapper}>
      <img src={Logo} alt="Logo ToDo" />
    </div>
  )
}