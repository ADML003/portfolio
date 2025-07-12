import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import TechSkills from './sections/TechSkills.jsx';
import TechSkillsSimple from './sections/TechSkillsSimple.jsx';
import CosmicBackground from './components/CosmicBackground.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      {/* Enhanced Cosmic Background */}
      <CosmicBackground />

      {/* Additional Static Cosmic Elements */}
      <div className="cosmic-glow cosmic-glow-1"></div>
      <div className="cosmic-glow cosmic-glow-2"></div>

      {/* Meteor Shower */}
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            top: Math.random() * 50 + '%',
            left: Math.random() * 100 + '%',
            animation: `meteor-fall ${Math.random() * 8 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}></div>
      ))}

      <Navbar />
      <Hero />
      <About />
      <TechSkillsSimple />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
