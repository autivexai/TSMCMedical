import React from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedTransitionProps {
  children: React.ReactNode;
}

export const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 50);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`fade-enter${isTransitioning ? '' : ' fade-enter-active'}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};