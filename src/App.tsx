import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroLoader from './components/IntroLoader';
import CursorFollower from './components/CursorFollower';
import Portfolio from './pages/Portfolio';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ChatBot from './components/ChatBot';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle initial loading
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const shouldShowLoader = isLoading || showIntro;

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <AnimatePresence mode="wait">
          {shouldShowLoader && (
            <IntroLoader 
              key="intro-loader"
              onComplete={handleIntroComplete} 
              isOnline={isOnline}
              isInitialLoad={isLoading}
            />
          )}
        </AnimatePresence>
        
        {!shouldShowLoader && (
          <>
            <CursorFollower />
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
            <ChatBot />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;