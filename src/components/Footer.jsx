import logo from "../assets/LOGO2.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer_logo" />
      <p className="footer_text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}
