import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { 
        threshold, 
        rootMargin,
        // Use low data mode detection if available
        ...('connection' in navigator && (navigator as any).connection?.saveData
          ? { rootMargin: '0px' }
          : {})
      }
    );

    observer.observe(element);
    return () => element && observer.unobserve(element);
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};