import React from "react"
import "./style/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Barbara Contrera</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Acerca de
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://discord.com/barbaracontrera/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-discord"></i>
          </a>

          <a
            href="https://www.instagram.com/barbicontrera1/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Barabara Contrera. Todos los derechos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer
