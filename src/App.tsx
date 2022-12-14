import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPageDelivery from './pages/LandingPageDelivery';
import { useAuth } from './context/AuthProvider/useAuth';
import { AuthProvider } from './context/AuthProvider';
import HomeDelivery from './pages/HomeDelivery';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Delivery from './pages/Delivery';
import Protect from './pages/Protect';
import Dash from './components/Dash';
import Settings from './components/Settings';
import Login from './pages/Login';
import Home from './pages/Home';
import React from 'react';
import './App.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Requests from './components/Requests';
import Stock from './components/Stock';
import Finance from './components/Finance';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/location" element={<LandingPage />} />
          <Route path="/delivery" element={<LandingPageDelivery />} />
          <Route path="/Home" element={
            <Protect>
              <Home />
            </Protect>
          }>
            <Route path='dash/' element={<Dash />} />
            <Route path="Settings/" element={<Settings />} />
            <Route path='requests/' element={<Requests />} />
            <Route path='box/' element={<Stock />} />
            <Route path='finance/' element={<Finance />} />
          </Route>
          <Route path="/HomeDelivery" element={
            <Protect>
              <HomeDelivery />
            </Protect>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/RegistroEntregador" element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
