"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';
import { asset } from '@/src/config/site';

const experiences = [
  {
    title: 'Software Engineer, Research',
    company: 'University at Buffalo',
    location: 'Buffalo, NY',
    period: 'Feb 2026 – Present',
    image: '/education/buffalo.jpg',
    achievements: [
      'Built a full-stack Faculty Portal for 200+ users across 6 departments: 7+ Java Spring Boot REST APIs, JWT/OAuth2 auth, normalized PostgreSQL schemas, and reusable React/Next.js workflows.',
      'Cut average query response time by 40% and database read load by 35% with index-aware SQL patterns and optimized Hibernate/JPA queries across 8+ workflows.',
      'Reduced deployment cycle from 30 minutes to under 5 by containerizing services with Docker and building GitHub Actions CI/CD with automated test gates on Linux.',
    ],
    technologies: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain' },
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'Guardian Life',
    location: 'Chennai, India',
    period: 'Apr 2024 – Aug 2024',
    image: '/experience/guardian.jpg',
    achievements: [
      'Reduced MTTR from 5 days to 2 on a distributed eligibility platform sustaining 99.9% SLA at 500+ concurrent sessions by building real-time Splunk dashboards and AWS CloudWatch alarms.',
      'Decreased release cycle from 1 hour to 15 minutes (3x faster shipping) by helping decompose a monolith into event-driven microservices with isolated CI/CD pipelines.',
      'Cut cyclomatic complexity by 75% across 25+ services and lifted PR throughput 20% by enforcing SonarQube quality gates, reviewing code, and mentoring 7 engineers.',
    ],
    technologies: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-original' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
    ],
  },
  {
    title: 'Software Engineer I',
    company: 'Guardian Life',
    location: 'Chennai, India',
    period: 'Oct 2022 – Mar 2024',
    image: '/experience/guardian.jpg',
    achievements: [
      'Reduced API p95 latency from 455 ms to 120 ms and improved throughput 3x by rewriting Oracle/SQL execution plans, adding covering indexes, and introducing Redis caching with TTL-based invalidation across 12+ endpoints.',
      'Improved system reliability 35% and cut critical incidents 40% with circuit-breaker patterns and automated Postman regression suites across 20+ REST API contracts.',
      'Shipped 5+ Java Spring Boot microservice features for high-volume insurance eligibility and transaction processing workflows.',
    ],
    technologies: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-original' },
      { name: 'Oracle', icon: 'devicon-oracle-original' },
      { name: 'Redis', icon: 'devicon-redis-plain' },
      { name: 'Angular', icon: 'devicon-angularjs-plain' },
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Guardian Life',
    location: 'Chennai, India',
    period: 'Apr 2022 – Sep 2022',
    image: '/experience/guardian.jpg',
    achievements: [
      'Owned end-to-end delivery of 5+ production eligibility features on a Java Spring Boot microservices platform backed by Oracle, supporting $2M+ in monthly policy transactions.',
      'Caught and same-day resolved a P0 coverage defect missed by 3 prior reviews by authoring JUnit/Mockito contract tests across 15+ edge cases, protecting 12K+ policyholders.',
      'Cut new-engineer onboarding from 2 days to 4 hours with 3+ reusable Angular workflows and setup/deployment runbooks.',
    ],
    technologies: [
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-original' },
      { name: 'Oracle', icon: 'devicon-oracle-original' },
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
                    src={asset(exp.image)}
                    alt={exp.company}
                    className="experience-logo-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='150'%20height='150'%3E%3Crect%20width='150'%20height='150'%20fill='%230f172a'/%3E%3C/svg%3E";
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
