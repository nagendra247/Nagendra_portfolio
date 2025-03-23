import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar 
        onHomeClick={() => scrollToSection(homeRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main>
        <section ref={homeRef} id="home">
          <Home />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={projectsRef} id="projects">
          <Projects />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;