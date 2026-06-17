import { motion } from 'framer-motion';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

/*
  5-project Bento layout (on ≥960px):
  ┌─────────────────────┬──────────────┐
  │  GenFit  (col 2/3)  │ NEXUS (1/3)  │
  ├─────────────────────┼──────────────┤
  │  Pix Pro (col 2/3)  │ Analytics    │
  ├─────────────────────┴──────────────┤
  │        AWARA (full width)          │
  └────────────────────────────────────┘

  3-column grid:
  Row 1: GenFit col-span-2 | NEXUS col-span-1
  Row 2: Pix Pro col-span-2 | Analytics col-span-1
  Row 3: Awara col-span-3 (full width)
*/

const projects = [
  {
    id: 1,
    title: 'GenFit',
    type: 'AI Platform · Full-Stack',
    span: 'col-span-2',
    description:
      'AI-powered fitness platform delivering personalized workout and diet plans using user goals, BMI, medical history, and dietary constraints. Includes computer-vision posture detection and food image calorie estimation.',
    github: 'https://github.com/ADML003',
    live: 'https://genfitai.vercel.app/',
    preview: '/assets/previews/genfit.png',
    tags: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'TensorFlow.js', 'Gemini API', 'Socket.io', 'Redux Toolkit', 'JWT', 'OAuth 2.0'],
  },
  {
    id: 2,
    title: 'NEXUS AI Agent',
    type: 'Agentic AI · Full-Stack',
    span: 'col-span-1',
    description:
      'Intelligent conversational AI platform with 80+ tool integrations including Google Workspace and Slack. Multi-model LLM architecture with DeepSeek V3, automatic failover, and Dynamic Tool Discovery.',
    github: 'https://github.com/ADML003',
    live: null,
    preview: '/assets/previews/nexus.png',
    tags: ['Next.js 14', 'TypeScript', 'FastAPI', 'Python', 'LangChain', 'DeepSeek V3', 'Gemini', 'Portia.AI'],
  },
  {
    id: 3,
    title: 'Pix Pro',
    type: 'AI SaaS · Full-Stack',
    span: 'col-span-2',
    description:
      'Full-stack AI image editing platform with user authentication, subscription handling, and seamless payments. Restore, recolor, and generatively fill images using Cloudinary AI.',
    github: 'https://github.com/ADML003/pix_pro',
    live: 'https://pix-pro-orpin.vercel.app',
    preview: '/assets/previews/pixpro.png',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Cloudinary AI', 'Clerk', 'Stripe'],
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    type: 'Dashboard · Full-Stack',
    span: 'col-span-1',
    description:
      'Real-time analytics dashboard for digital marketing agencies. Includes interactive charts, campaign management, CSV/PDF export, advanced filtering, and full dark mode support.',
    github: 'https://github.com/ADML003/analytics_dashboard',
    live: 'https://analytics-dashboard-psi-five.vercel.app/',
    preview: '/assets/previews/analytics.png',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'shadcn/ui', 'Recharts'],
  },
  {
    id: 5,
    title: 'AWARA',
    type: 'E-Commerce · Shopify',
    span: 'col-span-3',
    description:
      'Engineered and launched the official e-commerce storefront for AWARA — a premium apparel brand. Built the platform end-to-end from architecture and storefront design to payment gateway integration, inventory synchronization, and order management. Led the complete migration from WordPress/WooCommerce to Shopify, improving performance, scalability, and checkout efficiency with a mobile-first, conversion-optimized design.',
    github: null,
    live: 'https://awara.in',
    preview: '/assets/previews/awara.png',
    tags: ['Shopify', 'WordPress', 'WooCommerce', 'Razorpay', 'Stripe', 'SEO', 'Google Analytics', 'Liquid'],
  },
];

const GitHubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const ExternalIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
      >
        <span>03</span> Projects
      </motion.p>

      <motion.div
        className="bento-grid"
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card bento-${project.span.replace('col-span-', 'span')}`}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
          >
            {/* Preview Thumbnail */}
            {project.preview && (
              <div className="project-preview">
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
                <div className="project-preview-overlay" />
              </div>
            )}

            {/* Header */}
            <div className="project-card-header">
              <div className="project-title-group">
                <div className="project-title">{project.title}</div>
                <div className="project-type">{project.type}</div>
              </div>

              <div className="project-links">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank" rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ y: -2 }} whileTap={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <GitHubIcon /> Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank" rel="noopener noreferrer"
                    className="project-link project-link-live"
                    whileHover={{ y: -2 }} whileTap={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    Live <ExternalIcon />
                  </motion.a>
                )}
              </div>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="https://github.com/ADML003"
        target="_blank" rel="noopener noreferrer"
        className="projects-github-link"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ x: 4 }}
      >
        View all projects on GitHub <ExternalIcon />
      </motion.a>
    </div>
  </section>
);

export default Projects;
