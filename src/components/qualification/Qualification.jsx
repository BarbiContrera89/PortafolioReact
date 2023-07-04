import React, { useState } from "react"
import "./style/qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi viaje personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educación
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content cualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Developer Full Stack</h3>
                <span className="qualification__subtitle">
                  Academlo Shool of Technology and Computer Science
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2021-2023 Online</i>
                </div>
              </div>

              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rouder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">CyberSecurity</h3>
                <span className="qualification__subtitle">
                  Universidad Católica de Ávila IMF
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2023-2024 Presencial</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="span section__subtitle"></div>
    </section>
  )
}

export default Qualification
