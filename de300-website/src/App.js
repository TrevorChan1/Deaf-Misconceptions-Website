import './App.css';
import React, { useState, useEffect, createContext, useContext } from 'react';
import Home from './pages/home';
import Mobile from './pages/mobile';
import About from './pages/about';
import NavBar from './components/navbar';
import Sources from './pages/sources';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tracking from './components/tracking';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

function App() {
  const [width, height] = useWindowSize();
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ width <= 600 ? <Mobile/> : <Home/> }/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sources" element={<Sources/>}/>
          <Route path="/location/:building" element={<Tracking/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
