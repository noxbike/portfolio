import React from 'react'
import './about.css';
function About() {
  return (
    <div id="about">
        <div className="profile">
            <h2>Profile</h2>
            <p>I am a Fullstack Developer Javascript</p>
        </div>
        <div className="layout-profile">
            <div className='aboutMe'>
                <h3>About me</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, rerum esse! Amet tempora alias, laudantium recusandae assumenda accusamus repellendus nihil.</p>
            </div>
            <div className='picture'>
                <img src="./assets/images/moi.png" alt="moi" width={"300px"} />
            </div>
            <div className="details">
                <h3>Details</h3>
                <p><strong>Name:</strong><br/>Mickael Morel</p>
                <p><strong>Age:</strong><br/>27 years old</p>
                <a href="/assets/documents/CV-Morel-Mickael.pdf" target="blank">Download CV</a>
            </div>
        </div>
    </div>
  )
}

export default About