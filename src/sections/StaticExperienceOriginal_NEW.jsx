import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

const experiences = [
  {
    id: 1,
    initial: 'B',
    color: '#3b82f6',
    role: 'Founding Tech & Marketing Lead',
    company: 'Beas Green Solutions',
    period: 'Jun 2025 – Jul 2025',
    intro:
      'Architected and deployed a full-stack digital platform for BGS, integrating Google Maps API for geolocation services and a dynamic product catalog that streamlined user navigation and product discovery.',
    achievements: [
      'Architected and deployed the full-stack digital platform for BGS — a production manufacturing company — integrating Google Maps API for geolocation services and a dynamic product catalog for bricks, furniture, and block products.',
      'Developed and deployed PixPro, a proprietary AI image-processing tool using Cloudinary AI, enabling automated enhancement of product photos and marketing hoardings for the client\'s digital campaigns.',
      'Established a unified communication pipeline via WhatsApp Business API to automate digital engagement, lead capture, and customer-to-sales routing.',
      'Deployed both platforms on Vercel with CI/CD pipelines, achieving sub-2s load times and optimized Core Web Vitals across all pages.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Google Maps API', 'WhatsApp Business API', 'Vercel'],
  },
  {
    id: 2,
    initial: 'A',
    color: '#8b5cf6',
    role: 'Web Developer',
    company: 'AWARA – An Apparel Brand',
    location: 'Gurugram, Haryana',
    period: 'Sept 2024 – Present',
    intro:
      'Engineered and launched the official brand website, delivering a high-conversion UI/UX and mobile-first responsiveness from concept to deployment.',
    achievements: [
      'Engineered and launched the official AWARA brand website with a strong focus on high-conversion UI/UX and mobile-first responsiveness, handling all architecture from concept to deployment.',
      'Led end-to-end website architecture and operational workflows including secure payment gateway integration, dynamic inventory synchronization, and responsive storefront customization.',
      'Significantly improved checkout efficiency, product discoverability, and overall customer engagement through targeted UX decisions and performance optimization.',
      'Managed order management systems and operational workflows, ensuring reliability and scalability of the e-commerce platform.',
    ],
    tags: ['WordPress', 'PHP', 'Razorpay', 'Stripe', 'SEO', 'Google Analytics', 'WooCommerce'],
  },
];

const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StaticExperience = () => {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section id="work" className="section">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
        >
          <span>04</span> Experience
        </motion.p>

        <motion.div
          className="experience-list"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className={`experience-item ${expanded === exp.id ? 'is-open' : ''}`}
              variants={fadeUp}
              onClick={() => toggle(exp.id)}
              role="button"
              tabIndex={0}
              aria-expanded={expanded === exp.id}
              onKeyDown={(e) => e.key === 'Enter' && toggle(exp.id)}
            >
              {/* Company badge */}
              <div
                className="exp-logo"
                style={{ borderColor: `${exp.color}28`, color: exp.color }}
              >
                {exp.initial}
              </div>

              {/* Content */}
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">
                      {exp.company}
                      {exp.location && (
                        <span style={{ marginLeft: '8px', opacity: 0.6 }}>· {exp.location}</span>
                      )}
                    </div>
                  </div>
                  <div className="exp-date">{exp.period}</div>
                </div>

                <p className="exp-intro">{exp.intro}</p>

                <span className="exp-expand-hint">
                  {expanded === exp.id ? 'Show less' : 'Show details'}
                  <motion.span
                    animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                    style={{ display: 'inline-flex' }}
                  >
                    <ChevronDown />
                  </motion.span>
                </span>

                {/* Expanding achievements */}
                <AnimatePresence>
                  {expanded === exp.id && (
                    <motion.div
                      className="exp-achievements"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE_OUT_EXPO }}
                      style={{ overflow: 'hidden' }}
                    >
                      {exp.achievements.map((a, idx) => (
                        <motion.p
                          key={idx}
                          className="exp-achievement"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 + 0.1, duration: 0.4, ease: EASE_OUT_EXPO }}
                        >
                          {a}
                        </motion.p>
                      ))}
                      <motion.div
                        className="exp-tags"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                      >
                        {exp.tags.map((tag) => (
                          <span key={tag} className="exp-tag">{tag}</span>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StaticExperience;
