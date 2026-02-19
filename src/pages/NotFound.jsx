import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="notFound">
      <h1 className="notFound_code">404</h1>

      <p className="notFound_txt">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="notFound_link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}
