// Performance optimization utilities

export const performanceConfig = {
  // Scroll throttling
  scrollThrottleMs: 33, // ~30fps

  // Animation intervals
  backgroundAnimationInterval: 5000, // 5 seconds
  heroAnimationCycle: 8000, // 8 seconds

  // Canvas settings
  canvasPixelRatio: [1, 2], // Limit to max 2x for retina
  canvasPerformance: { min: 0.5 },

  // Three.js optimizations
  floatIntensity: {
    low: 0.015,
    medium: 0.03,
    high: 0.05,
  },

  // Scroll multipliers (reduced for performance)
  scrollMultipliers: {
    planet1: 0.2,
    planet2: -0.15,
    planet3: 0.3,
    ufo: 0.3,
    comet: 0.25,
  },

  // Rotation multipliers (reduced for performance)
  rotationMultipliers: {
    planet1: 180,
    planet2: 135,
    planet3: 90,
    ufo: 30,
  },
};

// Device performance detection
export const getDevicePerformance = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  if (!gl) return 'low';

  const renderer = gl.getParameter(gl.RENDERER);

  // Basic heuristics for performance detection
  if (renderer.toLowerCase().includes('mobile') || navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4) {
    return 'low';
  }

  if (navigator.hardwareConcurrency >= 8 && navigator.deviceMemory >= 8) {
    return 'high';
  }

  return 'medium';
};

// Adaptive performance settings
export const getAdaptiveSettings = () => {
  const performance = getDevicePerformance();

  const settings = {
    low: {
      canvasPixelRatio: [1, 1],
      particleCount: 25,
      animationInterval: 8000,
      floatIntensity: performanceConfig.floatIntensity.low,
      enableCollisions: false,
    },
    medium: {
      canvasPixelRatio: [1, 1.5],
      particleCount: 40,
      animationInterval: 6000,
      floatIntensity: performanceConfig.floatIntensity.medium,
      enableCollisions: true,
    },
    high: {
      canvasPixelRatio: [1, 2],
      particleCount: 50,
      animationInterval: 5000,
      floatIntensity: performanceConfig.floatIntensity.high,
      enableCollisions: true,
    },
  };

  return settings[performance];
};

// Debounce utility for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// RAF throttle for animations
export const rafThrottle = (callback) => {
  let ticking = false;

  return (...args) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
};
