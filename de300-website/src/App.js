import './App.css';
import React, { createContext, useContext } from 'react';
import Home from './pages/home';
import NavBar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <p>Hiii</p>
    </div>
    
  );
}

export default App;
