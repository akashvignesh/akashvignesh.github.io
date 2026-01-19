"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionCard
      title="Get In Touch"
      icon={
        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
    >
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-field">
              <label htmlFor="name" className={`contact-label contact-label--${themeClass}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`contact-input contact-input--${themeClass}`}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email" className={`contact-label contact-label--${themeClass}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`contact-input contact-input--${themeClass}`}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="subject" className={`contact-label contact-label--${themeClass}`}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`contact-input contact-input--${themeClass}`}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message" className={`contact-label contact-label--${themeClass}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`contact-input contact-input--${themeClass}`}
              />
            </div>

            <button type="submit" className={`contact-submit contact-submit--${themeClass}`}>
              <svg className="contact-submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-intro">
            <h3 className={`contact-intro-title contact-intro-title--${themeClass}`}>
              Let's work together!
            </h3>
            <p className={`contact-intro-text contact-intro-text--${themeClass}`}>
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
              about technology.
            </p>
          </div>

          <div className="contact-methods">
            {[
              { icon: 'email', label: 'Email', value: 'asureshk@buffalo.edu', href: 'mailto:asureshk@buffalo.edu' },
              { icon: 'phone', label: 'Phone', value: '+1 (716) 709-0514', href: 'tel:+17167090514' },
              { icon: 'location', label: 'Location', value: 'New York, USA', href: '#' },
            ].map((item) => (
              <a key={item.label} href={item.href} className={`contact-method contact-method--${themeClass}`}>
                <div className={`contact-method-icon contact-method-icon--${themeClass}`}>
                  {item.icon === 'email' && (
                    <svg className="contact-method-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {item.icon === 'phone' && (
                    <svg className="contact-method-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {item.icon === 'location' && (
                    <svg className="contact-method-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                <div className="contact-method-content">
                  <p className={`contact-method-label contact-method-label--${themeClass}`}>
                    {item.label}
                  </p>
                  <p className={`contact-method-value contact-method-value--${themeClass}`}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="contact-social">
            <h4 className={`contact-social-title contact-social-title--${themeClass}`}>
              Follow Me
            </h4>
            <div className="contact-social-links">
              {[
                { name: 'linkedin', icon: 'devicon-linkedin-plain', url: 'https://linkedin.com' },
                { name: 'github', icon: 'devicon-github-original', url: 'https://github.com' },
                { name: 'twitter', icon: 'devicon-twitter-original', url: 'https://twitter.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-social-link contact-social-link--${themeClass}`}
                >
                  <i className={`devicon ${social.icon} contact-social-icon`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
