import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      
      <div id="particles-js"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
