import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Seo from './components/Seo';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import QuotePage from './pages/QuotePage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import './carousel.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();

  return (
    <div className="App">
  <Seo />
  <Header activeSection={activeSection} />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage setSection={setActiveSection} />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/produto/:slug" element={<ProductDetailPage />} />
            <Route path="/orcamento" element={<QuotePage />} />
            <Route path="/obrigado" element={<ThankYouPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="/termos" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
