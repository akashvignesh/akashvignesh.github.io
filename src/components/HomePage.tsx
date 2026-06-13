"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/src/context/ThemeContext";
import { asset } from "@/src/config/site";
import { LINKS } from "@/src/config/links";

// Rotating role badge — kept to three coherent, adjacent engineering
// identities under the "Software & ML/AI Engineer" umbrella. Deliberately
// excludes data-analyst framing, which reads as a different/lower track.
const ROLES = [
  'Software Engineer',
  'ML Engineer',
  'AI Engineer',
];

// Proof metrics spanning backend performance, ML, and scale.
const heroStats = [
  { value: '455→120ms', label: 'API p95 latency' },
  { value: '3×', label: 'throughput gain' },
  { value: '0.88', label: 'ML model AUC' },
  { value: '$2M+/mo', label: 'transactions served' },
];

export default function HomePage() {
  const { theme } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
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

      {/* Main Content */}
      <div className="home-content">
        {/* Hero - two-column editorial layout */}
        <div className="hero-grid">
          {/* Left: identity */}
          <div className="hero-identity">
            {/* Status Badge */}
            <div className="hero-status-wrap">
              <div className={`status-badge status-badge--${themeClass}`}>
                <span className="status-dot" />
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Role Badge - rotates through tracks */}
            <div className={`role-badge role-badge--${themeClass}`}>
              <i className="devicon-python-plain" />
              <span key={roleIndex} className="animate-fade-in" style={{ display: 'inline-block' }}>
                {ROLES[roleIndex]}
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-name">
              <span className={`first-name first-name--${themeClass}`}>AKASH</span>
              <span className={`last-name last-name--${themeClass}`}>SURESHKUMAR</span>
            </h1>

            {/* Description */}
            <p className={`hero-description hero-description--${themeClass}`}>
              3+ years shipping production backends: REST APIs and event-driven microservices in <span className={`highlight highlight--primary-${themeClass}`}>Java &amp; Spring Boot</span>, built to stay fast under load.
              I also work in Python &amp; TypeScript, and build <span className={`highlight highlight--secondary-${themeClass}`}>ML/AI services &amp; data pipelines</span> on AWS. Currently finishing an MS at the University at Buffalo.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <a href={asset("/resume.pdf")} download className={`cta-primary cta-primary--${themeClass}`}>
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

          {/* Right: Currently + career-wide impact panel */}
          <aside className={`hero-panel hero-panel--${themeClass}`}>
            <div className="hero-panel-label">Currently</div>
            <div className="hero-panel-role">Software Engineer, Research</div>
            <div className="hero-panel-org">University at Buffalo · Feb 2026</div>
            <div className="hero-panel-divider" />
            <div className="hero-panel-label">Selected impact · across 3+ years</div>
            <div className="hero-panel-stats">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="hero-stat animate-fade-in"
                  style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                >
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Bottom Section */}
        <div className="home-bottom">
          {/* Social Links */}
          <div className="social-links">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`social-link social-link--${themeClass}`}
            >
              <i className="devicon-github-original" aria-hidden="true" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`social-link social-link--${themeClass}`}
            >
              <i className="devicon-linkedin-plain" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              aria-label="Email"
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
