import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Prices from './pages/Prices';
import Contact from './pages/Contact';

const App = () => {
  const phoneNumber = '+56930740059'; // Número de WhatsApp parametrizable

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/precios" element={<Prices phoneNumber={phoneNumber} />} />
            <Route path="/contacto" element={<Contact phoneNumber={phoneNumber} />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber={phoneNumber} />
      </div>
    </Router>
  );
};

export default App;
