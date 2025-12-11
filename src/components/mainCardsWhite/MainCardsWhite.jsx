import s from "./mainCardsWhite.module.scss"

const MainCardsWhite = (props) => {
  return (
    <article className={s.MainCardsWhite}>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </article>
  )
}

export default MainCardsWhite