import './App.css';
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Contact from './components/contact/Contact';
import DataAnalityque from './components/dataAnalityque/DataAnalityque';
import Projet from './components/Projets/Projet';
import dbLang from "./language_json/language.json"
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('EN')

  return (
    <div className="App">
      <Home dbLang={dbLang[language].home}/>
      <Service dbLang={dbLang[language].services}/>
      <About dbLang={dbLang[language].about}/>
      <DataAnalityque dbLang={dbLang[language].data}/>
      <Projet dbLang={dbLang[language].projects} language={language}/>
      <Contact dbLang={dbLang[language].contact}/>
      <Navigation setLanguage={setLanguage} language={language} dbLang={dbLang[language].nav}/>
    </div>
  );
}

export default App;
