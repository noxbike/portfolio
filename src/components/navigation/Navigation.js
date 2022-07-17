import React, { useState } from 'react'
import listNavigation from './listNavigation.json'
import './navigation.css'

function Navigation() {
    const [navActive, setNavActive] = useState('Home')

  return (
    <div className='navigation'>
        <div className='container'>
            <div className='section-logo'>
                <img src='./assets/images/logo.png' alt="mitech-logo" heigth="70px" width="70px"/>
            </div>
            <div className='section-nav'>
                <ul className='menu'>
                    {listNavigation.map( nav => 
                        <li><a onClick={() => setNavActive(nav.name)} className={nav.name + (navActive === nav.name ? " active" : "")} href={nav.link}>{nav.name}</a></li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation