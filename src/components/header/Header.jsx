import s from './header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img src="./src/assets/icon-coracao.png" alt="Icone de coração" />
        <h2>Médicos & Dentistas</h2>
      </div>
      <nav>
        <Link to='/' className={s.btnDefault}>Home</Link>
        <Link to='/voluntario' className={s.btnVerde}>Seja Voluntário</Link>
      </nav>
    </header>
  )
}

export default Header