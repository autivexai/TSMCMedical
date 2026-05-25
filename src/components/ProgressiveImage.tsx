import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  placeholderColor?: string;
  priority?: boolean;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderColor = '#f3f4f6',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver();

  // Optimize image URL for better performance
  const getOptimizedImageUrl = (url: string) => {
    // Handle Unsplash images
    if (url.includes('images.unsplash.com')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}auto=format,compress&w=${window.innerWidth <= 768 ? '600' : '1200'}&q=75`;
    }
    return url;
  };

  // Preload high priority images
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = getOptimizedImageUrl(src);
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  // Load image when in viewport
  useEffect(() => {
    if (!priority && isVisible && !isLoaded && !error) {
      const img = new Image();
      img.src = getOptimizedImageUrl(src);
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [isVisible, src, isLoaded, error, priority]);

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        backgroundColor: placeholderColor,
        width: width,
        height: height
      }}
    >
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 skeleton" 
          aria-hidden="true"
        />
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      )}
      
      {(priority || isVisible) && !error && (
        <img
          src={getOptimizedImageUrl(src)}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
        />
      )}
    </div>
  );
};