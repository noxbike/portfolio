import './App.css';
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
