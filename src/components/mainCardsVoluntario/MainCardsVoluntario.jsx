import s from "./mainCardsVoluntario.module.scss"

const MainCardsVoluntario = (props) => {
  return (
    <article className={s.MainCardsVoluntario}>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </article>
  )
}

export default MainCardsVoluntario