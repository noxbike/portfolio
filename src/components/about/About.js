import React from 'react'
import './about.css';
function About() {
  return (
    <div id="about">
        <div className="container">
            <div className="profile">
                <h2>Profile</h2>
                <p>I am a Fullstack Developer Javascript</p>
            </div>
            <div className="layout-profile">
                <div className='aboutMe'>
                    <h3>About me</h3>
                    <p>Hi! I am Fullstack Developer from Reunion.
                    I am insanely passionate about designing beautiful, intuitive and functional websites that live on the internet.</p>
                </div>
                <div className='picture'>
                    <img src="./assets/images/moi.png" alt="moi" />
                </div>
                <div className="details">
                    <div>
                        <h3>Details</h3>
                        <p><strong>Name:</strong><br/>Mickael Morel</p>
                        <p><strong>Age:</strong><br/>27 years old</p>
                        <a href="/assets/documents/CV-Morel-Mickael.pdf" target="blank">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About