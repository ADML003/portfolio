import { motion } from 'framer-motion';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

const experiences = [
  {
    id: 1,
    logo: '/assets/logo-bgs.jpg',
    logoBg: '#111a11',
    role: 'Founding Tech & Marketing Lead',
    company: 'Beas Green Solutions',
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      'Architected and shipped the full-stack company platform integrating Google Maps API for geolocation, a dynamic product catalog, and WhatsApp Business API for automated lead capture and customer routing.',
      'Built PixPro — a proprietary AI image-processing tool using Cloudinary AI — to automate enhancement of product photos and marketing creatives for digital campaigns.',
      'Deployed both platforms on Vercel with CI/CD pipelines, achieving sub-2s load times and optimized Core Web Vitals.',
    ],
    tags: ['Next.js', 'TypeScript', 'Cloudinary AI', 'Google Maps API', 'WhatsApp Business API', 'Vercel'],
  },
  {
    id: 2,
    logo: '/assets/logo-awara.png',
    logoBg: '#0a0a0a',
    role: 'Web Developer',
    company: 'AWARA – An Apparel Brand',
    location: 'Gurugram, Haryana',
    period: 'Sept 2024 – Present',
    bullets: [
      'Engineered and launched the official brand e-commerce website end-to-end — from architecture and storefront design to payment gateway integration and inventory synchronization.',
      'Led the complete migration of the e-commerce platform from WordPress/WooCommerce to Shopify, improving site performance, scalability, and operational efficiency.',
      'Improved checkout efficiency and product discoverability through targeted UX decisions, performance optimization, and responsive mobile-first design.',
      'Managed order management systems and operational workflows, ensuring platform reliability and scalability.',
    ],
    tags: ['WordPress', 'WooCommerce', 'Shopify', 'Razorpay', 'Stripe', 'SEO', 'Google Analytics'],
  },
];

const StaticExperience = () => (
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
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            variants={fadeUp}
          >
            {/* Logo */}
            <div
              className="exp-logo"
              style={{ background: exp.logoBg }}
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
              />
            </div>

            {/* Content */}
            <div className="exp-content">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">
                    {exp.company}
                    {exp.location && (
                      <span style={{ marginLeft: '8px', opacity: 0.5 }}>· {exp.location}</span>
                    )}
                  </div>
                </div>
                <div className="exp-date">{exp.period}</div>
              </div>

              {/* Bullet points — always visible, no toggle */}
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default StaticExperience;
