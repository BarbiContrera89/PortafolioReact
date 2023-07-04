import React from "react"

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://api.whatsapp.com/send?phone=+34627410788&text=Hola, quiero más información"
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-whatsapp"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/barbara-contrera-993512244/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/BarbiContrera89"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  )
}

export default Social
