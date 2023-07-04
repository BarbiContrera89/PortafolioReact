import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import "./style/contact.css"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_pdwse5l",
      "template_rar58f8",
      form.current,
      "xARnY6gPZTL2Dq_AM"
    )
    e.target.reset()
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Ponerse en contacto</h2>
      <span className="section__subtitle">Contáctame</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Háblame</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                barbicontrera89@icloud.com
              </span>

              <a href="barbicontrera89@icloud.com" className="contact__button">
                Escríbeme{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+34627410788</span>

              <a
                href="https://api.whatsapp.com/send?phone=+34627410788&text=Hola, quiero más información"
                className="contact__button"
              >
                Escríbeme{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Cuentame que buscas</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="inserta tu nombre"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="inserta tu email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Proyecto</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Cuantame que buscas"
              ></textarea>
            </div>

            <button className="button button--flex">
              Enviar mensaje <i className="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
