// Enhanced tech icon component with inline SVGs for better display
const TechIcon = ({ tech, className = 'w-5 h-5' }) => {
  // Inline SVGs for technologies that need better icons
  const getSVGIcon = (techName) => {
    switch (techName) {
      case 'Next.js':
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm2.31 16.2l-4.7-7.3H8v-1.8h2.11l4.7 7.3c.28.43.14 1-.31 1.27-.16.1-.35.11-.52.04-.17-.07-.31-.2-.42-.38zm1.85-4.2H14v-1.8h2.16v1.8z" />
          </svg>
        );
      case 'MongoDB':
        return (
          <svg className={className} fill="#47A248" viewBox="0 0 24 24">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
          </svg>
        );
      case 'TypeScript':
        return (
          <svg className={className} fill="#3178C6" viewBox="0 0 24 24">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
        );
      case 'Stripe':
        return (
          <svg className={className} fill="#635BFF" viewBox="0 0 24 24">
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
          </svg>
        );
      case 'Appwrite':
        return (
          <svg className={className} fill="#FD366E" viewBox="0 0 24 24">
            <path d="M13.5 2.256L12 0l-1.5 2.256c-.37.556-.623 1.194-.623 1.894v7.8c0 .7.253 1.338.623 1.894L12 16.2l1.5-2.356c.37-.556.623-1.194.623-1.894V4.15c0-.7-.253-1.338-.623-1.894zM6.044 4.594L4.744 2.7 3.444 4.594c-.321.52-.521 1.13-.521 1.794v11.224c0 .664.2 1.274.521 1.794l1.3 1.894 1.3-1.894c.321-.52.521-1.13.521-1.794V6.388c0-.664-.2-1.274-.521-1.794zM20.556 4.594L19.256 2.7l-1.3 1.894c-.321.52-.521 1.13-.521 1.794v11.224c0 .664.2 1.274.521 1.794l1.3 1.894 1.3-1.894c.321-.52.521-1.13.521-1.794V6.388c0-.664-.2-1.274-.521-1.794z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const svgIcon = getSVGIcon(tech.name);
  if (svgIcon) return svgIcon;

  // Fallback to image icons
  return (
    <img
      src={tech.icon || tech.path}
      alt={tech.name}
      className={`${className} object-contain`}
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  );
};

const StaticProjectsHero = () => {
  // Hero Project (Pix Pro) + Supporting Projects
  const heroProject = {
    id: 1,
    title: 'Pix Pro – AI-Powered Image Editing SaaS',
    description:
      'Full-stack AI-powered image editing platform with advanced tools for enhancing and transforming images. Features user authentication, seamless payments, and subscription handling with cutting-edge AI APIs and modern responsive interface.',
    github: 'https://github.com/ADML003/pix_pro',
    liveDemo: 'https://pix-pro-orpin.vercel.app',
    gradient: 'from-amber-600/20 via-orange-600/20 to-red-600/20',
    glowColor: 'shadow-orange-500/25',
    techStack: [
      { name: 'Next.js', icon: '/assets/nextjs.svg', color: '#000000' },
      { name: 'React', icon: '/assets/react.svg', color: '#61DAFB' },
      { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: '#47A248',
      },
      {
        name: 'Cloudinary',
        icon: 'https://res.cloudinary.com/cloudinary-marketing/image/upload/f_auto,q_auto/v1599088394/creative_source/Logo/cloudinary_logo_square.png',
        color: '#3448C5',
      },
      {
        name: 'Stripe',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
        color: '#635BFF',
      },
    ],
  };

  const supportingProjects = [
    {
      id: 2,
      title: 'Travelisto – Travel Application',
      description:
        'Revolutionary travel application for trip planning and experiences. Comprehensive tools for discovering destinations with AI-powered recommendations.',
      github: 'https://github.com/ADML003/travelisto',
      liveDemo: 'https://travelisto.vercel.app',
      gradient: 'from-blue-600/20 via-cyan-600/20 to-teal-600/20',
      glowColor: 'shadow-blue-500/25',
      techStack: [
        { name: 'React', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'Next.js', icon: '/assets/nextjs.svg', color: '#000000' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'Appwrite', icon: 'https://appwrite.io/images/favicon.png', color: '#FD366E' },
        { name: 'Google Gemini API', icon: 'https://ai.google.dev/static/images/favicon.png', color: '#4285F4' },
      ],
    },
    {
      id: 3,
      title: 'Analytics Dashboard – Marketing Platform',
      description:
        'Modern analytics dashboard with real-time data visualization, campaign management, and interactive charts for digital marketing agencies.',
      github: 'https://github.com/ADML003/analytics_dashboard',
      liveDemo: 'https://analytics-dashboard-psi-five.vercel.app/',
      gradient: 'from-slate-600/20 via-gray-600/20 to-zinc-600/20',
      glowColor: 'shadow-slate-500/25',
      techStack: [
        { name: 'Next.js', icon: '/assets/nextjs.svg', color: '#000000' },
        { name: 'React', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'Recharts', icon: '/assets/recharts.svg', color: '#8884d8' },
        { name: 'shadcn/ui', icon: 'https://ui.shadcn.com/apple-touch-icon.png', color: '#000000' },
      ],
    },
  ];

  return (
    <section className="c-space my-20" id="projects">
      <div className="text-center mb-16">
        <p className="head-text mb-4">My Selected Work</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-8">
        {/* Hero Project - Pix Pro (Featured) */}
        <div className="relative group">
          <div
            className={`relative bg-gradient-to-br ${heroProject.gradient} backdrop-blur-2xl rounded-3xl border border-white/20 transition-all duration-700 hover:border-white/40 hover:${heroProject.glowColor} hover:shadow-2xl bg-black/30 hover:scale-[1.02] hover:-translate-y-1 p-8 lg:p-12`}
            style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
            }}>
            {/* Enhanced glass effect overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl"></div>

            {/* Dynamic floating orbs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>

            {/* Content Grid - Hero Layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors duration-300">
                    {heroProject.title}
                  </h3>
                  <div className="bg-gradient-to-r from-white/60 to-transparent h-1 w-24"></div>
                </div>

                <p className="text-lg lg:text-xl text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {heroProject.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-white/90 font-semibold text-base">Built with</h4>
                  <div className="flex flex-wrap gap-3">
                    {heroProject.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <TechIcon tech={tech} className="w-5 h-5" />
                        <span className="text-white/90 font-medium text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/25 transition-all duration-300 px-3 py-1">
                      <span className="text-white font-bold text-sm">FEATURED</span>
                    </div>
                    <a
                      href={heroProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>

                  <a
                    href={heroProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105">
                    <svg className="text-white w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Live Demo Iframe */}
              <div className="relative mt-16 lg:mt-0">
                <div className="h-[500px] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 backdrop-blur-md overflow-hidden group-hover:border-white/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <iframe
                    src="https://pix-pro-orpin.vercel.app"
                    className="relative z-10 w-full h-full rounded-2xl"
                    title="Pix Pro Live Demo"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Projects - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {supportingProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group bg-gradient-to-br ${project.gradient} backdrop-blur-2xl rounded-3xl border border-white/20 transition-all duration-700 hover:border-white/40 hover:${project.glowColor} hover:shadow-2xl bg-black/30 hover:scale-[1.02] hover:-translate-y-1 p-6 lg:p-8`}
              style={{
                animationDelay: `${(index + 1) * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
              }}>
              {/* Enhanced glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl"></div>

              {/* Dynamic floating orbs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Title */}
                <div className="space-y-3 mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="bg-gradient-to-r from-white/60 to-transparent h-0.5 w-12"></div>
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-grow mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-white/90 font-semibold text-xs">Built with</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <TechIcon tech={tech} className="w-4 h-4" />
                        <span className="text-white/90 font-medium text-xs">{tech.name}</span>
                      </div>
                    ))}
                    {project.techStack.length > 4 && (
                      <div className="flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <span className="text-white/70 font-medium text-xs">+{project.techStack.length - 4}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto">
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105">
                      <svg className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default StaticProjectsHero;
