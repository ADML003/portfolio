// Ultra-smooth scrolling utility
export const initSmoothScroll = () => {
  // Lenis-like smooth scrolling implementation
  let isScrolling = false;
  let lastScrollTime = 0;

  // Throttle scroll events for better performance
  const throttleScroll = (callback, delay = 16) => {
    return (...args) => {
      const now = Date.now();
      if (now - lastScrollTime >= delay) {
        callback.apply(this, args);
        lastScrollTime = now;
      }
    };
  };

  // Enhanced smooth scrolling for anchor links
  const smoothScrollTo = (target, duration = 800) => {
    const targetElement = typeof target === 'string' ? document.querySelector(target) : target;

    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 80; // 80px offset for navbar
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed / duration);

      window.scrollTo(0, startPosition + distance * run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Apply smooth scrolling to navigation links
  const initNavSmoothScroll = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        if (targetId !== '#') {
          smoothScrollTo(targetId);

          // Update URL without triggering scroll
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });
  };

  // Optimize scroll performance
  const optimizeScrolling = () => {
    // Add CSS for hardware acceleration
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: auto !important;
      }
      
      body {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `;
    document.head.appendChild(style);
  };

  // Initialize everything
  const init = () => {
    optimizeScrolling();
    initNavSmoothScroll();

    // Prevent scroll restoration on page reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    scrollTo: smoothScrollTo,
    destroy: () => {
      // Cleanup if needed
      const navLinks = document.querySelectorAll('a[href^="#"]');
      navLinks.forEach((link) => {
        link.removeEventListener('click', smoothScrollTo);
      });
    },
  };
};

// Auto-initialize smooth scrolling
if (typeof window !== 'undefined') {
  initSmoothScroll();
}
