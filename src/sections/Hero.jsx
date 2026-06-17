import { motion } from 'framer-motion';
import { EASE_OUT_EXPO, SPRING_SOFT } from '../lib/animations.js';

const AnimatedName = ({ name, delay = 0 }) => {
  const words = name.split(' ');
  return (
    <div className="hero-name" aria-label={name}>
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: wi < words.length - 1 ? '0.2em' : 0,
          }}
        >
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              style={{ display: 'inline-block' }}
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 0.75,
                ease: EASE_OUT_EXPO,
                delay: delay + (wi * word.length + ci) * 0.022,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const t = document.querySelector(href);
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 66, behavior: 'smooth' });
  };

  const t = (n) => ({ duration: 0.72, ease: EASE_OUT_EXPO, delay: n });

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">

          {/* ── Left / Top column: all text content ── */}
          <div className="hero-content">
            {/* Mobile: top row = avatar (small) + status badge side-by-side */}
            <div className="hero-top-row">
              {/* Avatar — visible only on mobile, inlined here */}
              <motion.div
                className="hero-avatar-mobile"
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
              >
                <div className="hero-avatar-ring-sm">
                  <img src="/assets/headshot.jpg" alt="Aditya Malhotra" className="hero-avatar-img" loading="eager" />
                  <div className="hero-avatar-halo" />
                </div>
              </motion.div>

              <motion.div
                className="hero-status"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={t(0.05)}
              >
                <span className="hero-status-dot" />
                Open to work
              </motion.div>
            </div>

            {/* Name */}
            <AnimatedName name="Aditya Malhotra" delay={0.12} />

            {/* Role */}
            <div style={{ overflow: 'hidden', marginBottom: '10px' }}>
              <motion.p
                className="hero-role"
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={t(0.5)}
                style={{ marginBottom: 0 }}
              >
                AI Engineer
              </motion.p>
            </div>

            {/* Bio */}
            <motion.p className="hero-bio" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={t(0.6)}>
              I build full-stack web apps and AI-powered products that solve real problems
              — from intelligent SaaS platforms to data dashboards.
            </motion.p>

            {/* Location */}
            <motion.div className="hero-location" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={t(0.68)}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 115 5a1.5 1.5 0 012 2.5z" fill="currentColor" />
              </svg>
              Gurugram, India
            </motion.div>

            {/* Buttons */}
            <motion.div className="hero-socials" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={t(0.74)}>
              {[
                { href: 'mailto:reach.adml@gmail.com', label: 'Email', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
                { href: 'https://github.com/ADML003', label: 'GitHub', target: '_blank', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                { href: 'https://www.linkedin.com/in/aditya-malhotra-50884b26a/', label: 'LinkedIn', target: '_blank', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
              ].map((btn) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.target}
                  rel={btn.target ? 'noopener noreferrer' : undefined}
                  className="btn"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ y: 0, scale: 0.98 }}
                  transition={SPRING_SOFT}
                >
                  {btn.icon}
                  {btn.label}
                </motion.a>
              ))}

              <motion.a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, '#projects')}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={SPRING_SOFT}
              >
                View my work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right column: avatar — desktop only ── */}
          <motion.div
            className="hero-avatar-col"
            initial={{ opacity: 0, x: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.25 }}
          >
            <div className="hero-avatar-ring">
              <img src="/assets/headshot.jpg" alt="Aditya Malhotra" className="hero-avatar-img" loading="eager" />
              <div className="hero-avatar-halo" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
