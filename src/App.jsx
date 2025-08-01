import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import TechSkills from './sections/TechSkills.jsx';
import StaticProjects from './sections/StaticProjects.jsx';
import StaticExperience from './sections/StaticExperienceOriginal.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import { useEffect } from 'react';
import { initSmoothScroll } from './utils/smoothScroll.js';
// import CosmicBackground from './components/CosmicBackground.jsx';

const App = () => {
  useEffect(() => {
    // Initialize ultra-smooth scrolling
    const smoothScroll = initSmoothScroll();

    return () => {
      // Cleanup on unmount
      if (smoothScroll?.destroy) {
        smoothScroll.destroy();
      }
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto relative smooth-scroll">
      {/* <CosmicBackground /> */}

      <Navbar />
      <Hero />
      <About />
      <TechSkills />
      <StaticProjects />
      <StaticExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
