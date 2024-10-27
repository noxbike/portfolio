import React from 'react'

export default function Item({data, language}) {
  return (
    <div className='projet'>
        <div className='description'>
                <h3>{data.name}</h3>
                <p>{data.intro[language]}</p>
                <ul className='languages'>
                    {data.languages.map((lang, index) =>
                        <img loading='lazy' key={index} src={`./assets/images/${lang}.png`} alt={`logo-${lang}`} height={25}/>
                    )}
                </ul>
                <div className='linkButton'>
                    <a href={data.linkGit}>Github</a>
                </div>
            </div>
            <div className='visualisation'>
                <img loading="lazy" className='box1' src={`./assets/projects/${data.img}`} alt="landpage" height={200}/>
            </div>
    </div>
  )
}
