const TechSkillsSimple = () => {
  // Frontend & Development Tools - First Row
  const firstRowTechs = [
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      isDark: false,
    },
    { name: 'TypeScript', logo: '/assets/typescript.png', color: '#3178C6', isDark: false },
    { name: 'React.js', logo: '/assets/react.svg', color: '#61DAFB', isDark: false },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000',
      isDark: true,
    },
    { name: 'Tailwind CSS', logo: '/assets/tailwindcss.png', color: '#06B6D4', isDark: false },
    {
      name: 'Shadcn/ui',
      logo: 'https://ui.shadcn.com/favicon.ico',
      color: '#000000',
      isDark: true,
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26',
      isDark: false,
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6',
      isDark: false,
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      isDark: false,
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717',
      isDark: true,
    },
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      color: '#FF6C37',
      isDark: false,
    },
  ];

  // Backend, Databases & Cloud Services - Second Row
  const secondRowTechs = [
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB',
      isDark: false,
    },
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#ED8B00',
      isDark: false,
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      isDark: false,
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000',
      isDark: true,
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#336791',
      isDark: false,
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      isDark: false,
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      color: '#FFCA28',
      isDark: false,
    },
    {
      name: 'Appwrite',
      logo: 'https://appwrite.io/images/logos/appwrite.svg',
      color: '#FD366E',
      isDark: false,
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      color: '#FF9900',
      isDark: false,
    },
    {
      name: 'Vercel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      color: '#000000',
      isDark: true,
    },
    {
      name: 'Cloudinary',
      logo: 'https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_300/v1/logo/for_white_bg/cloudinary_logo_for_white_bg.svg',
      color: '#3448C5',
      isDark: false,
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      isDark: false,
    },
  ];

  return (
    <section className="c-space my-20" id="tech-skills">
      <div className="w-full text-center">
        <h2 className="head-text">🎗️ What I Build With</h2>
        <p className="text-gray_gradient text-lg mt-3 max-w-2xl mx-auto">
          A powerful stack I use to build smart, scalable, and modern web solutions.
        </p>
      </div>{' '}
      <div className="mt-16">
        <div className="w-full max-w-6xl mx-auto space-y-8">
          {/* First Row - Frontend & Development Tools */}
          <div className="overflow-hidden bg-black-300 rounded-xl p-6 border border-white/10">
            <div className="flex gap-6 items-center animate-marquee" style={{ width: '200%' }}>
              {/* First set */}
              {firstRowTechs.map((tech, index) => (
                <div key={`row1-first-${index}`} className="flex-shrink-0 group cursor-pointer">
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border border-white/10 transition-all duration-300 min-w-[100px] ${
                      tech.isDark ? 'bg-white/90' : 'bg-black-200'
                    }`}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain mb-2"
                      onError={(e) => {
                        // Fallback to colored placeholder
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-12 h-12 rounded-lg mb-2 items-center justify-center text-white font-bold text-lg"
                      style={{
                        display: 'none',
                        backgroundColor: tech.color,
                      }}>
                      {tech.name.charAt(0)}
                    </div>
                    <span className={`text-sm font-medium text-center ${tech.isDark ? 'text-black' : 'text-white'}`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {firstRowTechs.map((tech, index) => (
                <div key={`row1-second-${index}`} className="flex-shrink-0 group cursor-pointer">
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border border-white/10 transition-all duration-300 min-w-[100px] ${
                      tech.isDark ? 'bg-white/90' : 'bg-black-200'
                    }`}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain mb-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-12 h-12 rounded-lg mb-2 items-center justify-center text-white font-bold text-lg"
                      style={{
                        display: 'none',
                        backgroundColor: tech.color,
                      }}>
                      {tech.name.charAt(0)}
                    </div>
                    <span className={`text-sm font-medium text-center ${tech.isDark ? 'text-black' : 'text-white'}`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Backend, Databases & Cloud Services */}
          <div className="overflow-hidden bg-black-300 rounded-xl p-6 border border-white/10">
            <div className="flex gap-6 items-center animate-marquee-reverse" style={{ width: '200%' }}>
              {/* First set */}
              {secondRowTechs.map((tech, index) => (
                <div key={`row2-first-${index}`} className="flex-shrink-0 group cursor-pointer">
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border border-white/10 transition-all duration-300 min-w-[100px] ${
                      tech.isDark ? 'bg-white/90' : 'bg-black-200'
                    }`}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain mb-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-12 h-12 rounded-lg mb-2 items-center justify-center text-white font-bold text-lg"
                      style={{
                        display: 'none',
                        backgroundColor: tech.color,
                      }}>
                      {tech.name.charAt(0)}
                    </div>
                    <span className={`text-sm font-medium text-center ${tech.isDark ? 'text-black' : 'text-white'}`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {secondRowTechs.map((tech, index) => (
                <div key={`row2-second-${index}`} className="flex-shrink-0 group cursor-pointer">
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border border-white/10 transition-all duration-300 min-w-[100px] ${
                      tech.isDark ? 'bg-white/90' : 'bg-black-200'
                    }`}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain mb-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-12 h-12 rounded-lg mb-2 items-center justify-center text-white font-bold text-lg"
                      style={{
                        display: 'none',
                        backgroundColor: tech.color,
                      }}>
                      {tech.name.charAt(0)}
                    </div>
                    <span className={`text-sm font-medium text-center ${tech.isDark ? 'text-black' : 'text-white'}`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkillsSimple;
