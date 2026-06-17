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
      'Architected and shipped a full-stack platform with Next.js & TypeScript, integrating Google Maps API for geolocation, a dynamic product catalog, and WhatsApp Business API for automated lead capture.',
      'Built PixPro — an AI image-processing pipeline using Cloudinary AI — to automate product photo enhancement and marketing creative generation at scale.',
      'Deployed both platforms on Vercel with CI/CD pipelines; achieved sub-2s LCP and passing Core Web Vitals across all routes.',
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
      'Migrated the full storefront from WordPress/WooCommerce to Shopify — custom Liquid theme, metafield schema, and headless product sync — cutting page load by ~40%.',
      'Integrated Razorpay & Stripe payment gateways with webhook-driven order management, inventory sync, and automated fulfilment workflows.',
      'Implemented technical SEO (structured data, canonical tags, sitemap), Google Analytics 4, and conversion-rate optimisations that improved organic discoverability and checkout completion.',
    ],
    tags: ['WordPress', 'WooCommerce', 'Shopify', 'Liquid', 'Razorpay', 'Stripe', 'SEO', 'Google Analytics 4'],
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
