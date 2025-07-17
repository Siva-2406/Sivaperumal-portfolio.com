import { useState, useEffect } from 'react';

export const useAccessibility = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    
    setIsHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion);

    // Check system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && !localStorage.getItem('reducedMotion')) {
      setReducedMotion(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply accessibility classes
    root.classList.toggle('high-contrast', isHighContrast);
    root.classList.toggle('reduce-motion', reducedMotion);
    
    // Save to localStorage
    localStorage.setItem('highContrast', isHighContrast.toString());
    localStorage.setItem('reducedMotion', reducedMotion.toString());
    
    // Apply ARIA attributes for screen readers
    root.setAttribute('aria-live', 'polite');
    root.setAttribute('data-high-contrast', isHighContrast.toString());
    root.setAttribute('data-reduced-motion', reducedMotion.toString());
  }, [isHighContrast, reducedMotion]);

  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  const toggleReducedMotion = () => setReducedMotion(prev => !prev);

  return {
    isHighContrast,
    reducedMotion,
    toggleHighContrast,
    toggleReducedMotion
  };
};