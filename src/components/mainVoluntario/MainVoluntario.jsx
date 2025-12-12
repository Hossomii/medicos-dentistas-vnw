import { Link } from 'react-router-dom'
import s from "./mainVoluntario.module.scss"
import MainCardsVoluntario from '../mainCardsVoluntario/MainCardsVoluntario'
import FormVoluntario from '../formVoluntario/FormVoluntario'

const MainVoluntario = () => {
  return (
    <main>

      <section className={s.cardsSection}>
        <div className={s.cardsDiv}>
          <h1 className={s.cardsTituloSection}>Seja Voluntário</h1>
          <p className={s.cardsDescricaoSection}>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
          <div className={s.cards}>
            <MainCardsVoluntario
            titulo="Impacto Direto"
            descricao="Sua dedicação salva vidas e transforma comunidades"
            />
            <MainCardsVoluntario
            titulo="Crescimento Pessoal"
            descricao="Desenvolva habilidades e cresça profissionalmente"
            />
            <MainCardsVoluntario
            titulo="Comunidade"
            descricao="Faça parte de uma rede de profissionais comprometidos"
            />
          </div>
        </div>
      </section>

      <section className={s.formSection}>
        <div className={s.formContainer}>
          <FormVoluntario />
        </div>
      </section>
    </main>
  )
}

export default MainVoluntario