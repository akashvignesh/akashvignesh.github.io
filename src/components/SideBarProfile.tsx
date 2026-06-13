"use client";
import { useTheme } from '@/src/context/ThemeContext';
import { asset } from '@/src/config/site';
import { LINKS } from '@/src/config/links';

export default function SideBarProfile() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  
  return (
    <div className={`sidebar-profile sidebar-profile--${themeClass}`}>
      {/* Profile Picture */}
      <div className="sidebar-avatar-wrapper">
        <div className={`sidebar-avatar sidebar-avatar--${themeClass}`}>
          <img
            src={asset("/profile.jpg")}
            alt="Akash Sureshkumar"
            className="sidebar-avatar-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='150'%20height='150'%3E%3Crect%20width='150'%20height='150'%20fill='%231e3a5f'/%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>

      {/* Name */}
      <h2 className={`sidebar-name sidebar-name--${themeClass}`}>Akash Sureshkumar</h2>

      {/* Position */}
      <p className={`sidebar-position sidebar-position--${themeClass}`}>Software &amp; ML/AI Engineer</p>

      {/* Divider */}
      <hr className={`sidebar-divider sidebar-divider--${themeClass}`} />

      {/* Contact Details */}
      <div className="sidebar-contact">
        <div className="sidebar-contact-item">
          <div>
            <p className={`sidebar-contact-label sidebar-contact-label--${themeClass}`}>Email</p>
            <a href={`mailto:${LINKS.email}`} className={`sidebar-contact-value sidebar-contact-value--${themeClass}`}>{LINKS.email}</a>
          </div>
        </div>

        <div className="sidebar-contact-item">
          <div>
            <p className={`sidebar-contact-label sidebar-contact-label--${themeClass}`}>Location</p>
            <p className={`sidebar-contact-text sidebar-contact-text--${themeClass}`}>New York, USA · Open to relocate</p>
          </div>
        </div>

      </div>

      {/* Social Links */}
      <div className="sidebar-social">
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`sidebar-social-link sidebar-social-link--${themeClass}`}
        >
          <i className="devicon devicon-linkedin-plain colored sidebar-social-icon" aria-hidden="true" />
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`sidebar-social-link sidebar-social-link--${themeClass}`}
        >
          <i className="devicon devicon-github-original sidebar-social-icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
