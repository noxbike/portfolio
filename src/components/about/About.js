import React from 'react'
import './about.css';
import { Link } from "react-scroll";

function About({dbLang}) {
  return (
    <div id="about">
        <div className="container">
            <div className="layout-profile">
                <div className='aboutMe'>
                    <h3>{dbLang.title}</h3>
                    <p>{dbLang.intro}</p>
                    <Link activeClass="active" smooth spy={true} to="contact" className="contactme">Contact</Link>
                    <a href="/assets/documents/CV-Morel-Mickael.pdf" target="blank">CV</a>
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