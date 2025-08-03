const WorkExperienceSimple = () => {
  const experiences = [
    {
      id: 1,
      company: 'BGS (Beas Green Solutions)',
      position: 'Web Development Intern',
      period: 'Jun 2025 – Jul 2025',
      type: 'Internship',
    },
    {
      id: 2,
      company: 'AWRA – An Apparel Brand',
      position: 'Web Development Intern',
      period: 'Jun 2024 – Aug 2024',
      type: 'Internship',
    },
  ];

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <div className="text-center mb-16">
          <h2 className="head-text">💼 Professional Experience</h2>
          <p className="text-gray_gradient text-lg mt-4 max-w-2xl mx-auto">
            My journey in web development and the impact I&apos;ve made in real-world projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="group relative">
              <div className="p-6 rounded-xl bg-gradient-to-br from-black-300/50 to-black-500/30 backdrop-blur-lg border border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-lg text-blue-400 font-semibold">{exp.company}</h4>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSimple;
