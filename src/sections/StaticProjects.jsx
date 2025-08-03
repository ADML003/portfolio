import { useState, useEffect } from 'react';

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
      case 'Google Gemini API':
        return (
          <svg className={className} fill="#4285F4" viewBox="0 0 24 24">
            <path d="M12 2L8 6h8l-4-4zM12 22l4-4H8l4 4zM2 12l4-4v8l-4-4zM22 12l-4 4V8l4 4z" />
            <circle cx="12" cy="12" r="2" fill="#EA4335" />
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
      case 'Cloudinary':
        return (
          <svg className={className} fill="#3448C5" viewBox="0 0 24 24">
            <path d="M7.5 4.5C9.43 4.5 11 6.07 11 8c0 .55.45 1 1 1s1-.45 1-1c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .55.45 1 1 1s1-.45 1-1c0-.55.45-1 1-1zM16.5 7.5c1.93 0 3.5 1.57 3.5 3.5 0 .55.45 1 1 1s1-.45 1-1c0-3.04-2.46-5.5-5.5-5.5s-5.5 2.46-5.5 5.5c0 .55.45 1 1 1s1-.45 1-1c0-1.93 1.57-3.5 3.5-3.5zM12 14.5c-1.93 0-3.5-1.57-3.5-3.5 0-.55-.45-1-1-1s-1 .45-1 1c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5c0-.55-.45-1-1-1s-1 .45-1 1c0 1.93-1.57 3.5-3.5 3.5z" />
          </svg>
        );
      case 'Clerk':
        return (
          <svg className={className} fill="#6C47FF" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.301 0 9.6 4.299 9.6 9.6s-4.299 9.6-9.6 9.6S2.4 17.301 2.4 12 6.699 2.4 12 2.4zm0 3.6c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 2.4c1.988 0 3.6 1.612 3.6 3.6s-1.612 3.6-3.6 3.6-3.6-1.612-3.6-3.6S10.012 8.4 12 8.4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const svgIcon = getSVGIcon(tech.name);

  if (svgIcon) {
    return <span className="group-hover/tech:scale-110 transition-transform duration-300">{svgIcon}</span>;
  }

  // Fallback to image with better error handling
  return (
    <img
      src={tech.icon}
      alt={tech.name}
      className={`${className} group-hover/tech:scale-110 transition-transform duration-300`}
      onError={(e) => {
        e.target.src = '/assets/terminal.png';
      }}
    />
  );
};

const StaticProjects = () => {
  // Project data - your actual projects
  const projects = [
    {
      id: 1,
      title: 'Pix Pro – AI-Powered Image Editing SaaS',
      description:
        'Pix Pro is a full-stack AI-powered image editing platform built to offer users advanced yet intuitive tools for enhancing and transforming images. The platform integrates state-of-the-art image manipulation powered by AI APIs, with a modern and responsive user interface featuring user authentication, seamless payments, and subscription handling.',
      github: 'https://github.com/ADML003/pix_pro',
      liveDemo: 'https://pix-pro-orpin.vercel.app',
      gradient: 'from-amber-600/20 via-orange-600/20 to-red-600/20',
      glowColor: 'shadow-orange-500/25',
      techStack: [
        { name: 'Next.js', icon: '/assets/nextjs.svg', color: '#000000' },
        { name: 'React', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
        { name: 'Cloudinary', icon: 'https://res.cloudinary.com/cloudinary-marketing/image/upload/f_auto,q_auto/v1599088394/creative_source/Logo/cloudinary_logo_square.png', color: '#3448C5' },
        { name: 'Clerk', icon: 'https://images.clerk.dev/static/logo-light-mode-400x400.png', color: '#6C47FF' },
        { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg', color: '#635BFF' },
      ],
    },
    {
      id: 2,
      title: 'Travelisto – Full-Stack Travel Application',
      description:
        'Travelisto is a full-stack travel application that revolutionizes trip planning and travel experiences. The platform offers comprehensive tools for discovering destinations, planning itineraries, and managing travel bookings with an intuitive, modern interface powered by AI.',
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
      title: 'Analytics Dashboard – Digital Marketing Platform',
      description:
        'A modern, responsive analytics dashboard featuring real-time data visualization, campaign management, and interactive charts. Built for digital marketing agencies with comprehensive filtering, export capabilities, and beautiful UI components.',
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
    {
      id: 1,
      title: 'Pix Pro – AI-Powered Image Editing SaaS',
      description:
        'Pix Pro is a full-stack AI-powered image editing platform built to offer users advanced yet intuitive tools for enhancing and transforming images. The platform integrates state-of-the-art image manipulation powered by AI APIs, with a modern and responsive user interface featuring user authentication, seamless payments, and subscription handling.',
      github: 'https://github.com/ADML003/pix_pro',
      liveDemo: 'https://pix-pro-orpin.vercel.app',
      gradient: 'from-blue-600/20 via-purple-600/20 to-pink-600/20',
      glowColor: 'shadow-blue-500/25',
      techStack: [
        {
          name: 'Next.js',
          icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
          color: '#000000',
        },
        { name: 'React', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#47A248',
        },
        {
          name: 'Cloudinary',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg',
          color: '#3448C5',
        },
        {
          name: 'Stripe',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
          color: '#635BFF',
        },
        { name: 'Clerk', icon: 'https://clerk.dev/favicon.ico', color: '#6C47FF' },
      ],
    },
    {
      id: 2,
      title: 'Travelisto – Full-Stack Travel Application',
      description:
        'Travelisto is a full-stack travel application that revolutionizes trip planning and travel experiences. The platform offers comprehensive tools for discovering destinations, planning itineraries, and managing travel bookings with an intuitive, modern interface powered by AI.',
      github: 'https://github.com/ADML003/travelisto',
      liveDemo: 'https://travelisto.vercel.app',
      gradient: 'from-emerald-600/20 via-teal-600/20 to-cyan-600/20',
      glowColor: 'shadow-emerald-500/25',
      techStack: [
        { name: 'React', icon: '/assets/react.svg', color: '#61DAFB' },
        {
          name: 'Appwrite',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg',
          color: '#FD366E',
        },
        { name: 'Google Gemini API', icon: 'https://ai.google.dev/static/images/favicon.png', color: '#4285F4' },
        { name: 'Unsplash API', icon: 'https://unsplash.com/favicon-32x32.png', color: '#000000' },
      ],
    },
    {
      id: 3,
      title: 'Analytics Dashboard – Digital Marketing Platform',
      description:
        'A modern, responsive analytics dashboard featuring real-time data visualization, campaign management, and interactive charts. Built for digital marketing agencies with comprehensive filtering, export capabilities, and beautiful UI components.',
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

  const currentProjectData = projects[currentProject];

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="c-space my-20" id="projects">
      <div className="text-center mb-16">
        <p className="head-text mb-4">My Selected Work</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Main Project Display */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Desktop Version */}
        <div className="hidden md:block">
          <div
            className={`relative group bg-gradient-to-br ${currentProjectData.gradient} backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 transition-all duration-700 hover:border-white/40 hover:${currentProjectData.glowColor} hover:shadow-2xl bg-black/30`}>
            {/* Enhanced glass effect overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl"></div>
            {/* Floating orbs for visual enhancement */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>

            {/* Project Number Indicator */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/25 transition-all duration-300 z-10">
              <span className="text-white font-bold text-lg">{currentProject + 1}</span>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors duration-300">
                  {currentProjectData.title}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent"></div>
              </div>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {currentProjectData.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-white/90 font-semibold text-lg">Built with</h4>
                <div className="flex flex-wrap gap-3">
                  {currentProjectData.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="group/tech flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <TechIcon tech={tech} />
                      <span className="text-white/90 text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons and Navigation Container */}
              <div className="flex justify-between items-end pt-4">
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={currentProjectData.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105">
                    <svg
                      className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Live Demo
                  </a>

                  <a
                    href={currentProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full text-white font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105">
                    <svg
                      className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>

                {/* Switch Buttons on Bottom Right */}
                <div className="flex items-center gap-4">
                  {/* Project Indicators */}
                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                          index === currentProject
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="group flex items-center justify-center w-10 h-10 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="Previous project">
                      <svg
                        className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNext}
                      className="group flex items-center justify-center w-10 h-10 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="Next project">
                      <svg
                        className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version with Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onSlideChange={(swiper) => setCurrentProject(swiper.activeIndex)}
            className="mobile-projects-swiper">
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div
                  className={`relative group bg-gradient-to-br ${project.gradient} backdrop-blur-2xl rounded-3xl p-6 border border-white/20 transition-all duration-700 bg-black/30`}>
                  {/* Enhanced glass effect overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-3xl"></div>

                  {/* Project Number Indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-10">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Title */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-white/60 to-transparent"></div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-base leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-white/90 font-semibold">Built with</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group/tech flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 transition-all duration-300">
                            <TechIcon tech={tech} className="w-4 h-4" />
                            <span className="text-white/90 text-xs font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm transition-all duration-300">
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
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-md rounded-full text-white font-semibold text-sm border border-white/30 transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
