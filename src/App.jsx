import { useEffect } from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import TechSkills from './sections/TechSkills.jsx';
import Projects from './sections/Projects.jsx';
import StaticExperience from './sections/StaticExperienceOriginal_NEW.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import GridBackground from './components/GridBackground.jsx';

const App = () => {
  useEffect(() => {
    // Global IntersectionObserver for scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all elements with data-reveal not inside section refs
    // (Sections handle their own via local observers)
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', position: 'relative' }}>
      {/* ── Fixed canvas grid + particle layer ── */}
      <GridBackground />

      {/* ── Noise grain overlay ── */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Content ── */}
      <Navbar />
      <Hero />
      <About />
      <TechSkills />
      <Projects />
      <StaticExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

