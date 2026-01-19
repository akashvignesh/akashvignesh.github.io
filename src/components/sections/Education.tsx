"use client";
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

const education = [
  {
    degree: 'Master of Engineering Science in Data Science',
    institution: 'University at Buffalo, The State University of New York',
    location: 'Buffalo, New York',
    period: 'August 2024 – December 2025',
    description: 'Probability Theory, Numerical Mathematics, Programming Fundamentals, Database Query Languages, Machine Learning, Statistical Learning, Data Mining, Industry Applications',
    icon: '🎓',
    image: '/education/buffalo.jpg',
  },
  {
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    institution: 'Sri Sairam Engineering College',
    location: 'Chennai, India',
    period: 'August 2018 - June 2022',
    description: 'Data Structures, Algorithms, Database Management, Object-Oriented Programming, Software Engineering, Machine Learning, Operating Systems',
    icon: '📚',
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
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className={`education-card education-card--${themeClass}`}>
            <div className="education-card-inner">
              {/* Left - Logo/Image Section */}
              <div className={`education-logo-section education-logo-section--${themeClass}`}>
                <div className={`education-logo-wrapper education-logo-wrapper--${themeClass}`}>
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="education-logo"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/150/${theme === 'dark' ? '1e3a5f' : '0d9488'}/ffffff?text=${encodeURIComponent(edu.icon)}`;
                    }}
                  />
                </div>
              </div>

              {/* Right - Content Section */}
              <div className="education-content">
                {/* Period Badge */}
                <div className="education-header">
                  <span className={`education-period education-period--${themeClass}`}>
                    {edu.period}
                  </span>
                </div>

                {/* Degree */}
                <h3 className={`education-degree education-degree--${themeClass}`}>
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className={`education-institution education-institution--${themeClass}`}>
                  {edu.institution}
                </p>

                {/* Location */}
                <p className={`education-location education-location--${themeClass}`}>
                  <svg className="education-location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </p>

                {/* Coursework as Tags */}
                <div className="education-courses">
                  {edu.description.split(', ').map((course, idx) => (
                    <span key={idx} className={`education-course-tag education-course-tag--${themeClass}`}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className={`education-accent education-accent--${themeClass}`} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
