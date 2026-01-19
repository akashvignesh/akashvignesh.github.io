"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Guardian India Operations Private Limited',
    location: 'Chennai, India',
    period: 'April 2022 – August 2024',
    image: '/experience/guardian.jpg',
    achievements: [
      'Architected and delivered RESTful microservices using Java and Spring Boot, enhancing system scalability and reliability across distributed environments, leading to a 25% improvement in request throughput and zero downtime during deployments.',
      'Refactored legacy monolithic modules into modular microservices, reducing codebase complexity by 35%, improving deployment speed by 40%, and accelerating feature release cycles from weeks to days.',
      'Boosted backend performance through DB2/SQL query optimization, Redis caching, and asynchronous processing, cutting average response time by up to 35% and decreasing peak-time CPU utilization by 20%.',
      'Led development of the Insurance Eligibility module, integrating Splunk dashboards and AWS CloudWatch alerts that enabled real-time API monitoring, resulting in a 50% faster issue resolution and 15% higher API uptime.',
      'Maintained 90%+ automated test coverage using JUnit and Mockito, integrating CI/CD pipelines to cut production defects by 20% and ensure consistently stable, high-quality releases aligned with Agile sprint goals.',
    ],
    technologies: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-original' },
      { name: 'DB2', icon: 'devicon-sqldeveloper-plain' },
      { name: 'Redis', icon: 'devicon-redis-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
    ],
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <SectionCard
      title="Work Experience"
      icon={
        <svg className="experience-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
    >
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-card experience-card--${themeClass}`}>
            {/* Top Banner with Company Info */}
            <div className={`experience-header experience-header--${themeClass}`}>
              <div className="experience-header-content">
                {/* Company Logo */}
                <div className={`experience-logo experience-logo--${themeClass}`}>
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="experience-logo-img"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/150/${theme === 'dark' ? '0f172a' : '0d9488'}/ffffff?text=G`;
                    }}
                  />
                </div>

                {/* Title and Company */}
                <div className="experience-info">
                  <h3 className={`experience-title experience-title--${themeClass}`}>
                    {exp.title}
                  </h3>
                  <p className={`experience-company experience-company--${themeClass}`}>
                    {exp.company}
                  </p>
                </div>

                {/* Period & Location Badges */}
                <div className="experience-meta">
                  <span className={`experience-period experience-period--${themeClass}`}>
                    <svg className="experience-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </span>
                  <span className={`experience-location experience-location--${themeClass}`}>
                    <svg className="experience-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="experience-content">
              {/* Key Achievements Header */}
              <div className="experience-achievements-header">
                <h4 className={`experience-achievements-title experience-achievements-title--${themeClass}`}>
                  <svg className="experience-achievements-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Key Achievements
                </h4>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className={`experience-toggle experience-toggle--${themeClass}`}
                >
                  {expandedIndex === index ? 'Show Less' : 'Show All'}
                </button>
              </div>

              {/* Achievements */}
              <div className="experience-achievements-list">
                {(expandedIndex === index ? exp.achievements : exp.achievements.slice(0, 2)).map((achievement, idx) => (
                  <div key={idx} className={`experience-achievement experience-achievement--${themeClass}`}>
                    <div className="experience-achievement-inner">
                      <div className={`experience-achievement-number experience-achievement-number--${themeClass}`}>
                        {idx + 1}
                      </div>
                      <p className={`experience-achievement-text experience-achievement-text--${themeClass}`}>
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className={`experience-tech experience-tech--${themeClass}`}>
                <h5 className={`experience-tech-title experience-tech-title--${themeClass}`}>
                  Tech Stack
                </h5>
                <div className="experience-tech-list">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className={`experience-tech-tag experience-tech-tag--${themeClass}`}>
                      <i className={`devicon ${tech.icon} colored experience-tech-icon`} />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
