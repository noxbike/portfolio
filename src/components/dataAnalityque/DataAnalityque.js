import React from 'react'
import './DataAnalityque.css';

export default function DataAnalityque({dbLang}) {
  return (
    <div id='DataAnalityque'>
      <div className='container'>
        <div className="first">
          <h3>Site web professionel</h3>
          <p>{dbLang.intro}</p>
        </div>
        <div className='second'>
          <div><p className='data'>4.6Mrd</p> <p>{dbLang.activeUser}</p></div>
          <div><p className='data'>24/7</p> <p>{dbLang.accessible}</p></div>
          <div><p className='data'>{dbLang.titleWorld}</p> <p>{dbLang.world}</p></div>
        </div>
      </div>
    </div>
  )
}
