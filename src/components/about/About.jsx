import React from "react"
import "./styles/about.css"
import AboutImg from "../../assets/image/barbi.jpeg"
import CV from "../../assets/CV.pdf"
import Info from "./Info"

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mí</h2>
      <span className="section__subtitle">Mi introducción</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Soy desarrolladora web Full-Stack, tengo 23 años soy Argentina pero
            estoy viviendo en España / Madrid. Estoy certificada con React y
            NodeJS en Academlo y tengo conocimientos principalmente en HTML5,
            CSS3, React, Nodejs y JavaScript. Al mismo tiempo, soy estudiante de
            CyberSecurity en la universidad de Ávila IMF en España/Madrid.
            Dentro de mis grandes pasiones se encuentra la programación y el
            diseño, Al día me siento preparada para seguir afrontando los
            mayores desafíos de la industria.
          </p>

          <a download="" href={CV} className="button button--flex">
            Descargar CV
            <i className="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
