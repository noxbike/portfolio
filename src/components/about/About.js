import React from 'react'
import './about.css';
import { Link } from "react-scroll";

function About() {
  return (
    <div id="about">
        <div className="container">
            <div className="layout-profile">
                <div className='aboutMe'>
                    <h3>A propos de moi</h3>
                    <p>
                    En tant qu'autodidacte passionné, j'ai acquis une expertise solide dans le domaine du développement 
                    web. Ma volonté d'apprendre de manière autonome m'a permis de maîtriser les langages de programmation, 
                    les frameworks et les technologies web modernes. Avec une expérience concrète et une approche pratique, 
                    je suis prêt à relever tous les défis pour créer des solutions web innovantes et performantes. 
                    </p>
                    <Link activeClass="active" smooth spy={true} to="contact" className="contactme">Contact</Link>
                    <a href="/assets/documents/CV-Morel-Mickael.pdf" target="blank">Download CV</a>
                </div>
                <div className='picture'>
                    <img src="./assets/images/moi.png" alt="moi" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About