"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  achievements: string[];
  period: string;
  link?: string;
  github?: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Trading Assist Application for Stock Market',
    description: 'A comprehensive stock prediction system using LSTM models for precise financial forecasting with real-time data integration.',
    image: '/projects/trading.png',
    tags: ['R', 'TensorFlow', 'Keras', 'quantmod', 'ggplot2'],
    period: 'December 2024',
    achievements: [
      'Designed and implemented a stock prediction system using LSTM models, achieving 97.61% accuracy and 2.39% MAPE for precise financial forecasting',
      'Streamlined data preprocessing workflows with TensorFlow and Keras to enhance training efficiency',
      'Integrated live financial data streams using quantmod and created visualizations with ggplot2, improving decision-making efficiency by 25%',
    ],
    github: '#',
  },
  {
    id: 2,
    title: 'Predictive Analytics for Diabetes',
    description: 'A predictive healthcare model leveraging multiple ML algorithms with scalable deployment for real-time insights.',
    image: '/projects/diabetes.png',
    tags: ['Python', 'SQLite', 'Docker', 'Streamlit', 'Digital Ocean', 'MLflow'],
    period: 'December 2024',
    achievements: [
      'Engineered a predictive model leveraging Logistic Regression, Random Forest, and Gradient Boosting with dependable accuracy',
      'Processed extensive datasets using Pandas, NumPy, and scikit-learn for optimized data integrity and model performance',
      'Implemented scalable deployment strategies with MLflow and Joblib, reducing model deployment time by 40%',
      'Enabled real-time healthcare insights with a 30% improvement in response efficiency',
    ],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  const toggleExpand = (projectId: number) => {
    setExpandedId(expandedId === projectId ? null : projectId);
  };

  return (
    <SectionCard
      title="Projects"
      icon={
        <svg className="projects-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      }
    >
      <div className="projects-grid">
        {initialProjects.map((project, index) => (
          <div
            key={project.id}
            className={`projects-card projects-card--${themeClass} ${hoveredId === project.id ? 'projects-card--hovered' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container */}
            <div className="projects-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="projects-image"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/600x300/${theme === 'dark' ? '0f172a' : '0d9488'}/ffffff?text=${encodeURIComponent(project.title)}`;
                }}
              />
              
              {/* Overlay Gradient */}
              <div className={`projects-image-overlay projects-image-overlay--${themeClass}`} />

              {/* Period Badge */}
              <div className={`projects-period projects-period--${themeClass}`}>
                {project.period}
              </div>
            </div>

            {/* Content */}
            <div className="projects-content">
              <h3 className={`projects-title projects-title--${themeClass}`}>
                {project.title}
              </h3>

              <p className={`projects-description projects-description--${themeClass}`}>
                {project.description}
              </p>

              {/* More Details Dropdown */}
              <div className="projects-details">
                <button
                  onClick={() => toggleExpand(project.id)}
                  className={`projects-toggle projects-toggle--${themeClass}`}
                >
                  <svg className={`projects-toggle-icon ${expandedId === project.id ? 'projects-toggle-icon--rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {expandedId === project.id ? 'Show Less' : 'More Details'}
                </button>

                {/* Expandable Content */}
                <div className={`projects-expandable ${expandedId === project.id ? 'projects-expandable--open' : ''}`}>
                  <div className={`projects-achievements projects-achievements--${themeClass}`}>
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className={`projects-achievement projects-achievement--${themeClass}`}>
                        <span className={`projects-achievement-dot projects-achievement-dot--${themeClass}`} />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="projects-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className={`projects-tag projects-tag--${themeClass}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="projects-links">
                {project.link && (
                  <a href={project.link} className={`projects-link projects-link--${themeClass}`}>
                    <svg className="projects-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className={`projects-github projects-github--${themeClass}`}>
                    <i className="devicon devicon-github-original projects-github-icon" aria-hidden="true" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Border Glow Effect */}
            <div className={`projects-glow projects-glow--${themeClass} ${hoveredId === project.id ? 'projects-glow--visible' : ''}`} />

            {/* Decorative gradient bar */}
            <div className={`projects-gradient-bar projects-gradient-bar--${themeClass}`} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
