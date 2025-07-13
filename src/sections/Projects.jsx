import { useState, useEffect } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Project data - your actual projects
  const projects = [
    {
      id: 1,
      title: '📸 Pix Pro – AI-Powered Image Editing SaaS',
      description:
        'Pix Pro is a full-stack AI-powered image editing platform built to offer users advanced yet intuitive tools for enhancing and transforming images. The platform integrates state-of-the-art image manipulation powered by AI APIs, with a modern and responsive user interface featuring user authentication, seamless payments, and subscription handling.',
      image: '/assets/project-logo1.png',
      video: '/textures/project/project1.mp4',
      github: 'https://github.com/ADML003/pix_pro',
      liveDemo: 'https://pix-pro-orpin.vercel.app',
      techStack: [
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          color: '#000000',
          homepage: 'https://nextjs.org/',
        },
        { name: 'React.js', icon: '/assets/react.svg', color: '#61DAFB', homepage: 'https://react.dev/' },
        {
          name: 'Tailwind CSS',
          icon: '/assets/tailwindcss.png',
          color: '#06B6D4',
          homepage: 'https://tailwindcss.com/',
        },
        {
          name: 'TypeScript',
          icon: '/assets/typescript.png',
          color: '#3178C6',
          homepage: 'https://www.typescriptlang.org/',
        },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#47A248',
          homepage: 'https://www.mongodb.com/',
        },
        {
          name: 'Cloudinary',
          icon: 'https://res.cloudinary.com/cloudinary-marketing/image/upload/f_auto,q_auto/v1599088394/creative_source/Logo/cloudinary_logo_square.png',
          color: '#3448C5',
          homepage: 'https://cloudinary.com/',
        },
        {
          name: 'Clerk',
          icon: 'https://avatars.githubusercontent.com/u/49538330?s=200&v=4',
          color: '#6C47FF',
          homepage: 'https://clerk.com/',
        },
        {
          name: 'Stripe',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
          color: '#008CDD',
          homepage: 'https://stripe.com/',
        },
        {
          name: 'Vercel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
          color: '#000000',
          homepage: 'https://vercel.com/',
        },
      ],
    },
    {
      id: 2,
      title: '✈️ Travelisto – Smart Travel Planner Web App',
      description:
        'Travelisto is a smart travel planning web app designed to simplify trip organization. It helps users plan their journeys with destination highlights, travel suggestions, and a clean, interactive UI. Built for speed and usability, it aims to enhance the travel discovery experience with dynamic destination cards and engaging animations.',
      image: '/assets/project-logo2.png',
      video: '/textures/project/project2.mp4',
      github: 'https://github.com/ADML003/Travelisto',
      liveDemo: 'https://travelisto.vercel.app',
      techStack: [
        { name: 'React.js', icon: '/assets/react.svg', color: '#61DAFB', homepage: 'https://react.dev/' },
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          color: '#000000',
          homepage: 'https://nextjs.org/',
        },
        {
          name: 'Tailwind CSS',
          icon: '/assets/tailwindcss.png',
          color: '#06B6D4',
          homepage: 'https://tailwindcss.com/',
        },
        {
          name: 'TypeScript',
          icon: '/assets/typescript.png',
          color: '#3178C6',
          homepage: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Syncfusion',
          icon: 'https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png',
          color: '#FF6C00',
          homepage: 'https://www.syncfusion.com/',
        },
        {
          name: 'Appwrite',
          icon: 'https://appwrite.io/images/logos/appwrite.svg',
          color: '#FD366E',
          homepage: 'https://appwrite.io/',
        },
        {
          name: 'Vercel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
          color: '#000000',
          homepage: 'https://vercel.com/',
        },
      ],
    },
  ];

  // Auto-rotate projects every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const project = projects[currentProject];

  return (
    <section className="c-space my-20" id="projects">
      <div className="w-full text-center mb-16">
        <h2 className="head-text section-header-enhanced">💼 Featured Projects</h2>
        <p className="text-gray_gradient text-lg mt-3 max-w-2xl mx-auto smooth-appear">
          Showcasing my latest web applications built with modern technologies and best practices
        </p>
      </div>

      <div className="w-full">
        {/* Project Container - Full Width */}
        <div className="w-full">
          {/* Project Header with Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">
                Featured Project {currentProject + 1} of {projects.length}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 project-button-enhanced rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500/80 project-button-enhanced rounded-lg border border-blue-400/30 text-white hover:bg-blue-500 transition-all duration-300 flex items-center gap-2">
                <span>🚀</span>
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Preview - Full Width */}
          <div className="relative group mb-8">
            <div className="relative overflow-hidden rounded-2xl preview-card-glow preview-card-enhanced bg-black-300">
              <iframe
                src={project.liveDemo}
                className="w-full h-[400px] md:h-[600px] border-0"
                title={`${project.title} Live Preview`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 section-header-enhanced">🛠️ Technologies Used</h4>
            <div className="tech-stack-grid-enhanced">
              {project.techStack.map((tech) => (
                <div key={tech.name} className="group relative tech-stack-item-enhanced">
                  <a
                    href={tech.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 enhanced-tooltip cursor-pointer text-decoration-none ${
                      // Light background for dark logos
                      tech.color === '#000000' ||
                      tech.name === 'Next.js' ||
                      tech.name === 'Express.js' ||
                      tech.name === 'ShadCN UI' ||
                      tech.name === 'Vercel'
                        ? 'bg-white/10'
                        : 'bg-black/20'
                    }`}
                    style={{
                      backgroundColor: tech.color === '#000000' ? 'rgba(255, 255, 255, 0.1)' : `${tech.color}15`,
                      textDecoration: 'none',
                    }}
                    data-tooltip={`Visit ${tech.name} website`}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-8 h-8 rounded-lg items-center justify-center text-white font-bold"
                      style={{ backgroundColor: tech.color, display: 'none' }}>
                      {tech.name.charAt(0)}
                    </div>
                    <span className="text-white font-medium">{tech.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="max-w-4xl mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 section-header-enhanced">📋 Project Overview</h4>
            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Project Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">
                {currentProject + 1} of {projects.length}
              </span>
              <div className="flex gap-1">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProject ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 project-button-enhanced">
                <img src="/assets/left-arrow.png" alt="Previous" className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 project-button-enhanced">
                <img src="/assets/right-arrow.png" alt="Next" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
