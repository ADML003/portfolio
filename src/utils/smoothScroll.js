// Lightweight smooth scroll helper.
// Keep this minimal to avoid conflicting click handlers across browsers.

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') {
    return {
      scrollTo: () => {},
      destroy: () => {},
    };
  }

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const scrollTo = (target) => {
    const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return {
    scrollTo,
    destroy: () => {},
  };
};
