import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatedTransition } from './components/AnimatedTransition';
import LoadingScreen from './components/LoadingScreen';
import { SESSION_VISITED_KEY } from './data/brand';
import './styles/animations.css';

const Home = lazy(() => import('./pages/Home'));
const TSMC = lazy(() => import('./pages/TSMC'));
const About = lazy(() => import('./pages/About'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />
      <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
      <div className="h-3 w-24 bg-gray-200 rounded" />
    </div>
  </div>
);

function hasVisitedBefore(): boolean {
  try {
    return sessionStorage.getItem(SESSION_VISITED_KEY) === '1';
  } catch {
    return true;
  }
}

function markVisited(): void {
  try {
    sessionStorage.setItem(SESSION_VISITED_KEY, '1');
  } catch {
    /* ignore */
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(() => !hasVisitedBefore());

  useEffect(() => {
    if (!isLoading) return;

    const finish = () => {
      markVisited();
      setIsLoading(false);
    };

    const maxWait = window.setTimeout(finish, 1200);

    if (document.readyState === 'complete') {
      window.setTimeout(finish, 280);
      return () => clearTimeout(maxWait);
    }

    const onLoad = () => window.setTimeout(finish, 280);
    window.addEventListener('load', onLoad, { once: true });

    return () => {
      clearTimeout(maxWait);
      window.removeEventListener('load', onLoad);
    };
  }, [isLoading]);

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
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
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
