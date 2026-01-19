"use client";
import { useState, useEffect } from 'react';
import { useTheme } from '@/src/context/ThemeContext';

interface TopNavProps {
  visible?: boolean;
}

export default function TopNav({ visible = true }: TopNavProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Add background when scrolled
      setScrolled(window.scrollY > 50);

      // Check if we're in the home section (top of page)
      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection('home');
        return;
      }

      // Find which section is currently most visible
      const sections = ['about', 'education', 'experience', 'projects', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`top-nav top-nav--${themeClass} ${scrolled ? 'top-nav--scrolled' : ''} ${visible ? 'top-nav--visible' : 'top-nav--hidden'}`}>
      <div className="top-nav-container">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="nav-logo-btn"
        >
          <div className={`nav-logo nav-logo--${themeClass}`}>
            <span className="nav-logo-text">
              Akash
              <span className={`nav-logo-underline nav-logo-underline--${themeClass}`} />
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link nav-link--${themeClass} ${activeSection === item.id ? 'nav-link--active' : ''}`}
            >
              {/* Active background */}
              {activeSection === item.id && (
                <span className={`nav-link-bg nav-link-bg--${themeClass}`} />
              )}
              <span className="nav-link-text">{item.label}</span>
              {/* Active dot indicator */}
              {activeSection === item.id && (
                <span className={`nav-link-dot nav-link-dot--${themeClass}`} />
              )}
            </button>
          ))}
          
          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className={`nav-theme-toggle nav-theme-toggle--${themeClass}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="nav-theme-icon nav-theme-icon--moon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="nav-theme-icon nav-theme-icon--sun" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="nav-mobile-controls">
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className={`nav-theme-toggle-mobile nav-theme-toggle-mobile--${themeClass}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="nav-theme-icon nav-theme-icon--moon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="nav-theme-icon nav-theme-icon--sun" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`nav-hamburger nav-hamburger--${themeClass}`}
            aria-label="Toggle menu"
          >
            <svg className="nav-hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu nav-mobile-menu--${themeClass} ${mobileMenuOpen ? 'nav-mobile-menu--open' : 'nav-mobile-menu--closed'}`}>
        <div className="nav-mobile-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-mobile-link nav-mobile-link--${themeClass} ${activeSection === item.id ? 'nav-mobile-link--active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
