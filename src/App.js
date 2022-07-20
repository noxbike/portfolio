import './App.css';
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/service/Service'
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Portfolio/>
      <Service/>
      <Contact/>
      <Navigation/>
    </div>
  );
}

export default App;
