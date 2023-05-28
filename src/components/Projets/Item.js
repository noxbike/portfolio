import React from 'react'

export default function Item(props) {
  return (
    <div className='projet'>
        <div className='description'>
                <h3>{props.data.name}</h3>
                <p>{props.data.intro}</p>
                <ul className='languages'>
                    {props.data.languages.map(lang =>
                        <img src={`./assets/images/${lang}.png`} alt={`logo-${props.lang}`} height={25}/>
                    )}
                </ul>
                <div className='linkButton'>
                    <a href={props.data.linkGit}>Voir le code</a>
                </div>
            </div>
            <div className='visualisation'>
                <img className='box1' src={`./assets/projects/${props.data.img}`} alt="landpage" height={200}/>
            </div>
    </div>
  )
}
