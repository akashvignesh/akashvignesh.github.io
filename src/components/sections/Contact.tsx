"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';
import { LINKS } from '@/src/config/links';

export default function Contact() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    // No form service configured: fall back to the visitor's mail client.
    if (!accessKey) {
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio contact'
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: accessKey, ...formData }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`contact-submit contact-submit--${themeClass}`}
            >
              <svg className="contact-submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p role="status" className={`contact-status contact-status--success contact-status--${themeClass}`}>
                Thanks! Your message has been sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p role="status" className={`contact-status contact-status--error contact-status--${themeClass}`}>
                Something went wrong. Please email me directly at {LINKS.email}.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-intro">
            <h3 className={`contact-intro-title contact-intro-title--${themeClass}`}>
              Let&apos;s work together!
            </h3>
            <p className={`contact-intro-text contact-intro-text--${themeClass}`}>
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
              about technology.
            </p>
          </div>

          <div className="contact-methods">
            {[
              { icon: 'email', label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
              { icon: 'location', label: 'Location', value: 'New York, USA · Open to relocate', href: '#' },
            ].map((item) => (
              <a key={item.label} href={item.href} className={`contact-method contact-method--${themeClass}`}>
                <div className={`contact-method-icon contact-method-icon--${themeClass}`}>
                  {item.icon === 'email' && (
                    <svg className="contact-method-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                { name: 'linkedin', icon: 'devicon-linkedin-plain', url: LINKS.linkedin },
                { name: 'github', icon: 'devicon-github-original', url: LINKS.github },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
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
