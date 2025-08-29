import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import './carousel.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage setSection={setActiveSection} />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
