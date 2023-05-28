import React from 'react'
import './home.css'
import Lottie from 'lottie-react'
import animationData from "./website.json"

export default function Home() {
  return (
    <div id="home">
      <div className='container'>
        <div className="section-presentation">
          <div className="title">
            <h1><span className='sub-title'>Bonjour, je suis </span><br/>DEVELOPPEUR <span className='today-title'>FULLSTACK</span></h1>
          </div>
          <div className="subtitle">
            <div>
              <p>Découvrez mes compétences variées en développement front-end et back-end, ainsi que mes projets passionnants</p>
            </div>
            <div>
              <a className="buttonContact" href='#contact'>Contact</a>
            </div>
            <div>
              <ul className="social-media-menu">
                  <li><a href="https://www.facebook.com/morel.mickael.169" target={"blank"}><img src="./assets/images/facebook.png" alt="facebook-logo" height="40px"/></a></li>
                  <li><a href='https://www.linkedin.com/in/mickael-morel-134879150/' target={"blank"}><img src="./assets/images/linkedin.png" alt="linkedin-logo" height="40px"/></a></li>
                  <li><a href="https://twitter.com/noxbike" target="blank"><img src="./assets/images/bird.png" alt="twitter-logo" height="40px"/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-3D">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  )
}
