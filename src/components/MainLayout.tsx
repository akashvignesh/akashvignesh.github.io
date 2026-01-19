"use client";
import { useEffect, useState } from 'react';
import TopNav from './TopNav';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './Footer';

export default function MainLayout() {
  const [showTopNav, setShowTopNav] = useState(false);

  useEffect(() => {
    const update = () => {
      const aboutEl = document.getElementById('about');
      if (!aboutEl) return;

      // Show navbar when About section is visible (about 60% of viewport height before reaching top)
      const navOffset = window.innerHeight * 0.6;
      const aboutTop = aboutEl.getBoundingClientRect().top + window.scrollY;
      setShowTopNav(window.scrollY >= aboutTop - navOffset);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="main-layout">
      <TopNav visible={showTopNav} />

      {/* Two-column layout starts at About */}
      <section className={`main-sections ${showTopNav ? 'main-sections--with-nav' : ''}`}>
        <div className="main-container">
          {/* Main Content */}
          <main className="main-content">
            <section id="about" className="main-section">
              <About />
            </section>
            <section id="education" className="main-section">
              <Education />
            </section>
            <section id="experience" className="main-section">
              <Experience />
            </section>
            <section id="projects" className="main-section">
              <Projects />
            </section>
          </main>
        </div>
      </section>

      {/* Contact full-width after two-column layout */}
      <section id="contact" className="main-contact-section">
        <div className="main-container">
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
