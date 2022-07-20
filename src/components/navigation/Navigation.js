import React from 'react'
import { Link } from "react-scroll";
import listNavigation from './listNavigation.json'
import './navigation.css'

function Navigation() {

  return (
    <div className='navigation'>
        <div className='container'>
            <div className='section-logo'>
                <img src='./assets/images/logo.png' alt="mitech-logo" heigth="70px" width="70px"/>
            </div>
            <div className='section-nav'>
                <ul className='menu'>
                    {listNavigation.map( (nav,index) => 
                        <li key={index}><Link activeClass="active" smooth spy={nav.spy} to={nav.link} className={nav.name}>{nav.name}</Link></li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation