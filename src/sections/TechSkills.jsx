import { useState } from 'react';

const TechSkills = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  // All technologies for sliding animation - organized for better presentation
  const allTechnologies = [
    // Programming Languages
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      category: '💻 Programming Languages',
    },
    {
      name: 'TypeScript',
      logo: '/assets/typescript.png',
      color: '#3178C6',
      category: '💻 Programming Languages',
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB',
      category: '💻 Programming Languages',
    },
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#ED8B00',
      category: '💻 Programming Languages',
    },
    {
      name: 'C++',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      color: '#00599C',
      category: '💻 Programming Languages',
    },

    // Frontend Development
    {
      name: 'React.js',
      logo: '/assets/react.svg',
      color: '#61DAFB',
      category: '🌐 Web Development',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000',
      category: '🌐 Web Development',
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      color: '#4FC08D',
      category: '🌐 Web Development',
    },
    {
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      color: '#DD0031',
      category: '🌐 Web Development',
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26',
      category: '🌐 Web Development',
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6',
      category: '🌐 Web Development',
    },
    {
      name: 'Tailwind CSS',
      logo: '/assets/tailwindcss.png',
      color: '#06B6D4',
      category: '🌐 Web Development',
    },
    {
      name: 'SASS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      color: '#CC6699',
      category: '🌐 Web Development',
    },

    // Backend Development
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      category: '⚡ Backend Development',
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000',
      category: '⚡ Backend Development',
    },
    {
      name: 'Django',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      color: '#092E20',
      category: '⚡ Backend Development',
    },
    {
      name: 'Flask',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      color: '#000000',
      category: '⚡ Backend Development',
    },
    {
      name: 'FastAPI',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      color: '#009688',
      category: '⚡ Backend Development',
    },

    // Databases
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      category: '🗄️ Databases',
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1',
      category: '🗄️ Databases',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#336791',
      category: '🗄️ Databases',
    },
    {
      name: 'Redis',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: '#DC382D',
      category: '🗄️ Databases',
    },

    // DevOps & Tools
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      color: '#FF9900',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      color: '#FFCA28',
      category: '⚙️ DevOps & Tools',
    },
  ];

  // Split technologies into two rows for better presentation
  const firstRowTechs = allTechnologies.slice(0, Math.ceil(allTechnologies.length / 2));
  const secondRowTechs = allTechnologies.slice(Math.ceil(allTechnologies.length / 2));

  const TechItem = ({ tech, rowPrefix, copyIndex, index }) => (
    <div
      key={`${rowPrefix}-copy${copyIndex}-${index}`}
      className="tech-slide-item"
      onMouseEnter={() => setHoveredTech(tech.name)}
      onMouseLeave={() => setHoveredTech(null)}>
      <div className="tech-slide-content">
        <img
          src={tech.logo}
          alt={tech.name}
          className="tech-slide-logo"
          style={{
            filter: hoveredTech === tech.name ? 'none' : 'grayscale(70%)',
            transform: hoveredTech === tech.name ? 'scale(1.15)' : 'scale(1)',
            transition: 'all 0.3s ease',
          }}
          onError={(e) => {
            console.log(`Failed to load image for ${tech.name}:`, tech.logo);
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div
          className="tech-slide-fallback"
          style={{
            display: 'none',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: tech.color,
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {tech.name.charAt(0)}
        </div>
        <div className="tech-tooltip">{tech.name}</div>
      </div>
    </div>
  );

  return (
    <section className="c-space my-20" id="tech-skills">
      <div className="w-full text-center">
        <h2 className="head-text">🛠️ Tech Stack & Tools I Know</h2>
        <p className="text-gray_gradient text-lg mt-3 max-w-2xl mx-auto">
          Technologies I have mastered to build modern, scalable, and innovative applications
        </p>
      </div>

      <div className="mt-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile hint */}
          <div className="mb-4 text-center sm:hidden">
            <p className="text-white-500 text-sm">👆 Tap any logo to pause • Swipe to see more</p>
          </div>

          {/* Two-row sliding animation */}
          <div className="overflow-hidden border border-white/20 rounded-xl p-6 touch-pan-x">
            {/* First Row - Sliding Right to Left */}
            <div className="tech-slider-row mb-8 overflow-x-auto sm:overflow-hidden">
              <div className="tech-slider-track">
                {/* Create 3 copies for seamless infinite scroll */}
                {[...Array(3)].map((_, copyIndex) => 
                  firstRowTechs.map((tech, index) => (
                    <TechItem 
                      key={`row1-copy${copyIndex}-${index}`}
                      tech={tech} 
                      rowPrefix="row1" 
                      copyIndex={copyIndex} 
                      index={index} 
                    />
                  ))
                )}
              </div>
            </div>

            {/* Second Row - Sliding Left to Right */}
            <div className="tech-slider-row overflow-x-auto sm:overflow-hidden">
              <div className="tech-slider-track tech-slider-reverse">
                {/* Create 3 copies for seamless infinite scroll */}
                {[...Array(3)].map((_, copyIndex) => 
                  secondRowTechs.map((tech, index) => (
                    <TechItem 
                      key={`row2-copy${copyIndex}-${index}`}
                      tech={tech} 
                      rowPrefix="row2" 
                      copyIndex={copyIndex} 
                      index={index} 
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
