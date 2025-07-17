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
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
    document.documentElement.classList.toggle('reduce-motion', reducedMotion);
    
    localStorage.setItem('highContrast', isHighContrast.toString());
    localStorage.setItem('reducedMotion', reducedMotion.toString());
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