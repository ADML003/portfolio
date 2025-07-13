import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import TechSkills from './sections/TechSkills.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/ExperienceClean.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import CosmicBackground from './components/CosmicBackground.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <CosmicBackground />

      <Navbar />
      <Hero />
      <About />
      <TechSkills />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
