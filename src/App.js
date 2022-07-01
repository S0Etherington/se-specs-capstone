import './App.css';
import { Routes, Route } from 'react-router-dom'
import Codex from './components/Codex';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div className='home'>
        <Home />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
