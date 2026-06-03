import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../data/brand';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [showLoadingText, setShowLoadingText] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isLoading) {
      timeout = setTimeout(() => setShowLoadingText(true), 800);
    } else {
      setShowLoadingText(false);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoading]);

  useEffect(() => {
    const img = new Image();
    img.src = BRAND.logoUrl;
    img.onload = () => setLogoLoaded(true);
    img.onerror = () => setLogoLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="flex flex-col items-center">
            {logoLoaded ? (
              prefersReducedMotion ? (
                <img
                  src={BRAND.logoUrl}
                  alt={`${BRAND.tradeName} logo`}
                  className="h-24 w-auto object-contain"
                  width={96}
                  height={96}
                />
              ) : (
                <motion.div
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 0.98, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <img
                    src={BRAND.logoUrl}
                    alt={`${BRAND.tradeName} logo`}
                    className="h-24 w-auto object-contain"
                    width={96}
                    height={96}
                  />
                </motion.div>
              )
            ) : (
              <div className="h-24 w-24 bg-gray-200 rounded-full animate-pulse" />
            )}

            <AnimatePresence>
              {showLoadingText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  className="mt-4 text-gray-600 text-center"
                >
                  <p className="text-sm">Loading...</p>
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
