import React from 'react'
import './styles/about.css'
import AboutImg from '../../assets/image/yoxd.jpeg';
import CV from '../../assets/CV.pdf'
import Info from './Info'

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section__title'>About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="container grid container grid">
                <img src={AboutImg} alt="" className='about__img' />

                <div className="about__data">
                    <Info />

                    <p className="about__description">Web developer, specialized in React.js. I am passionate about technology with an incredible capacity for self-learning, I am 23 years old and I am from Argentina, I live in Rosario/Santa Fé. I would love to be part of your team, if you have any questions or want to know more about me, you can contact me through my social networks or by a message through the contact form. Thanks you</p>


                    <a download="" href={CV} className="button button--flex">Download CV <i className="uil uil-file-download-alt"></i></a>
                </div>

            </div>
        </section>
    )
}

export default About