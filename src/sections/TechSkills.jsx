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
      name: 'Tailwind CSS',
      logo: '/assets/tailwindcss.png',
      color: '#06B6D4',
      category: '🌐 Web Development',
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: '#7952B3',
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
      name: 'ShadCN UI',
      logo: 'https://ui.shadcn.com/favicon.ico',
      color: '#000000',
      category: '🌐 Web Development',
    },

    // Backend Development
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      category: '🔧 Backend',
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000',
      category: '🔧 Backend',
    },
    {
      name: 'JWT',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtokens/jsonwebtokens-original.svg',
      color: '#000000',
      category: '🔧 Backend',
    },

    // Databases
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      category: '📦 Databases',
    },
    {
      name: 'Mongoose',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      category: '📦 Databases',
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1',
      category: '📦 Databases',
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      color: '#FFCA28',
      category: '📦 Databases',
    },

    // DevOps & Tools
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      color: '#FF6C37',
      category: '⚙️ DevOps & Tools',
    },
    {
      name: 'Vercel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      color: '#000000',
      category: '⚙️ DevOps & Tools',
    },

    // AI & Machine Learning
    {
      name: 'TensorFlow',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      color: '#FF6F00',
      category: '🧠 AI & ML',
    },
    {
      name: 'NumPy',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      color: '#013243',
      category: '🧠 AI & ML',
    },
    {
      name: 'Pandas',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      color: '#150458',
      category: '🧠 AI & ML',
    },

    // CMS & E-Commerce
    {
      name: 'WordPress',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      color: '#21759B',
      category: '📱 CMS & E-Commerce',
    },
    {
      name: 'WooCommerce',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
      color: '#96588A',
      category: '📱 CMS & E-Commerce',
    },
  ];

  // Split technologies into two rows for better presentation
  const firstRowTechs = allTechnologies.slice(0, Math.ceil(allTechnologies.length / 2));
  const secondRowTechs = allTechnologies.slice(Math.ceil(allTechnologies.length / 2));

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
          {/* Two-row sliding animation with faster speed */}
          <div className="overflow-hidden border border-white/20 rounded-xl p-6">
            {/* First Row - Sliding Right to Left */}
            <div className="tech-slider-row mb-8">
              <div className="tech-slider-track tech-slider-fast">
                {/* First set */}
                {firstRowTechs.map((tech, index) => (
                  <div
                    key={`row1-first-${index}`}
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
                ))}

                {/* Duplicate set for seamless loop */}
                {firstRowTechs.map((tech, index) => (
                  <div
                    key={`row1-second-${index}`}
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
                ))}
              </div>
            </div>

            {/* Second Row - Sliding Left to Right */}
            <div className="tech-slider-row">
              <div className="tech-slider-track tech-slider-reverse tech-slider-fast">
                {/* First set */}
                {secondRowTechs.map((tech, index) => (
                  <div
                    key={`row2-first-${index}`}
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
                ))}

                {/* Duplicate set for seamless loop */}
                {secondRowTechs.map((tech, index) => (
                  <div
                    key={`row2-second-${index}`}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
