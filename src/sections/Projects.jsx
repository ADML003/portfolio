const Projects = () => {
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
    {
      id: 3,
      title: '📊 Analytics Dashboard – Digital Marketing Platform',
      description:
        'A modern, responsive analytics dashboard featuring real-time data visualization, campaign management, and interactive charts. Built for digital marketing agencies with comprehensive filtering, export capabilities, and beautiful UI components powered by shadcn/ui.',
      image: '/assets/project-logo6.png',
      video: '/textures/project/project6.mp4',
      github: 'https://github.com/ADML003/analytics_dashboard',
      liveDemo: 'https://analytics-dashboard-psi-five.vercel.app/',
      techStack: [
        {
          name: 'Next.js',
          icon: '/assets/nextjs.svg',
          color: '#000000',
          homepage: 'https://nextjs.org/',
        },
        { name: 'React.js', icon: '/assets/react.svg', color: '#61DAFB', homepage: 'https://react.dev/' },
        {
          name: 'TypeScript',
          icon: '/assets/typescript.png',
          color: '#3178C6',
          homepage: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Tailwind CSS',
          icon: '/assets/tailwindcss.png',
          color: '#06B6D4',
          homepage: 'https://tailwindcss.com/',
        },
        {
          name: 'Recharts',
          icon: '/assets/recharts.svg',
          color: '#8884d8',
          homepage: 'https://recharts.org/',
        },
        {
          name: 'shadcn/ui',
          icon: 'https://ui.shadcn.com/apple-touch-icon.png',
          color: '#000000',
          homepage: 'https://ui.shadcn.com/',
        },
        {
          name: 'Radix UI',
          icon: 'https://avatars.githubusercontent.com/u/75042455?s=200&v=4',
          color: '#161618',
          homepage: 'https://www.radix-ui.com/',
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

  return (
    <section className="c-space my-20" id="projects">
      <div className="w-full text-center mb-16">
        <h2 className="head-text section-header-enhanced">💼 Featured Projects</h2>
        <p className="text-gray_gradient text-lg mt-3 max-w-2xl mx-auto smooth-appear">
          Showcasing my latest web applications built with modern technologies and best practices
        </p>
      </div>

      <div className="w-full">
        {projects.length === 0 ? (
          // Empty state when no projects
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Projects Available</h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Projects will be displayed here once they are added to the portfolio.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-500/80 rounded-lg text-white hover:bg-blue-500 transition-all duration-300">
                Add New Project
              </button>
              <button className="px-6 py-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                View GitHub
              </button>
            </div>
          </div>
        ) : (
          // Three Equal Cards Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/30 transition-all duration-700 hover:scale-105 h-[700px] flex flex-col">

                
                {/* Project Header */}
                <div className="relative h-52 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-600/30 flex items-center justify-center overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse"></div>
                  {/* Floating Particles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-purple-500/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-8 right-6 w-1 h-1 bg-blue-500/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyan-500/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                  </div>
                  
                  <div className="text-center relative z-10 px-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 drop-shadow-2xl animate-pulse leading-none">{project.title.split(' ')[0]}</div>
                    <div className="text-white/95 text-base sm:text-sm md:text-base lg:text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                      {project.title.split(' ').slice(1).join(' ')}
                    </div>
                    <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 flex-grow line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-xl sm:text-2xl animate-spin" style={{animationDuration: '3s'}}>⚡</span>
                      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <div key={tech.name} className="group/tech relative">
                          <a
                            href={tech.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/30 transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:border-white/60 cursor-pointer text-decoration-none shadow-lg hover:shadow-xl"
                            style={{
                              backgroundColor: tech.color === '#000000' ? 'rgba(255, 255, 255, 0.15)' : `${tech.color}20`,
                              textDecoration: 'none',
                            }}>
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-5 h-5 group-hover/tech:scale-125 transition-transform duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div
                              className="w-5 h-5 rounded items-center justify-center text-white text-xs font-bold"
                              style={{ backgroundColor: tech.color, display: 'none' }}>
                              {tech.name.charAt(0)}
                            </div>
                            <span className="text-white text-xs sm:text-sm font-semibold">{tech.name}</span>
                          </a>
                        </div>
                      ))}
                      {project.techStack.length > 4 && (
                        <div className="px-4 py-2 rounded-xl border border-white/30 bg-white/15 shadow-lg">
                          <span className="text-white text-xs sm:text-sm font-semibold">+{project.techStack.length - 4} more</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons - Always at bottom */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-lg text-white hover:from-gray-700/80 hover:to-gray-600/80 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium border border-white/20 hover:border-white/40 shadow-md hover:shadow-lg hover:scale-105">
                      <img src="/assets/github.svg" alt="GitHub" className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-lg border border-blue-400/40 text-white hover:from-blue-500/80 hover:to-purple-500/80 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg hover:scale-105">
                      <span className="text-sm sm:text-base">🚀</span>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
