import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatedTransition } from './components/AnimatedTransition';
import LoadingScreen from './components/LoadingScreen';
import './styles/animations.css';

// Lazy load pages to improve initial load time
const Home = lazy(() => import('./pages/Home'));
const TSMC = lazy(() => import('./pages/TSMC'));
const About = lazy(() => import('./pages/About'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// ScrollToTop component to handle scrolling on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Fallback component for lazy-loaded routes
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 w-24 bg-gray-200 rounded"></div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen isLoading={isLoading} />
      <div className={`min-h-screen flex flex-col ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <AnimatedTransition>
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tsmc" element={<TSMC />} />
                <Route path="/about" element={<About />} />
                <Route path="/tsmc/products/:slug" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </AnimatedTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;