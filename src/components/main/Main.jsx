import s from './main.module.scss'
import { Link } from 'react-router-dom'
import iconeSaude from '../../assets/icon-saude.png'
import imgMedico from '../../assets/foto-medico.png'

const Main = () => {
  return (
    <main>
      <section> 
        <div className={s.mainContainer}> 
          <div className={s.SaudeTodosContainer}>
            <Link className={s.btnSaudeTodos}>
              <img src={iconeSaude} alt="Icone dentista" />
              <p>Saúde para todos</p>
            </Link>
          </div>
          <div className={s.texts}>
            <h1>Saúde e cuidado sem barreiras</h1>
            <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>
          </div>
          <div className={s.btnContainer}>
            <Link to='/voluntario' className={s.btnVerde}>Seja Voluntário</Link>
            <Link to='/voluntario' className={s.btnComoAjudar}>Como Ajudar</Link>
          </div>
        </div>
      </section>
      <article>
        <img src={imgMedico} alt="Imagem de um médico sorrindo" />
      </article>
    </main>
  )
}

export default Main