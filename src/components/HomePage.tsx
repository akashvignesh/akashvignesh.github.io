"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/src/context/ThemeContext";

// Icon data for floating background - inside right panel only
const floatingIcons = [
  'devicon-react-original',
  'devicon-python-plain', 
  'devicon-java-plain',
  'devicon-docker-plain',
  'devicon-amazonwebservices-plain-wordmark'
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isSnapping = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      lastScrollY.current = currentScroll;
      
      const homeHeight = window.innerHeight;
      
      if (currentScroll > 50 && currentScroll < homeHeight - 100 && !isSnapping.current) {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        scrollTimeout.current = setTimeout(() => {
          if (isSnapping.current) return;
          
          isSnapping.current = true;
          
          if (scrollingDown) {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              const yOffset = -100;
              const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          
          setTimeout(() => {
            isSnapping.current = false;
          }, 800);
        }, 150);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -100;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <section id="home" className="home-page">
      {/* Background */}
      <div className={`home-bg home-bg--${themeClass}`} />
      
      {/* Floating Icons - HIDDEN to prevent overlap with text */}
      {/* Icons are now only in the right panel area */}

      {/* Right Panel */}
      <div className={`home-right-panel home-right-panel--${themeClass}`}>
        <div className="pattern-overlay" />
        <div className={`floating-blob floating-blob--${themeClass}`} />
        {/* Floating icons inside right panel only */}
        <div className="panel-icons">
          {floatingIcons.map((icon, i) => (
            <i 
              key={i}
              className={`panel-icon ${icon}`}
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>
      
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button
          onClick={toggleTheme}
          className={`toggle-btn toggle-btn--${themeClass}`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Status Badge */}
        <div className="animate-fade-in">
          <div className={`status-badge status-badge--${themeClass}`}>
            <span className="status-dot" />
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          {/* Role Badge */}
          <div className={`role-badge role-badge--${themeClass}`}>
            <i className="devicon-python-plain" />
            <span>Data Scientist & Software Engineer</span>
          </div>
          
          {/* Name */}
          <h1 className="hero-name">
            <span className={`first-name first-name--${themeClass}`}>AKASH</span>
            <span className={`last-name last-name--${themeClass}`}>SURESHKUMAR</span>
          </h1>
          
          {/* Description */}
          <p className={`hero-description hero-description--${themeClass}`}>
            <span className={`highlight highlight--primary-${themeClass}`}>Data Science Graduate</span> at University at Buffalo with 2+ years of experience 
            as a <span className={`highlight highlight--secondary-${themeClass}`}>Software Engineer</span>. Passionate about building scalable systems and leveraging 
            data-driven insights to solve complex problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="/resume.pdf" download className={`cta-primary cta-primary--${themeClass}`}>
              <span className="btn-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </span>
              <div className="hover-bg" />
            </a>
            
            <a href="#contact" className={`cta-secondary cta-secondary--${themeClass}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="home-bottom">
          {/* Social Links */}
          <div className="social-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`social-link social-link--${themeClass}`}
            >
              <i className="devicon-github-original" aria-hidden="true" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`social-link social-link--${themeClass}`}
            >
              <i className="devicon-linkedin-plain" aria-hidden="true" />
            </a>
            <a 
              href="mailto:asureshk@buffalo.edu"
              className={`social-link social-link--${themeClass}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button onClick={scrollToAbout} className={`scroll-indicator scroll-indicator--${themeClass}`}>
            <span className="scroll-text scroll-text--desktop">Scroll to explore</span>
            <span className="scroll-text scroll-text--mobile">Explore</span>
            <svg className="scroll-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className={`bottom-line bottom-line--${themeClass}`} />
    </section>
  );
}
