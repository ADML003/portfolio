import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

/* ── Auto-rotating globe — pointer events disabled ─────────── */
const GlobeWidget = () => {
  const containerRef = useRef(null);
  const globeRef     = useRef(null);
  const [size, setSize]   = useState(0);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') !== 'light'
  );

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

  /* continuous auto-rotation */
  useEffect(() => {
    let id;
    let lng = 77.0;
    const tick = () => {
      if (globeRef.current) {
        lng -= 0.18;
        globeRef.current.pointOfView({ lat: 22, lng, altitude: 2.2 }, 0);
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  /* Gurugram marker — green dot only */
  const markers = [{ lat: 28.4595, lng: 77.0266 }];

  return (
    /* pointer-events: none prevents scroll/drag interference */
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
