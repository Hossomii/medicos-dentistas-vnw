import s from "./mainCardsGreen.module.scss"

const MainCardsGreen = (props) => {
  return (
    <article className={s.MainCardsGreen}>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </article>
  )
}

export default MainCardsGreen