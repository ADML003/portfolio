import { useState } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Project data
  const projects = [
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
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
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

      {/* Main Project Card */}
      <div className="w-full max-w-6xl mx-auto">
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
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 group-hover/tech:scale-110 transition-transform duration-300"
                    />
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
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0710 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
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
    </section>
  );
};

export default Projects;
