"use client";
import { useTheme } from '@/src/context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <footer className={`footer footer--${themeClass}`}>
      <div className="footer-container">
        <div className="footer-main">
          {/* Name and Copyright */}
          <div className="footer-info">
            <h3 className={`footer-name footer-name--${themeClass}`}>
              Akash Sureshkumar
            </h3>
            <p className="footer-copyright">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Tech Stack */}
          <div className="footer-tech">
            <p className={`footer-tech-label footer-tech-label--${themeClass}`}>
              Built with
            </p>
            <div className="footer-tech-list">
              {/* Next.js */}
              <span className={`footer-tech-tag footer-tech-tag--nextjs footer-tech-tag--${themeClass}`}>
                <i className="devicon devicon-nextjs-original" aria-hidden="true" />
                Next.js
              </span>

              {/* React */}
              <span className={`footer-tech-tag footer-tech-tag--react footer-tech-tag--${themeClass}`}>
                <i className="devicon devicon-react-original colored" aria-hidden="true" />
                React
              </span>

              {/* TypeScript */}
              <span className={`footer-tech-tag footer-tech-tag--typescript footer-tech-tag--${themeClass}`}>
                <i className="devicon devicon-typescript-plain colored" aria-hidden="true" />
                TypeScript
              </span>

              {/* Tailwind CSS */}
              <span className={`footer-tech-tag footer-tech-tag--tailwind footer-tech-tag--${themeClass}`}>
                <i className="devicon devicon-tailwindcss-original colored" aria-hidden="true" />
                Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={`footer-social footer-social--${themeClass}`}>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-social-link footer-social-link--linkedin footer-social-link--${themeClass}`}
            aria-label="LinkedIn"
          >
            <i className="devicon devicon-linkedin-plain" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`footer-social-link footer-social-link--github footer-social-link--${themeClass}`}
            aria-label="GitHub"
          >
            <i className="devicon devicon-github-original" aria-hidden="true" />
          </a>
          <a
            href="mailto:asureshk@buffalo.edu"
            className={`footer-social-link footer-social-link--email footer-social-link--${themeClass}`}
            aria-label="Email"
          >
            <i className="devicon devicon-google-plain" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
