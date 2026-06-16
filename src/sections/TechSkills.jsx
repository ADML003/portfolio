import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   All skills together — no categories.
   Icons from Simple Icons CDN. Grey (#808080) is used for
   inherently monochrome brands so they're visible in both themes.
───────────────────────────────────────────────────────────── */
const skills = [
  { name: 'JavaScript',   icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript',   icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Python',       icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Java',         icon: 'https://cdn.simpleicons.org/openjdk/EA2D2E' },
  { name: 'React',        icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js',      icon: 'https://cdn.simpleicons.org/nextdotjs/808080' },
  { name: 'Node.js',      icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express',      icon: 'https://cdn.simpleicons.org/express/808080' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'HTML5',        icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3',         icon: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'MongoDB',      icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'MySQL',        icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Firebase',     icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Vercel',       icon: 'https://cdn.simpleicons.org/vercel/808080' },
  { name: 'Git',          icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub',       icon: 'https://cdn.simpleicons.org/github/808080' },
  { name: 'Docker',       icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Postman',      icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'OpenAI',       icon: 'https://cdn.simpleicons.org/openai/808080' },
  { name: 'Cloudinary',   icon: 'https://cdn.simpleicons.org/cloudinary/3448C5' },
  { name: 'REST APIs',    icon: null },
];

const TechSkills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 35);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-skills" className="section" ref={sectionRef}>
      <div className="container">
        <p className="section-label" data-reveal>
          <span>02</span> Skills
        </p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              data-reveal
              data-reveal-delay={String((i % 6) + 1)}
            >
              {/* Icon */}
              <div className="skill-icon">
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  /* Fallback for REST APIs — show an API glyph */
                  <div className="skill-no-logo">API</div>
                )}
              </div>

              {/* Name */}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
