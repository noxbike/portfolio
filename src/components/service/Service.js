import React from 'react'
import './service.css'

function Service() {
  return (
    <div id="service">
        <div className="title">
            <h2>Services</h2>
        </div>
        <div className="liste-services">
            <div className="element">
                <div>
                    <img src="./assets/images/backend.png" alt="backend-logo" height="100px"/>
                </div>
                <ul className="liste-element">
                    <li>- Database</li>
                    <li>- API</li>
                    <li>- Automatisation</li>
                    <li>- Newsletter</li>
                    <li>- Scrapping</li>
                    <li>- Clean code</li>
                </ul>
            </div>
            <div className="element">
                <div>
                    <img src="./assets/images/design.png" alt="design-logo" height="100px"/>
                </div>
                <ul className="liste-element">
                    <li>- Design</li>
                    <li>- Typography</li>
                    <li>- Animation</li>
                    <li>- Clean code</li>
                </ul>
            </div>
            <div className="element">
                <div>
                    <img src="./assets/images/deployment.png" alt="rocket-logo" height="100px"/>
                </div>
                <ul className="liste-element">
                    <li>- Hosting</li>
                    <li>- Maintenance</li>
                    <li>- Save / Backup</li>
                    <li>- Fixing Bug</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Service