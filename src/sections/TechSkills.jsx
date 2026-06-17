import { motion } from 'framer-motion';
import { VIEWPORT, EASE_OUT_EXPO } from '../lib/animations.js';
import LogoLoop from '../components/LogoLoop.jsx';

// ── Icons ──────────────────────────────────────────────────────
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss,
  SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiSupabase,
  SiVercel, SiDocker, SiGithub, SiLangchain, SiFastapi,
  SiStreamlit, SiShadcnui, SiClerk,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// ── All 24 skills ──────────────────────────────────────────────
// lightColor = what the icon should be in light mode when pill-color is too light
const ALL_SKILLS = [
  { node: <SiJavascript  />, title: 'JavaScript',   color: '#c9a800', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiTypescript  />, title: 'TypeScript',   color: '#3178C6', href: 'https://www.typescriptlang.org' },
  { node: <SiPython      />, title: 'Python',       color: '#3776AB', href: 'https://www.python.org' },
  { node: <FaJava        />, title: 'Java',         color: '#ED8B00', href: 'https://www.java.com' },
  { node: <SiHtml5       />, title: 'HTML',         color: '#E34F26', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss         />, title: 'CSS',          color: '#1572B6', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', color: '#06B6D4', href: 'https://tailwindcss.com' },
  { node: <SiReact       />, title: 'React',        color: '#0fa8c9', href: 'https://react.dev' },
  { node: <SiNextdotjs   />, title: 'Next.js',      color: '#ebebeb', lightColor: '#111111', href: 'https://nextjs.org' },
  { node: <SiNodedotjs   />, title: 'Node.js',      color: '#339933', href: 'https://nodejs.org' },
  { node: <SiExpress     />, title: 'Express.js',   color: '#ebebeb', lightColor: '#222222', href: 'https://expressjs.com' },
  { node: <SiLangchain   />, title: 'LangChain',    color: '#1C9C3C', href: 'https://langchain.com' },
  { node: <SiFastapi     />, title: 'FastAPI',      color: '#009688', href: 'https://fastapi.tiangolo.com' },
  { node: <SiStreamlit   />, title: 'Streamlit',    color: '#FF4B4B', href: 'https://streamlit.io' },
  { node: <SiShadcnui    />, title: 'shadcn/ui',    color: '#ebebeb', lightColor: '#111111', href: 'https://ui.shadcn.com' },
  { node: <SiClerk       />, title: 'Clerk',        color: '#7C3AED', href: 'https://clerk.com' },
  { node: <SiMysql       />, title: 'MySQL',        color: '#4479A1', href: 'https://www.mysql.com' },
  { node: <SiPostgresql  />, title: 'PostgreSQL',   color: '#4169E1', href: 'https://www.postgresql.org' },
  { node: <SiMongodb     />, title: 'MongoDB',      color: '#47A248', href: 'https://www.mongodb.com' },
  { node: <SiFirebase    />, title: 'Firebase',     color: '#DD9E00', href: 'https://firebase.google.com' },
  { node: <SiSupabase    />, title: 'Supabase',     color: '#3ECF8E', href: 'https://supabase.com' },
  { node: <SiVercel      />, title: 'Vercel',       color: '#ebebeb', lightColor: '#111111', href: 'https://vercel.com' },
  { node: <SiDocker      />, title: 'Docker',       color: '#2496ED', href: 'https://www.docker.com' },
  { node: <SiGithub      />, title: 'GitHub',       color: '#ebebeb', lightColor: '#111111', href: 'https://github.com' },
];

// Desktop: 2 rows of 12
const DESK_R1 = ALL_SKILLS.slice(0, 12);
const DESK_R2 = ALL_SKILLS.slice(12);

// Mobile: 3 rows of 8
const MOB_R1 = ALL_SKILLS.slice(0, 8);
const MOB_R2 = ALL_SKILLS.slice(8, 16);
const MOB_R3 = ALL_SKILLS.slice(16);

// ── Pill renderer ──────────────────────────────────────────────
const SkillPill = ({ item }) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="skill-pill"
    aria-label={item.title}
    title={item.title}
    style={{
      '--pill-color': item.color,
      // lightColor overrides the icon colour in light mode via CSS
      '--pill-color-light': item.lightColor || item.color,
    }}
  >
    <span className="skill-pill-icon">{item.node}</span>
    <span className="skill-pill-label">{item.title}</span>
  </a>
);

const renderPill = (item, key) => <SkillPill item={item} key={key} />;

// ── Row fade-in animation ──────────────────────────────────────
const rowVariant = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    VIEWPORT,
  transition:  { duration: 0.65, ease: EASE_OUT_EXPO, delay },
});

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
    </div>

    {/* ── Desktop layout: 2 rows ── */}
    <div className="skills-marquee skills-marquee--desktop">
      <motion.div className="skills-marquee-row" {...rowVariant(0.08)}>
        <LogoLoop logos={DESK_R1} speed={32} direction="left"  logoHeight={28} gap={0} hoverSpeed={8} fadeOut renderItem={renderPill} ariaLabel="Languages and frontend" />
      </motion.div>
      <motion.div className="skills-marquee-row" {...rowVariant(0.16)}>
        <LogoLoop logos={DESK_R2} speed={32} direction="right" logoHeight={28} gap={0} hoverSpeed={8} fadeOut renderItem={renderPill} ariaLabel="Backend and DevOps" />
      </motion.div>
    </div>

    {/* ── Mobile layout: 3 rows ── */}
    <div className="skills-marquee skills-marquee--mobile">
      <motion.div className="skills-marquee-row" {...rowVariant(0.06)}>
        <LogoLoop logos={MOB_R1} speed={26} direction="left"  logoHeight={20} gap={0} hoverSpeed={5} fadeOut renderItem={renderPill} ariaLabel="Languages" />
      </motion.div>
      <motion.div className="skills-marquee-row" {...rowVariant(0.13)}>
        <LogoLoop logos={MOB_R2} speed={26} direction="right" logoHeight={20} gap={0} hoverSpeed={5} fadeOut renderItem={renderPill} ariaLabel="Frameworks" />
      </motion.div>
      <motion.div className="skills-marquee-row" {...rowVariant(0.20)}>
        <LogoLoop logos={MOB_R3} speed={26} direction="left"  logoHeight={20} gap={0} hoverSpeed={5} fadeOut renderItem={renderPill} ariaLabel="Databases and DevOps" />
      </motion.div>
    </div>
  </section>
);

export default TechSkills;
