import { NavLink } from "react-router-dom"
import logo from "../assets/LOGO.svg"

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header_logoLink">
        <img className="header_logo" src={logo} alt="Kasa" />
      </NavLink>

      <nav className="header_nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            "header_link" + (isActive ? " header_link--active" : "")
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            "header_link" + (isActive ? " header_link--active" : "")
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}
