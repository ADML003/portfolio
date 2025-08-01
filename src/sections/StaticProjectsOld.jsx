import { useState } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Project data
  const projects = [
    {
      id: 1,
      title: '📸 Pix Pro – AI-Powered Image Editing SaaS',
      description:
        'Pix Pro is a full-stack AI-powered image editing platform built to offer users advanced yet intuitive tools for enhancing and transforming images. The platform integrates state-of-the-art image manipulation powered by AI APIs, with a modern and responsive user interface featuring user authentication, seamless payments, and subscription handling.',
      image: '/assets/project-logo1.png',
      github: 'https://github.com/ADML003/pix_pro',
      liveDemo: 'https://pix-pro-orpin.vercel.app',
      techStack: [
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          color: '#000000',
        },
        { name: 'React.js', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#47A248',
        },
      ],
    },
    {
      id: 2,
      title: '🌟 Travelisto – Next.js Full-Stack Application',
      description:
        'Travelisto is a full-stack travel application built with Next.js 14 that revolutionizes trip planning and travel experiences. The platform offers comprehensive tools for discovering destinations, planning itineraries, and managing travel bookings with an intuitive, modern interface.',
      image: '/assets/project-logo2.png',
      github: 'https://github.com/ADML003/travelisto',
      liveDemo: 'https://travelisto.vercel.app',
      techStack: [
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          color: '#000000',
        },
        { name: 'React.js', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
      ],
    },
    {
      id: 3,
      title: '🎧 Podcastr – AI-Powered Podcast Platform',
      description:
        'Podcastr is a revolutionary AI-powered podcast platform that enables users to create, discover, and enjoy podcasts with cutting-edge technology. Built with Next.js 14 and advanced AI integration.',
      image: '/assets/project-logo3.png',
      github: 'https://github.com/ADML003/podcastr',
      liveDemo: 'https://podcastr-jsm.vercel.app',
      techStack: [
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          color: '#000000',
        },
        { name: 'React.js', icon: '/assets/react.svg', color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png', color: '#06B6D4' },
        { name: 'TypeScript', icon: '/assets/typescript.png', color: '#3178C6' },
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
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left: Project Info */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProjectData.image} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={{ backgroundColor: '#13162D' }}>
            <img src="/assets/terminal.png" alt="terminal" className="w-5 h-5" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProjectData.title}</p>

            <p className="animatedText">{currentProjectData.description}</p>
            <p className="animatedText">
              Built with cutting-edge technologies and best practices to deliver exceptional user experiences and robust
              functionality.
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProjectData.techStack.map((tech, index) => (
                <div key={index} className="tech-logo">
                  <img src={tech.icon} alt={tech.name} />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={currentProjectData.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <img src="/assets/github.svg" alt="github" className="w-10 h-10" />
              </a>
              <a
                href={currentProjectData.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer">
                <img src="/assets/arrow-up.png" alt="live demo" className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Horizontal Navigation */}
          <div className="flex items-center justify-between mt-7">
            <button className="arrow-btn" onClick={handlePrev} aria-label="Previous project">
              <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
            </button>

            {/* Project indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button className="arrow-btn" onClick={handleNext} aria-label="Next project">
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Static Project Image */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <img
            src={currentProjectData.image}
            alt={currentProjectData.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
