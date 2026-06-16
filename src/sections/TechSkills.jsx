import { motion } from 'framer-motion';
import { stagger, fadeUp, VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';

const skills = [
  'JavaScript', 'TypeScript', 'Python',     'Java',
  'HTML',       'CSS',        'Tailwind CSS', 'React',
  'Next.js',    'Node.js',    'Express.js',   'Shadcn',
  'Clerk',      'LangChain',  'Streamlit',    'FastAPI',
  'MySQL',      'Postgres',   'MongoDB',      'Firebase',
  'Supabase',   'Vercel',     'Docker',       'GitHub',
];

const TechSkills = () => (
  <section id="tech-skills" className="section">
    <div className="container">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
      >
        <span>02</span> Skills
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={stagger(0.04)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {skills.map((name) => (
          <motion.div
            key={name}
            className="skill-card"
            variants={fadeUp}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          >
            <span className="skill-name">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechSkills;
