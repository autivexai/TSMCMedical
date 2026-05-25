import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [showLoadingText, setShowLoadingText] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  // Show loading text after 2 seconds to indicate slow connection
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => {
        setShowLoadingText(true);
      }, 2000);
    } else {
      setShowLoadingText(false);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoading]);

  // Preload logo image
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/S__17784835.jpg";
    img.onload = () => setLogoLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
        >
          <div className="flex flex-col items-center">
            {logoLoaded ? (
              <motion.div
                animate={{ 
                  opacity: [1, 0.5, 1],
                  scale: [1, 0.98, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img
                  src="/assets/S__17784835.jpg"
                  alt="TSMC Logo"
                  className="h-24 w-auto object-contain"
                  width="96"
                  height="96"
                />
              </motion.div>
            ) : (
              <div className="h-24 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            )}
            
            <AnimatePresence>
              {showLoadingText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-600 text-center"
                >
                  <p className="text-sm">Loading...</p>
                  <p className="text-xs mt-1">Please wait while we prepare your experience</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;