import { motion } from 'framer-motion';
import { VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
    >
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {year} Aditya Malhotra · Built with React &amp; Vite
          </span>

          <div className="footer-links">
            {[
              { label: 'GitHub',      href: 'https://github.com/ADML003',                              external: true },
              { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/aditya-malhotra-50884b26a/',      external: true },
              { label: 'X / Twitter', href: 'https://x.com/adml003',                                   external: true },
              { label: 'Email',       href: 'mailto:reach.adml@gmail.com',                             external: false },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="footer-link"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
