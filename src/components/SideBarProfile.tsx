"use client";
import { useTheme } from '@/src/context/ThemeContext';

export default function SideBarProfile() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  
  return (
    <div className={`sidebar-profile sidebar-profile--${themeClass}`}>
      {/* Profile Picture */}
      <div className="sidebar-avatar-wrapper">
        <div className={`sidebar-avatar sidebar-avatar--${themeClass}`}>
          <img
            src="/profile.jpg"
            alt="Akash Sureshkumar"
            className="sidebar-avatar-img"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/150?text=AS';
            }}
          />
        </div>
      </div>

      {/* Name */}
      <h2 className={`sidebar-name sidebar-name--${themeClass}`}>Akash Sureshkumar</h2>

      {/* Position */}
      <p className={`sidebar-position sidebar-position--${themeClass}`}>Data Science Graduate Student</p>

      {/* Divider */}
      <hr className={`sidebar-divider sidebar-divider--${themeClass}`} />

      {/* Contact Details */}
      <div className="sidebar-contact">
        <div className="sidebar-contact-item">
          <div>
            <p className={`sidebar-contact-label sidebar-contact-label--${themeClass}`}>Email</p>
            <a href="mailto:asureshk@buffalo.edu" className={`sidebar-contact-value sidebar-contact-value--${themeClass}`}>asureshk@buffalo.edu</a>
          </div>
        </div>

        <div className="sidebar-contact-item">
          <div>
            <p className={`sidebar-contact-label sidebar-contact-label--${themeClass}`}>Phone</p>
            <a href="tel:+17167090514" className={`sidebar-contact-value sidebar-contact-value--${themeClass}`}>+1 (716) 709-0514</a>
          </div>
        </div>

        <div className="sidebar-contact-item">
          <div>
            <p className={`sidebar-contact-label sidebar-contact-label--${themeClass}`}>Location</p>
            <p className={`sidebar-contact-text sidebar-contact-text--${themeClass}`}>New York, USA</p>
          </div>
        </div>

      </div>

      {/* Social Links */}
      <div className="sidebar-social">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`sidebar-social-link sidebar-social-link--${themeClass}`}
        >
          <i className="devicon devicon-linkedin-plain colored sidebar-social-icon" aria-hidden="true" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`sidebar-social-link sidebar-social-link--${themeClass}`}
        >
          <i className="devicon devicon-github-original sidebar-social-icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
