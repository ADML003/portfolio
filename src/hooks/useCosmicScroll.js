import { useEffect, useState, useCallback } from 'react';

export const useCosmicScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(currentScrollY / maxScroll, 1);

    setScrollY(currentScrollY);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    // More aggressive throttling for better performance
    let ticking = false;
    let lastScrollTime = 0;

    const throttledScroll = () => {
      const now = performance.now();

      // Throttle to 30fps instead of 60fps for scroll events
      if (now - lastScrollTime < 33) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
          lastScrollTime = performance.now();
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return { scrollY, scrollProgress };
};
