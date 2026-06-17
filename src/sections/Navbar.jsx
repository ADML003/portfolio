import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_OUT_EXPO } from '../lib/animations.js';
import Dock from '../components/Dock.jsx';
import {
  HiOutlineHome,
  HiOutlineEnvelope,
  HiOutlineSun,
  HiOutlineMoon,
} from 'react-icons/hi2';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const navItems = [
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#tech-skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Work',     href: '#work' },
  { name: 'Contact',  href: '#contact' },
];

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const ICON_SIZE = 17;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'dark') : 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = href => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 66, behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  /* ── 4-item dock: Home · Contact · LinkedIn · GitHub ─────── */
  /* ── Dock: Home · Contact · X · LinkedIn · GitHub ───────── */
  const dockItems = [
    {
      icon: <HiOutlineHome size={ICON_SIZE} />,
      label: 'Home',
      onClick: () => scrollTo('#home'),
    },
    {
      icon: <HiOutlineEnvelope size={ICON_SIZE} />,
      label: 'Email me',
      onClick: () => window.location.href = 'mailto:reach.adml@gmail.com',
    },
    {
      icon: <SiX size={ICON_SIZE - 1} />,
      label: '@adml003',
      onClick: () => window.open('https://x.com/adml003', '_blank', 'noopener,noreferrer'),
    },
    {
      icon: <FaLinkedinIn size={ICON_SIZE} />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/adityamalhotra003/', '_blank', 'noopener,noreferrer'),
    },
    {
      icon: <FaGithub size={ICON_SIZE} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/ADML003', '_blank', 'noopener,noreferrer'),
    },
  ];

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
      >
        <div className="navbar-inner">
          <motion.a
            href="#home"
            className="navbar-logo"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            AxM
          </motion.a>

          <div className="navbar-right">
            {/* Desktop nav links */}
            <ul className="navbar-links">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.45, ease: EASE_OUT_EXPO }}
                >
                  <a href={item.href} onClick={e => { e.preventDefault(); scrollTo(item.href); }}>
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.45, ease: EASE_OUT_EXPO }}
              >
                <a href="https://github.com/ADML003" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  GitHub
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.li>
            </ul>

            {/* Theme toggle — desktop AND mobile (top-right) */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                  exit={{    opacity: 0, rotate:  30, scale: 0.7 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Dock — bottom glass pill ──────────────────── */}
      <motion.div
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, pointerEvents: 'none', zIndex: 200 }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5, ease: EASE_OUT_EXPO }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <Dock
            items={dockItems}
            baseItemSize={38}
            magnification={52}
            panelHeight={52}
            distance={100}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
