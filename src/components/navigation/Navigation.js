import React from 'react'
import { Link } from "react-scroll";
import listNavigation from './listNavigation.json'
import './navigation.css'

function Navigation({setLanguage, language, dbLang}) {

  return (
    <div className='navigation'>
        <div className='container'>
            <div className='section-logo'>
                <img src='./assets/images/logo.png' alt="mitech-logo" heigth="70px" width="70px"/>
            </div>
            <div className='section-nav'>
                <ul className='menu'>
                    {listNavigation.map( (item,index) => 
                        <li key={index}><Link activeClass="active" smooth spy={item.spy} to={item.link} className={item.name}>{dbLang[item.name]}</Link></li>
                    )}
                </ul>
            </div>
            <div className='languages'>
                    <select onChange={(e) => setLanguage(e.target.value)} defaultValue={language}>
                        <option value="EN">EN</option>
                        <option value="FR">FR</option>
                    </select>
            </div>
        </div>
    </div>
  )
}

export default Navigation