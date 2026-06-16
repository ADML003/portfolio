import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

/* ── Auto-rotating globe with Gurugram marker ──────────────── */
const GlobeWidget = () => {
  const containerRef = useRef(null);
  const globeRef     = useRef(null);
  const [size, setSize]   = useState(300);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') !== 'light'
  );

  /* Watch theme changes */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  /* Responsive size */
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setSize(Math.floor(entry.contentRect.width));
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  /* Auto-rotate: increment longitude every frame */
  useEffect(() => {
    let raf;
    let lng = 77.0;
    const tick = () => {
      if (globeRef.current) {
        lng -= 0.18; // rotate left
        globeRef.current.pointOfView({ lat: 22, lng, altitude: 2.2 }, 0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Gurugram marker — green dot only, no label */
  const markers = [{ lat: 28.4595, lng: 77.0266 }];

  return (
    <div ref={containerRef} style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', borderRadius: '12px' }}>
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
          pointsMerge={false}
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
        {/* Left — bio text */}
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

        {/* Right — globe */}
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
