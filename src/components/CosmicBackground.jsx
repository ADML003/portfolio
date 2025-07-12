import { useCosmicScroll } from '../hooks/useCosmicScroll.js';
import { useState, useEffect } from 'react';

const CosmicBackground = () => {
  const { scrollY, scrollProgress } = useCosmicScroll();
  const [collisions, setCollisions] = useState([]);

  // Collision detection between cosmic elements
  useEffect(() => {
    const checkCollisions = () => {
      const elements = [
        { id: 'ufo', x: window.innerWidth * 0.85, y: window.innerHeight * 0.25, radius: 40 },
        { id: 'saturn', x: window.innerWidth * 0.1, y: window.innerHeight * 0.6, radius: 60 },
        { id: 'ice-planet', x: window.innerWidth * 0.95, y: window.innerHeight * 0.7, radius: 25 },
        { id: 'planet-1', x: window.innerWidth * 0.2, y: window.innerHeight * 0.3, radius: 40 },
        { id: 'planet-2', x: window.innerWidth * 0.85, y: window.innerHeight * 0.8, radius: 30 },
        { id: 'planet-3', x: window.innerWidth * 0.6, y: window.innerHeight * 0.4, radius: 20 },
      ];

      const newCollisions = [];

      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const dx = elements[i].x - elements[j].x;
          const dy = elements[i].y - elements[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = elements[i].radius + elements[j].radius + 50; // Adding buffer for collision area

          if (distance < minDistance) {
            newCollisions.push({
              id: `${elements[i].id}-${elements[j].id}`,
              x: (elements[i].x + elements[j].x) / 2,
              y: (elements[i].y + elements[j].y) / 2,
              timestamp: Date.now(),
            });
          }
        }
      }

      setCollisions(newCollisions);
    };

    const interval = setInterval(checkCollisions, 2000); // Check every 2 seconds
    return () => clearInterval(interval);
  }, [scrollY]);

  return (
    <>
      {/* Dynamic Cosmic Elements that respond to scroll */}
      <div className="cosmic-background">
        {/* Animated Planets with Scroll Parallax */}
        <div
          className="cosmic-planet planet-1"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollProgress * 360}deg)`,
            opacity: 1 - scrollProgress * 0.3,
          }}></div>
        <div
          className="cosmic-planet planet-2"
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${-scrollProgress * 270}deg)`,
            opacity: 1 - scrollProgress * 0.4,
          }}></div>
        <div
          className="cosmic-planet planet-3"
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotate(${scrollProgress * 180}deg)`,
            opacity: 1 - scrollProgress * 0.2,
          }}></div>

        {/* Shooting Stars with Dynamic Timing */}
        <div
          className="cosmic-comet comet-1"
          style={{
            animationDelay: `${2 + scrollProgress * 3}s`,
          }}></div>
        <div
          className="cosmic-comet comet-2"
          style={{
            animationDelay: `${8 + scrollProgress * 5}s`,
          }}></div>

        {/* Additional Cosmic Elements */}
        <div
          className="cosmic-comet"
          style={{
            top: '30%',
            animationDelay: `${5 + scrollProgress * 4}s`,
            animation: 'comet-trail 18s linear infinite',
          }}></div>

        {/* Floating UFO */}
        <div
          className="cosmic-ufo"
          style={{
            position: 'fixed',
            top: '25%',
            right: '15%',
            width: '80px',
            height: '40px',
            transform: `translateY(${scrollY * 0.4 + Math.sin(Date.now() * 0.001) * 20}px) rotate(${scrollProgress * 45}deg)`,
            opacity: 0.8 - scrollProgress * 0.3,
            zIndex: -1,
            pointerEvents: 'none',
            animation: 'ufo-float 8s ease-in-out infinite',
            filter: collisions.length > 0 ? 'drop-shadow(0 0 20px #00FFFF)' : 'none',
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
            {/* UFO Lights */}
            <div
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: '20%',
                width: '8px',
                height: '8px',
                background: '#00FF00',
                borderRadius: '50%',
                animation:
                  collisions.length > 0 ? 'ufo-light 0.5s ease-in-out infinite' : 'ufo-light 1.5s ease-in-out infinite',
                boxShadow: '0 0 10px #00FF00',
              }}></div>
            <div
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                background: '#FF6B6B',
                borderRadius: '50%',
                animation:
                  collisions.length > 0
                    ? 'ufo-light 0.5s ease-in-out infinite 0.25s'
                    : 'ufo-light 1.5s ease-in-out infinite 0.5s',
                boxShadow: '0 0 10px #FF6B6B',
              }}></div>
            <div
              style={{
                position: 'absolute',
                bottom: '-5px',
                right: '20%',
                width: '8px',
                height: '8px',
                background: '#4ECDC4',
                borderRadius: '50%',
                animation:
                  collisions.length > 0
                    ? 'ufo-light 0.5s ease-in-out infinite 0.5s'
                    : 'ufo-light 1.5s ease-in-out infinite 1s',
                boxShadow: '0 0 10px #4ECDC4',
              }}></div>
          </div>
        </div>

        {/* Saturn-like Planet with Rings */}
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
              animation: 'planet-glow 6s ease-in-out infinite',
            }}></div>
          {/* Ring 1 */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(255, 215, 0, 0.6)',
              borderRadius: '50%',
              animation: 'ring-rotate 12s linear infinite',
            }}></div>
          {/* Ring 2 */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '120px',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              borderRadius: '50%',
              animation: 'ring-rotate 15s linear infinite reverse',
            }}></div>
        </div>

        {/* Small Ice Planet */}
        <div
          className="cosmic-ice-planet"
          style={{
            position: 'fixed',
            top: '70%',
            right: '5%',
            width: '50px',
            height: '50px',
            transform: `translateY(${scrollY * 0.6}px) rotate(${scrollProgress * 200}deg)`,
            opacity: 0.7 - scrollProgress * 0.2,
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
              width: '35px',
              height: '35px',
              background: 'radial-gradient(circle at 30% 30%, #B0E0E6, #87CEEB, #4682B4)',
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(176, 224, 230, 0.6), inset -5px -5px 10px rgba(0, 0, 0, 0.3)',
              animation: 'twinkle 4s ease-in-out infinite',
            }}></div>
          {/* Small Ring */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotateX(60deg)',
              width: '45px',
              height: '45px',
              border: '1px solid rgba(176, 224, 230, 0.8)',
              borderRadius: '50%',
              animation: 'ring-rotate 6s linear infinite reverse',
            }}></div>
        </div>

        {/* Nebula Effects with Scroll Response */}
        <div
          className="cosmic-nebula nebula-1"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollProgress * 0.3})`,
            opacity: 0.3 - scrollProgress * 0.1,
          }}></div>
        <div
          className="cosmic-nebula nebula-2"
          style={{
            transform: `translateY(${scrollY * -0.15}px) scale(${1 + scrollProgress * 0.2})`,
            opacity: 0.4 - scrollProgress * 0.15,
          }}></div>

        {/* Additional Nebula */}
        <div
          className="cosmic-nebula"
          style={{
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(30, 144, 255, 0.08), transparent)',
            top: '50%',
            left: '20%',
            transform: `translateY(${scrollY * 0.25}px)`,
            opacity: 0.5 - scrollProgress * 0.2,
            filter: 'blur(50px)',
            animation: 'nebula-float 15s ease-in-out infinite',
            animationDelay: '7s',
          }}></div>
      </div>

      {/* Cosmic Dust Particles */}
      <div className="cosmic-dust">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              position: 'fixed',
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: `rgba(255, 255, 255, ${Math.random() * 0.8})`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              zIndex: -1,
              pointerEvents: 'none',
              transform: `translateY(${scrollY * (Math.random() * 0.5 + 0.1)}px)`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
              opacity: 0.7 - scrollProgress * 0.3,
            }}
          />
        ))}
      </div>

      {/* Galaxy Spiral Effect */}
      <div
        className="galaxy-spiral"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          background: `conic-gradient(from ${scrollProgress * 360}deg, 
            transparent, 
            rgba(138, 43, 226, 0.03), 
            transparent, 
            rgba(75, 0, 130, 0.03), 
            transparent)`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -2,
          pointerEvents: 'none',
          opacity: 0.5 - scrollProgress * 0.2,
        }}></div>

      {/* Collision Effects */}
      {collisions.map((collision) => (
        <div
          key={collision.id}
          className="collision-effect"
          style={{
            position: 'fixed',
            left: collision.x,
            top: collision.y,
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 215, 0, 0.6), transparent)',
            animation: 'collision-burst 2s ease-out forwards',
            zIndex: 10,
            pointerEvents: 'none',
          }}>
          {/* Shockwave Ring */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              animation: 'shockwave-expand 2s ease-out forwards',
            }}></div>

          {/* Energy Particles */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '4px',
                height: '4px',
                background: `hsl(${Math.random() * 60 + 20}, 100%, 70%)`,
                borderRadius: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${20 + Math.random() * 30}px)`,
                animation: `particle-burst-${i} 2s ease-out forwards`,
                boxShadow: '0 0 10px currentColor',
              }}></div>
          ))}

          {/* Electric Arcs */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00FFFF, transparent)',
              animation: 'electric-arc-1 0.5s ease-in-out infinite alternate',
            }}></div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #FF00FF, transparent)',
              animation: 'electric-arc-2 0.7s ease-in-out infinite alternate',
            }}></div>
        </div>
      ))}

      {/* Gravitational Wave Effects */}
      <div
        className="gravitational-waves"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
        }}>
        {collisions.length > 0 &&
          Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                border: `1px solid rgba(0, 255, 255, ${0.3 - i * 0.1})`,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `gravitational-wave ${2 + i * 0.5}s ease-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}></div>
          ))}
      </div>
    </>
  );
};

export default CosmicBackground;
