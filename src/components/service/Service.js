import React from 'react'
import './service.css'
import AppsIcon from '@mui/icons-material/Apps';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import ScienceIcon from '@mui/icons-material/Science';

function Service({dbLang}) {
  return (
    <div id="service">
        <div className='container'>
            <div className="title">
                <h2>Services</h2>
                <p>{dbLang.intro}</p>
            </div>
            <div className="liste-services">                
                <div className="element">
                    <div>
                        <WebIcon sx={{fontSize: 40, color: '#467c9b'}}/>
                        <h4>Application web</h4>
                    </div>
                    <p>{dbLang.webApp}</p>
                </div>
                <div className="element">
                    <div>
                        <AppsIcon sx={{fontSize: 40, color: '#46519b'}}/>
                        <h4>IOS/Android</h4>
                    </div>
                    <p>{dbLang.phone}</p>
                </div>
                <div className="element">
                    <div>
                        <ApiIcon sx={{fontSize: 40, color: '#467c9b'}}/>
                        <h4>API</h4>
                    </div>
                    <p>{dbLang.api}</p>
                </div>
                <div className="element">
                    <div>
                        <ScienceIcon sx={{fontSize: 40, color: '#46519b'}}/>
                        <h4>CI/CD</h4>
                    </div>
                    <p>{dbLang.cicd}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service