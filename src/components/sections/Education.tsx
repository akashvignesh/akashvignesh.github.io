"use client";
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';
import { asset } from '@/src/config/site';

const education = [
  {
    degree: 'Master of Science in Engineering Science (Data Science)',
    institution: 'University at Buffalo, SUNY',
    location: 'Buffalo, NY',
    period: 'Aug 2024 – Dec 2025',
    coursework: 'Machine Learning, Statistical Learning, Data Mining, Probability Theory, Numerical Mathematics, Database Query Languages',
    image: '/education/buffalo.jpg',
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Sri Sairam Engineering College',
    location: 'Chennai, India',
    period: 'Aug 2018 – Jun 2022',
    coursework: 'Data Structures & Algorithms, DBMS, Operating Systems, OOP, Software Engineering, Machine Learning',
    image: '/education/sairam.jpg',
  },
];

export default function Education() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <SectionCard
      title="Education"
      icon={
        <svg className="education-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      }
    >
      <div className="edu-list">
        {education.map((edu, i) => (
          <div key={i} className={`edu-item edu-item--${themeClass}`}>
            <div className={`edu-logo edu-logo--${themeClass}`}>
              <img
                src={asset(edu.image)}
                alt={edu.institution}
                className="edu-logo-img"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%3E%3Crect%20width='100'%20height='100'%20fill='%231e3a5f'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="edu-main">
              <div className="edu-row1">
                <h3 className={`edu-degree edu-degree--${themeClass}`}>{edu.degree}</h3>
                <span className={`edu-period edu-period--${themeClass}`}>{edu.period}</span>
              </div>
              <p className={`edu-school edu-school--${themeClass}`}>
                {edu.institution} · {edu.location}
              </p>
              <p className={`edu-courses edu-courses--${themeClass}`}>
                <span className="edu-courses-label">Relevant coursework: </span>
                {edu.coursework}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
