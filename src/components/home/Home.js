import React from 'react'
import Animation from '../animation/Animation'
import './home.css'

export default function Home() {
  return (
    <div id="home" style={{backgroundImage: `url("./assets/images/wave.png")`}}>
      <div className="section-presentation">
        <div className="title">
          <h1>Create your website</h1>
          <h1 className='today-title'>TODAY</h1>
        </div>
        <div className="subtitle">
          <div>
            <p>Fullstack developer</p>
          </div>
          <div>
            <a className="buttonContact" href='#contact'>Contact</a>
          </div>
          <div>
            <ul className="social-media-menu">
              <li><a href="#"><img src="./assets/images/bird.png" alt="twitter" width="40px"/></a></li>
              <li><a href="#"><img src="./assets/images/facebook.png" alt="facebook" width="40px"/></a></li>
              <li><a href="#"><img src="./assets/images/linkedin.png" alt="linkedin" width="40px"/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-3D">
        <Animation/>
      </div>
    </div>
  )
}
