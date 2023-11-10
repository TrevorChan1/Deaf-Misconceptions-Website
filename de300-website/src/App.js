import './App.css';
import React, { createContext, useContext } from 'react';
import Home from './pages/home';
import About from './pages/about';
import NavBar from './components/navbar';
import Sources from './pages/sources';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tracking from './components/tracking';
//m
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sources" element={<Sources/>}/>
          <Route path="/location/:building" element={<Tracking/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
