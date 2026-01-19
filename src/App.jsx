import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import TechnicalData from './pages/TechnicalData';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import { SmoothScroll } from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import Preloader from './components/Preloader';
import NoiseOverlay from './components/ui/NoiseOverlay';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/technical-data" element={<PageTransition><TechnicalData /></PageTransition>} />
        <Route path="/clients" element={<PageTransition><Clients /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <NoiseOverlay />
      <Preloader />
      <SmoothScroll>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;