import React from 'react'
import projet from './projet.json'
import './portfolio.css'

function Portfolio() {
  return (
    <div id="portfolio">
        <div className="title">
            <h2>Latests Projects</h2>
            <p>All the projects below is a personal project</p>
        </div>
        <div className="Project-list">
            {
                projet.map(item => 
                <a href={item.link}>
                    <div className="projet" style={{backgroundImage: `url("assets/projects/${item.img}")`}}>
                        <div className='subInfo'>
                            <p>{item.name}</p>
                            <a href={item.linkGit} target="blank"><img src="./assets/images/Github.png" alt="git-logo" height="30px"/></a>
                        </div>
                    </div>
                </a>
                )
            }
        </div>
    </div>
  )
}

export default Portfolio