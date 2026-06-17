import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

/* ── Globe with spin-to-stop animation ─────────────────────── */
const GURUGRAM = { lat: 28.4595, lng: 77.0266 };

const GlobeWidget = () => {
  const containerRef = useRef(null);
  const globeRef     = useRef(null);
  const [size, setSize]   = useState(0);
  // Read from localStorage (same source Navbar uses) — DOM attr may not be set yet at mount
  const [isDark, setIsDark] = useState(
    () => (typeof window !== 'undefined' ? localStorage.getItem('theme') : null) !== 'light'
  );

  // Animation state refs
  const hasPlayed   = useRef(false);
  const isAnimating = useRef(false);
  const animFrameId = useRef(null);

  useEffect(() => {
    const mo = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([e]) => setSize(Math.floor(e.contentRect.width)));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  /* Set initial position far from Gurugram so the spin has distance to cover */
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 22, lng: GURUGRAM.lng + 720, altitude: 2.2 }, 0);
    }
  }, [size]);

  /* Spin-to-stop animation triggered by IntersectionObserver */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current && globeRef.current) {
          hasPlayed.current = true;
          startSpinAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const startSpinAnimation = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const DURATION = 3500;    // ms — total animation time
    const START_SPEED = 12.0; // degrees per frame at the start
    const startTime = performance.now();

    // Start from a position far away from target
    let currentLng = GURUGRAM.lng + 1080; // 3 full rotations worth
    let currentLat = 10; // Start slightly off latitude too
    const targetLat = GURUGRAM.lat;
    const targetLng = GURUGRAM.lng;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      // Exponential ease-out: fast start, smooth slowdown
      // Using a cubic ease-out with extra power for dramatic deceleration
      const eased = 1 - Math.pow(1 - progress, 4);

      // Interpolate from start position to target
      const lng = currentLng + (targetLng - currentLng) * eased;
      const lat = currentLat + (targetLat - currentLat) * eased;

      if (globeRef.current) {
        globeRef.current.pointOfView({ lat, lng, altitude: 2.2 }, 0);
      }

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(tick);
      } else {
        // Snap to exact target
        if (globeRef.current) {
          globeRef.current.pointOfView({ lat: targetLat, lng: targetLng, altitude: 2.2 }, 0);
        }
        isAnimating.current = false;
      }
    };

    animFrameId.current = requestAnimationFrame(tick);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  /* Gurugram marker — green dot */
  const markers = [{ lat: GURUGRAM.lat, lng: GURUGRAM.lng }];

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        aspectRatio: '1',
        overflow: 'hidden',
        borderRadius: '12px',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {size > 0 && (
        <Globe
          ref={globeRef}
          width={size}
          height={size}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl={
            isDark
              ? '//unpkg.com/three-globe/example/img/earth-night.jpg'
              : '//unpkg.com/three-globe/example/img/earth-day.jpg'
          }
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor={isDark ? '#3b82f6' : '#6366f1'}
          atmosphereAltitude={0.18}
          pointsData={markers}
          pointAltitude={0.05}
          pointColor={() => '#22c55e'}
          pointRadius={0.7}
          enablePointerInteraction={false}
        />
      )}
    </div>
  );
};

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
      >
        <span>01</span> About
      </motion.p>

      <div className="about-layout">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p className="about-bio" variants={fadeUp}>
            I design and build intelligent digital products powered by AI and modern web
            technologies. Passionate about creating meaningful experiences that are fast,
            scalable, and human-centered.
          </motion.p>
          <motion.p className="about-bio" variants={fadeUp}>
            My work spans the full stack — from designing scalable backend architectures
            and integrating AI APIs to crafting high-fidelity UIs and deploying
            production-grade applications. I care deeply about the craft.
          </motion.p>
        </motion.div>

        <motion.div
          className="globe-wrapper"
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.15 }}
        >
          <GlobeWidget />
          <div className="globe-label">Gurugram, India · IST (UTC+5:30)</div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
