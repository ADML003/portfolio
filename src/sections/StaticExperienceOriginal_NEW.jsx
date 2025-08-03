import { useRef } from 'react';

const StaticExperience = () => {
  const sectionRef = useRef();

  const experiences = [
    {
      id: 1,
      company: 'BGS (Beas Green Solutions)',
      companyDetail: 'Manufacturing Company - beasgreen.com',
      position: 'Web Development Intern',
      location: 'Remote',
      period: 'Jun 2025 – Jul 2025',
      duration: '2 months',
      type: 'Internship',
      achievements: [
        'Built and deployed beasgreen.com - a comprehensive manufacturing company website showcasing bricks, concrete furniture, and blocks production.',
        'Developed Pix Pro, an advanced image transformation tool to enhance product photography for marketing materials and hoardings.',
        'Integrated Google Maps API for location services and WhatsApp Business API for seamless customer communication.',
        'Optimized website performance and user experience resulting in improved customer engagement and lead generation.',
      ],
      technologies: [
        'WordPress',
        'Google Maps API',
        'WhatsApp Business API',
        'React.js',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Cloudinary',
        'Image Processing',
      ],
      color: '#3b82f6',
    },
    {
      id: 2,
      company: 'AWRA – An Apparel Brand',
      companyDetail: '(owned by DIGATO OPC LIMITED)',
      position: 'Web Development Intern',
      location: 'Gurugram, Haryana',
      period: 'Jun 2024 – Aug 2024',
      duration: '3 months',
      type: 'Internship',
      achievements: [
        "Developed and deployed AWRA's official website using WordPress & custom plugins, enhancing user experience and functionality by 30%.",
        'Integrated secure payment gateways and optimized the site for SEO, enhancing brand visibility and driving user engagement.',
      ],
      technologies: ['WordPress', 'Custom Plugins', 'Next.js', 'MongoDB', 'Payment Gateways', 'Web Development'],
      color: '#3b82f6',
    },
  ];

  return (
    <section id="work" className="c-space my-20 smooth-scroll" ref={sectionRef}>
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="head-text mb-4">My Work Experience</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-50"></div>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} className="group relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-6 w-4 h-4 rounded-full transform -translate-x-1/2 border-4 border-black-200 z-10"
                    style={{ backgroundColor: exp.color }}></div>

                  {/* Experience card */}
                  <div className="ml-8 p-8 rounded-2xl bg-gradient-to-br from-black-300/50 to-black-200/30 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors duration-200 group-hover:shadow-xl">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-200">
                          {exp.position}
                        </h3>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white border"
                          style={{
                            backgroundColor: `${exp.color}20`,
                            borderColor: exp.color,
                            color: exp.color,
                          }}>
                          {exp.type}
                        </span>
                      </div>

                      <div className="mb-2">
                        <h4 className="text-lg font-semibold text-gray-200">{exp.company}</h4>
                        <span className="text-gray-400 text-sm">{exp.companyDetail}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span>🗓️</span>
                          <span className="font-medium">{exp.period}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span>🎯</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm leading-relaxed pl-4 relative">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span>🛠️</span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => {
                          return (
                            <span
                              key={idx}
                              className="px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-lg text-xs font-medium hover:from-blue-800 hover:to-purple-800 transition-colors duration-200 cursor-default">
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Current status */}
              <div className="group relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-60"></div>
                <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 animate-pulse shadow-lg shadow-purple-500/50"></div>

                <div className="ml-8 p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Continuous Innovation
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    Every day brings new opportunities to <span className="text-purple-400 font-semibold">learn</span>,
                    <span className="text-blue-400 font-semibold"> innovate</span>, and
                    <span className="text-cyan-400 font-semibold"> create</span>. Building cutting-edge solutions while
                    mastering emerging technologies and pushing the boundaries of what&apos;s possible in web
                    development.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                      ✨ Learning Daily
                    </span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                      💡 Innovating
                    </span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                      🎯 Building Future
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Always open to new challenges and opportunities</span>
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

export default StaticExperience;
