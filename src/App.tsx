import React from 'react';
import './App.scss';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Protect from './pages/Protect';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';
import Register from './pages/Register';

function App() {
  setInterval(() =>{
    alert()
  }, 1500)
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={
            <Protect>
              <Home />
            </Protect>
          } />
          <Route path="/config" element={
            <Protect>
              <Config />
            </Protect>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
