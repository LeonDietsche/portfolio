import React, { useEffect, useState } from 'react';
import './App.css';
import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ThreeBackground />

      {showContent && (
        <>
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
