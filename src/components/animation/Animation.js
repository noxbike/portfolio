import React from 'react'
import './animation.css'

function Animation() {
  return (
    <div id="animation">
        <div className="screen">
            <div className="background" style={{backgroundImage: `url("./assets/images/font2.jpg")`}}></div>
            <div className="secondbackground"></div>
            <div className="title"><span>Logo</span><span>home  about  portfolio  contact</span></div>
            <div className="content">
                <div>
                    <h1>Landing Page design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea minus illum consectetur officiis itaque in, blanditiis, ut, quaerat culpa fuga.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Animation