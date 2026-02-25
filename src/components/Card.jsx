import { Link } from "react-router-dom"

export default function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card_link">
        <img src={cover} alt={title} className="card_img" />
        <h3 className="card_title">{title}</h3>
      </Link>
    </article>
  )
}
