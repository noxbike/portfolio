import React from 'react'
import './service.css'
import AppsIcon from '@mui/icons-material/Apps';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import ScienceIcon from '@mui/icons-material/Science';

function Service() {
  return (
    <div id="service">
        <div className='container'>
            <div className="title">
                <h2>Services</h2>
                <p>Transformez votre vision en réalité numérique avec des solutions web personnalisées, 
                    conçues avec soin et expertise pour propulser votre entreprise vers de nouveaux sommets
                    en ligne
                </p>
            </div>
            <div className="liste-services">
                <div className="element">
                    <div>
                        <ScienceIcon sx={{fontSize: 40, color: '#46519b'}}/>
                        <h4>Site Web Pro</h4>
                    </div>
                    <p>Créer des applications web sur mesure, en utilisant des technologies appropriées.</p>
                </div>
                <div className="element">
                    <div>
                        <WebIcon sx={{fontSize: 40, color: '#467c9b'}}/>
                        <h4>Web</h4>
                    </div>
                    <p>Concevoir, développer et déployer des sites web complets, de la création de la maquette initiale à la mise en ligne du site.</p>
                </div>
                <div className="element">
                    <div>
                        <AppsIcon sx={{fontSize: 40, color: '#46519b'}}/>
                        <h4>Application Mobile</h4>
                    </div>
                    <p>Développer des applications mobiles pour iOS et/ou Android en utilisant des frameworks tels que React Native</p>
                </div>
                <div className="element">
                    <div>
                        <ApiIcon sx={{fontSize: 40, color: '#467c9b'}}/>
                        <h4>API</h4>
                    </div>
                    <p> Intégration de différentes applications et systèmes en utilisant des API (Interfaces de programmation d'application).</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service