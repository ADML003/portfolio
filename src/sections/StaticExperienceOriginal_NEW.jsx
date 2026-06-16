import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    id: 1,
    initial: 'B',
    color: '#3b82f6',
    role: 'Web Development Intern',
    company: 'BGS — Beas Green Solutions',
    period: 'Jun 2025 – Jul 2025',
    intro:
      'Built the company\'s entire digital presence from the ground up — a production manufacturing website paired with an AI-powered image editing tool integrated directly into their marketing pipeline.',
    achievements: [
      'Designed and launched beasgreen.com — a full-featured web presence for a brick, furniture, and block manufacturing company, including product catalog, company profile, and an inquiry system.',
      'Built Pix Pro, an AI-powered image transformation tool using Cloudinary AI that automated enhancement of product photos and marketing hoardings for the client.',
      'Integrated Google Maps API for multi-branch location display and WhatsApp Business API for direct customer-to-sales communication, reducing inquiry response time.',
      'Deployed both projects on Vercel with CI/CD pipelines, optimizing Core Web Vitals and achieving sub-2s load times.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Google Maps API', 'Vercel'],
  },
  {
    id: 2,
    initial: 'A',
    color: '#8b5cf6',
    role: 'Web Development Intern',
    company: 'AWRA — DIGATO OPC LIMITED',
    period: 'Jun 2024 – Aug 2024',
    intro:
      'Led end-to-end development of the official e-commerce website for an apparel brand — from design and build to payment integration, SEO, and analytics setup.',
    achievements: [
      'Developed and deployed the AWRA brand website using WordPress with a custom theme and plugin architecture supporting the full apparel catalog and checkout flow.',
      'Integrated Razorpay and Stripe payment gateways with secure PCI-compliant checkout flows, directly improving conversion rates for the client.',
      'Implemented on-page SEO — structured data, meta optimization, XML sitemaps, and canonical tags — resulting in measurable improvements in organic search visibility.',
      'Configured Google Analytics 4 and Search Console dashboards so the marketing team could track acquisition channels, user behavior, and campaign performance.',
    ],
    tags: ['WordPress', 'PHP', 'Razorpay', 'Stripe', 'SEO', 'Google Analytics'],
  },
];

// Chevron icon
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StaticExperience = () => {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="container">
        <p className="section-label" data-reveal>
          <span>04</span> Experience
        </p>

        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`experience-item ${expanded === exp.id ? 'is-open' : ''}`}
              data-reveal
              data-reveal-delay={String(i + 1)}
              onClick={() => toggle(exp.id)}
              role="button"
              tabIndex={0}
              aria-expanded={expanded === exp.id}
              onKeyDown={(e) => e.key === 'Enter' && toggle(exp.id)}
            >
              {/* Company initial badge */}
              <div
                className="exp-logo"
                style={{ borderColor: `${exp.color}30`, color: exp.color }}
              >
                {exp.initial}
              </div>

              {/* Content */}
              <div className="exp-content">
                {/* Row: role + date */}
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-date">{exp.period}</div>
                </div>

                {/* One-line intro — always visible */}
                <p className="exp-intro">{exp.intro}</p>

                {/* Expand hint */}
                <span className="exp-expand-hint">
                  {expanded === exp.id ? 'Show less' : 'Show details'}
                  <ChevronDown />
                </span>

                {/* Expandable achievements */}
                {expanded === exp.id && (
                  <div className="exp-achievements">
                    {exp.achievements.map((a, idx) => (
                      <p key={idx} className="exp-achievement">{a}</p>
                    ))}
                    <div className="exp-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="exp-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaticExperience;
