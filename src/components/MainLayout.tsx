"use client";
import TopNav from './TopNav';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="main-layout">
      {/* Persistent top nav (transparent over the hero, solid on scroll) */}
      <TopNav visible={true} />

      <section className="main-sections main-sections--with-nav">
        <div className="main-container">
          {/* Main Content */}
          <div className="main-content">
            <section id="about" className="main-section">
              <About />
            </section>
            <section id="experience" className="main-section">
              <Experience />
            </section>
            <section id="education" className="main-section">
              <Education />
            </section>
            <section id="projects" className="main-section">
              <Projects />
            </section>
          </div>
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
