import './App.css';
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Contact from './components/contact/Contact';
import DataAnalityque from './components/dataAnalityque/DataAnalityque';
import Projet from './components/Projets/Projet';

function App() {
  return (
    <div className="App">
      <Home/>
      <Service/>
      <About/>
      <DataAnalityque/>
      <Projet/>
      <Contact/>
      <Navigation/>
    </div>
  );
}

export default App;
