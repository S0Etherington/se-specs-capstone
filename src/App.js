import './App.css';
import { Routes, Route } from 'react-router-dom'
import Codex from './components/Codex';
import Home from './components/Home';
import Navigation from './components/Navigation';
import StoryPage from './components/StoryPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<Home />} />
        <Route path='/StoryPage' element={<StoryPage />} />

      </Routes>
      <div>
            <Navigation />
        </div>
    </div>
  );
}

export default App;
