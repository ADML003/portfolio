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
      homepage: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'TypeScript',
      logo: '/assets/typescript.png',
      color: '#3178C6',
      category: '💻 Programming Languages',
      homepage: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB',
      category: '💻 Programming Languages',
      homepage: 'https://www.python.org/',
    },
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#ED8B00',
      category: '💻 Programming Languages',
      homepage: 'https://www.oracle.com/java/',
    },

    // Frontend Development
    {
      name: 'React.js',
      logo: '/assets/react.svg',
      color: '#61DAFB',
      category: '🌐 Web Development',
      homepage: 'https://react.dev/',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000',
      category: '🌐 Web Development',
      homepage: 'https://nextjs.org/',
    },
    {
      name: 'Tailwind CSS',
      logo: '/assets/tailwindcss.png',
      color: '#06B6D4',
      category: '🌐 Web Development',
      homepage: 'https://tailwindcss.com/',
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26',
      category: '🌐 Web Development',
      homepage: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6',
      category: '🌐 Web Development',
      homepage: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'ShadCN UI',
      logo: 'https://ui.shadcn.com/favicon.ico',
      color: '#000000',
      category: '🌐 Web Development',
      homepage: 'https://ui.shadcn.com/',
    },

    // Backend Development
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      category: '🔧 Backend',
      homepage: 'https://nodejs.org/',
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000',
      category: '🔧 Backend',
      homepage: 'https://expressjs.com/',
    },

    // Databases
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      category: '📦 Databases',
      homepage: 'https://www.mongodb.com/',
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1',
      category: '📦 Databases',
      homepage: 'https://www.mysql.com/',
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      color: '#FFCA28',
      category: '📦 Databases',
      homepage: 'https://firebase.google.com/',
    },

    // Cloud Services
    {
      name: 'Cloudinary',
      logo: 'https://res.cloudinary.com/cloudinary-marketing/image/upload/f_auto,q_auto/v1599088394/creative_source/Logo/cloudinary_logo_square.png',
      color: '#3448C5',
      category: '☁️ Cloud Services',
      homepage: 'https://cloudinary.com/',
    },

    // DevOps & Tools
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      category: '⚙️ DevOps & Tools',
      homepage: 'https://git-scm.com/',
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717',
      category: '⚙️ DevOps & Tools',
      homepage: 'https://github.com/',
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      category: '⚙️ DevOps & Tools',
      homepage: 'https://www.docker.com/',
    },
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      color: '#FF6C37',
      category: '⚙️ DevOps & Tools',
      homepage: 'https://www.postman.com/',
    },
    {
      name: 'Vercel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      color: '#000000',
      category: '⚙️ DevOps & Tools',
      homepage: 'https://vercel.com/',
    },

    // AI & Machine Learning
    {
      name: 'TensorFlow',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      color: '#FF6F00',
      category: '🧠 AI & ML',
      homepage: 'https://www.tensorflow.org/',
    },
    {
      name: 'NumPy',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      color: '#013243',
      category: '🧠 AI & ML',
      homepage: 'https://numpy.org/',
    },
    {
      name: 'Pandas',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      color: '#150458',
      category: '🧠 AI & ML',
      homepage: 'https://pandas.pydata.org/',
    },
  ];

  // Split technologies into two rows for better presentation
  const firstRowTechs = allTechnologies.slice(0, Math.ceil(allTechnologies.length / 2));
  const secondRowTechs = allTechnologies.slice(Math.ceil(allTechnologies.length / 2));

  return (
    <section
      className="c-space my-20"
      id="tech-skills"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'rgb(14, 15, 16)',
        paddingTop: '80px',
      }}>
      <div className="w-full text-center">
        <h2 className="head-text section-header-enhanced">🎗️ What I Build With</h2>
        <p className="text-white text-xl mt-5 mb-8 max-w-2xl mx-auto font-medium opacity-90">
          A powerful stack I use to build smart, scalable, and modern web solutions.
        </p>
      </div>

      <div className="mt-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Illuminated container with hover effect like projects */}
          <div className="group relative">
            {/* Hover glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Main container */}
            <div className="relative bg-black-300/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:border-white/20 group-hover:bg-black-200/60">
              {/* Floating particles background */}
              <div className="tech-skills-particles"></div>

              {/* Two-row sliding animation with enhanced styling */}
              <div className="rounded-xl">
                {/* First Row - Sliding Right to Left */}
                <div className="tech-slider-row mb-8 overflow-hidden">
                  <div className="tech-slider-track tech-slider-fast">
                    {/* First set */}
                    {firstRowTechs.map((tech, index) => (
                      <div
                        key={`row1-first-${index}`}
                        className="tech-slide-item group"
                        onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(tech.name)}
                        onMouseLeave={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(null)}>
                        <a
                          href={tech.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tech-link"
                          style={{
                            backgroundColor: hoveredTech === tech.name ? `${tech.color}20` : 'rgba(255, 255, 255, 0.1)',
                            borderColor: hoveredTech === tech.name ? tech.color : 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid',
                            transform: hoveredTech === tech.name ? 'translateY(-2px)' : 'translateY(0)',
                            boxShadow:
                              hoveredTech === tech.name
                                ? `0 8px 25px ${tech.color}30`
                                : '0 2px 10px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            padding: '16px',
                            borderRadius: '12px',
                            backdropFilter: 'blur(10px)',
                          }}>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="tech-slide-logo"
                            style={{
                              filter:
                                hoveredTech === tech.name ? 'none' : 'grayscale(0%) brightness(1.1) saturate(1.2)',
                              transition: 'all 0.3s ease',
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
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
                        </a>
                      </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {firstRowTechs.map((tech, index) => (
                      <div
                        key={`row1-second-${index}`}
                        className="tech-slide-item group"
                        onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(tech.name)}
                        onMouseLeave={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(null)}>
                        <a
                          href={tech.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tech-link"
                          style={{
                            backgroundColor: hoveredTech === tech.name ? `${tech.color}20` : 'rgba(255, 255, 255, 0.1)',
                            borderColor: hoveredTech === tech.name ? tech.color : 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid',
                            transform: hoveredTech === tech.name ? 'translateY(-2px)' : 'translateY(0)',
                            boxShadow:
                              hoveredTech === tech.name
                                ? `0 8px 25px ${tech.color}30`
                                : '0 2px 10px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            padding: '16px',
                            borderRadius: '12px',
                            backdropFilter: 'blur(10px)',
                          }}>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="tech-slide-logo"
                            style={{
                              filter:
                                hoveredTech === tech.name ? 'none' : 'grayscale(0%) brightness(1.1) saturate(1.2)',
                              transition: 'all 0.3s ease',
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
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
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second Row - Sliding Left to Right */}
                <div className="tech-slider-row overflow-hidden">
                  <div className="tech-slider-track tech-slider-reverse tech-slider-fast">
                    {/* First set */}
                    {secondRowTechs.map((tech, index) => (
                      <div
                        key={`row2-first-${index}`}
                        className="tech-slide-item group"
                        onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(tech.name)}
                        onMouseLeave={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(null)}>
                        <a
                          href={tech.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tech-link"
                          style={{
                            backgroundColor: hoveredTech === tech.name ? `${tech.color}20` : 'rgba(255, 255, 255, 0.1)',
                            borderColor: hoveredTech === tech.name ? tech.color : 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid',
                            transform: hoveredTech === tech.name ? 'translateY(-2px)' : 'translateY(0)',
                            boxShadow:
                              hoveredTech === tech.name
                                ? `0 8px 25px ${tech.color}30`
                                : '0 2px 10px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            padding: '16px',
                            borderRadius: '12px',
                            backdropFilter: 'blur(10px)',
                          }}>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="tech-slide-logo"
                            style={{
                              filter:
                                hoveredTech === tech.name ? 'none' : 'grayscale(0%) brightness(1.1) saturate(1.2)',
                              transition: 'all 0.3s ease',
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
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
                        </a>
                      </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {secondRowTechs.map((tech, index) => (
                      <div
                        key={`row2-second-${index}`}
                        className="tech-slide-item group"
                        onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(tech.name)}
                        onMouseLeave={() => window.matchMedia('(hover: hover)').matches && setHoveredTech(null)}>
                        <a
                          href={tech.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tech-link"
                          style={{
                            backgroundColor: hoveredTech === tech.name ? `${tech.color}20` : 'rgba(255, 255, 255, 0.1)',
                            borderColor: hoveredTech === tech.name ? tech.color : 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid',
                            transform: hoveredTech === tech.name ? 'translateY(-2px)' : 'translateY(0)',
                            boxShadow:
                              hoveredTech === tech.name
                                ? `0 8px 25px ${tech.color}30`
                                : '0 2px 10px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            padding: '16px',
                            borderRadius: '12px',
                            backdropFilter: 'blur(10px)',
                          }}>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="tech-slide-logo"
                            style={{
                              filter:
                                hoveredTech === tech.name ? 'none' : 'grayscale(0%) brightness(1.1) saturate(1.2)',
                              transition: 'all 0.3s ease',
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
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
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
