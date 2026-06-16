import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Pix Pro',
    type: 'AI SaaS · Full-Stack',
    description:
      'Full-stack AI image editing platform with user authentication, subscription handling, and seamless payments. Users can restore, recolor, and generatively fill images using Cloudinary AI.',
    logo: '/assets/project-logo1.png',
    github: 'https://github.com/ADML003/pix_pro',
    live: 'https://pix-pro-orpin.vercel.app',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Cloudinary AI', 'Clerk', 'Stripe'],
  },
  {
    id: 2,
    title: 'Travelisto',
    type: 'Web App · Full-Stack',
    description:
      'Smart travel planning app powered by AI recommendations. Features destination discovery, itinerary management, and booking integration — built for speed and usability.',
    logo: '/assets/project-logo2.png',
    github: 'https://github.com/ADML003/Travelisto',
    live: 'https://travelisto.vercel.app',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Appwrite', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    type: 'Dashboard · Full-Stack',
    description:
      'Real-time analytics dashboard for digital marketing agencies. Includes interactive charts, campaign management, CSV/PDF export, advanced filtering, and full dark mode.',
    logo: '/assets/project-logo6.png',
    github: 'https://github.com/ADML003/analytics_dashboard',
    live: 'https://analytics-dashboard-psi-five.vercel.app/',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'shadcn/ui', 'Recharts'],
  },
];

// SVG icons inline
const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Projects = () => {
  const sectionRef = useRef(null);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container">
        <p className="section-label" data-reveal>
          <span style={{ opacity: 0.4 }}>03</span> Projects
        </p>

        <div className="projects-list">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              {/* Header row */}
              <div className="project-card-header">
                <div className="project-card-left">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="project-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="project-title-group">
                    <div className="project-title">{project.title}</div>
                    <div className="project-type">{project.type}</div>
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <GitHubIcon />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} live demo`}
                  >
                    Live
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <a
          href="https://github.com/ADML003"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-github-link"
          data-reveal
          data-reveal-delay="4"
        >
          View all projects on GitHub
          <ExternalIcon />
        </a>
      </div>
    </section>
  );
};

export default Projects;
