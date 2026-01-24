import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import { SmoothScroll } from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import Preloader from './components/Preloader';
import PageLoader from './components/PageLoader';
import ErrorBoundary from './components/ErrorBoundary';
import NoiseOverlay from './components/ui/NoiseOverlay';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const TechnicalData = lazy(() => import('./pages/TechnicalData'));
const Clients = lazy(() => import('./pages/Clients'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/products/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
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
      <ScrollToTop />
      <NoiseOverlay />
      <Preloader />
      <ErrorBoundary>
        <SmoothScroll>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </Layout>
        </SmoothScroll>
      </ErrorBoundary>
    </Router>
  );
}

export default App;