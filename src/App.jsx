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
import Landing from './components/Landing';
import { siteContent } from './content';

// Auf true setzen, um Navigation und alle Abschnitte (Profil, Kompetenzen, ...) wieder anzuzeigen.
const SHOW_FULL_SITE = false;

function App() {
  const [showContent, setShowContent] = useState(false);
  const [locale, setLocale] = useState('de');
  const content = siteContent[locale];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', content.meta.description);
    }
  }, [content.meta.description, content.meta.title, locale]);

  return (
    <div className="App">
      <ThreeBackground />

      {showContent && !SHOW_FULL_SITE && <Landing subtitle={content.hero.subtitle} />}

      {showContent && SHOW_FULL_SITE && (
        <>
          <Navigation
            navigation={content.navigation}
            locale={locale}
            onLocaleChange={setLocale}
          />
          <Hero hero={content.hero} />
          <About about={content.about} />
          <Skills skillsContent={content.skills} />
          <Experience experience={content.experience} />
          <Projects projects={content.projects} />
          <Education education={content.education} />
          <Contact contact={content.contact} />
          <Footer footer={content.footer} />
        </>
      )}
    </div>
  );
}

export default App;
