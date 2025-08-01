import { useCosmicScroll } from '../hooks/useCosmicScroll.js';
import { useMemo } from 'react';
import { getAdaptiveSettings } from '../utils/performance.js';

const CosmicBackground = () => {
  const { scrollY, scrollProgress } = useCosmicScroll();

  // Get adaptive settings based on device performance
  const adaptiveSettings = useMemo(() => getAdaptiveSettings(), []);

  // Memoize transform calculations to avoid recalculating on every render
  const planetTransforms = useMemo(
    () => ({
      planet1: {
        transform: `translateY(${scrollY * 0.2}px) rotate(${scrollProgress * 180}deg)`,
        opacity: Math.max(0.1, 1 - scrollProgress * 0.3),
      },
      planet2: {
        transform: `translateY(${scrollY * -0.15}px) rotate(${-scrollProgress * 135}deg)`,
        opacity: Math.max(0.1, 1 - scrollProgress * 0.4),
      },
      planet3: {
        transform: `translateY(${scrollY * 0.3}px) rotate(${scrollProgress * 90}deg)`,
        opacity: Math.max(0.1, 1 - scrollProgress * 0.2),
      },
    }),
    [scrollY, scrollProgress],
  );

  return (
    <>
      {/* Simplified Cosmic Elements that respond to scroll */}
      <div className="cosmic-background">
        {/* Optimized Planets with reduced calculations */}
        <div className="cosmic-planet planet-1" style={planetTransforms.planet1}></div>
        <div className="cosmic-planet planet-2" style={planetTransforms.planet2}></div>
        <div className="cosmic-planet planet-3" style={planetTransforms.planet3}></div>

        {/* Optimized Shooting Stars with reduced timing calculations */}
        <div
          className="cosmic-comet comet-1"
          style={{
            animationDelay: `${2 + scrollProgress * 2}s`,
          }}></div>
        <div
          className="cosmic-comet comet-2"
          style={{
            animationDelay: `${8 + scrollProgress * 3}s`,
          }}></div>

        {/* Simplified UFO with static animations */}
        <div
          className="cosmic-ufo"
          style={{
            position: 'fixed',
            top: '25%',
            right: '15%',
            width: '80px',
            height: '40px',
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollProgress * 30}deg)`,
            opacity: Math.max(0.2, 0.8 - scrollProgress * 0.3),
            zIndex: -1,
            pointerEvents: 'none',
            willChange: 'transform, opacity',
          }}>
          <div
            style={{
              width: '100%',
              height: '20px',
              background: 'linear-gradient(135deg, #4A90E2, #7B68EE, #9370DB)',
              borderRadius: '50px',
              position: 'relative',
              boxShadow: '0 0 20px rgba(123, 104, 238, 0.6)',
            }}>
            {/* UFO Dome */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '20px',
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(123, 104, 238, 0.4))',
                borderRadius: '50% 50% 0 0',
                boxShadow: 'inset 0 2px 10px rgba(255, 255, 255, 0.3)',
              }}></div>
          </div>
        </div>

        {/* Simplified Saturn Planet */}
        <div
          className="cosmic-saturn"
          style={{
            position: 'fixed',
            top: '60%',
            left: '10%',
            width: '120px',
            height: '120px',
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollProgress * 180}deg)`,
            opacity: 0.9 - scrollProgress * 0.4,
            zIndex: -1,
            pointerEvents: 'none',
          }}>
          {/* Planet Core */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle at 30% 30%, #F4A460, #CD853F, #8B4513)',
              borderRadius: '50%',
              boxShadow: '0 0 30px rgba(244, 164, 96, 0.4), inset -10px -10px 20px rgba(0, 0, 0, 0.3)',
            }}></div>
        </div>

        {/* Simplified Nebula Effects */}
        <div
          className="cosmic-nebula nebula-1"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: 0.3 - scrollProgress * 0.1,
          }}></div>
      </div>

      {/* Optimized Cosmic Dust Particles with reduced count */}
      <div className="cosmic-dust">
        {Array.from({ length: Math.min(adaptiveSettings.particleCount, 15) }, (_, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              position: 'fixed',
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              zIndex: -1,
              pointerEvents: 'none',
              willChange: 'transform, opacity',
              transform: `translateY(${scrollY * (Math.random() * 0.2 + 0.1)}px)`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
              opacity: Math.max(0.1, 0.7 - scrollProgress * 0.3),
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CosmicBackground;
