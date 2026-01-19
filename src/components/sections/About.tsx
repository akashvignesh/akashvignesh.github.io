"use client";
import { useState, useEffect, useRef } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

const skills = [
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored', category: 'frontend' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored', category: 'frontend' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', category: 'frontend' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', category: 'frontend' },
  { name: 'React', iconClass: 'devicon-react-original colored', category: 'frontend' },
  { name: 'Tailwind', iconClass: 'devicon-tailwindcss-original colored', category: 'frontend' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', category: 'backend' },
  { name: 'Express', iconClass: 'devicon-express-original', category: 'backend' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', category: 'database' },
  { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', category: 'database' },
  { name: 'Python', iconClass: 'devicon-python-plain colored', category: 'backend' },
  { name: 'Java', iconClass: 'devicon-java-plain colored', category: 'backend' },
  { name: 'Spring', iconClass: 'devicon-spring-original colored', category: 'backend' },
  { name: 'Git', iconClass: 'devicon-git-plain colored', category: 'tools' },
  { name: 'Docker', iconClass: 'devicon-docker-plain colored', category: 'devops' },
  { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored', category: 'devops' },
  { name: 'GitHub', iconClass: 'devicon-github-original', category: 'tools' },
  { name: 'Postman', iconClass: 'devicon-postman-plain colored', category: 'tools' },
  { name: 'CI/CD', iconClass: 'devicon-githubactions-plain colored', category: 'devops' },
  { name: 'Vercel', iconClass: 'devicon-vercel-original', category: 'devops' },
];

const categories = [
  { id: 'all', label: 'All', icon: '🚀' },
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'database', label: 'Database', icon: '🗄️' },
  { id: 'devops', label: 'DevOps', icon: '☁️' },
  { id: 'tools', label: 'Tools', icon: '🔧' },
];

export default function About() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Building the future, one line of code at a time.";
  const textRef = useRef(0);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  // Typing effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (textRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, textRef.current + 1));
        textRef.current++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <SectionCard
      title="About Me"
      icon={
        <svg className="about-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      }
    >
      <div className="about-content">
        {/* Typing Effect Tagline */}
        <div className={`about-tagline about-tagline--${themeClass}`}>
          <span className="about-tagline-bracket">{">"}</span>
          <span>{displayedText}</span>
          <span className="about-tagline-cursor">|</span>
          <span className="about-tagline-bracket">{"<"}</span>
        </div>

        {/* Bio with gradient highlight */}
        <div className="about-bio">
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            I am a <span className={`about-highlight about-highlight--${themeClass}`}>Data Science</span> graduate student at the University at Buffalo with over 2 years of 
            professional experience as a <span className={`about-highlight about-highlight--${themeClass}`}>Software Engineer</span> at Guardian Life.
          </p>
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            My expertise spans building <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>scalable microservices</span>, 
            optimizing backend performance, and developing <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>machine learning models</span> for predictive analytics.
          </p>
        </div>

        {/* Skills Section */}
        <div className="about-skills">
          <h3 className={`about-skills-title about-skills-title--${themeClass}`}>
            <span className="about-skills-emoji">⚡</span> Tech Stack
          </h3>

          {/* Category Filter */}
          <div className="about-category-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`about-category-btn about-category-btn--${themeClass} ${activeCategory === cat.id ? 'about-category-btn--active' : ''}`}
              >
                <span className="about-category-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="about-skills-grid">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`about-skill-wrapper ${hoveredSkill === skill.name ? 'about-skill-wrapper--hovered' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`about-skill-card about-skill-card--${themeClass} ${hoveredSkill === skill.name ? 'about-skill-card--hovered' : ''}`}>
                  {/* Glow effect on hover */}
                  {hoveredSkill === skill.name && (
                    <div className={`about-skill-glow about-skill-glow--${themeClass}`} />
                  )}
                  
                  {/* Icon with spin effect for React */}
                  <div className={`about-skill-icon ${skill.name === 'React' ? 'about-skill-icon--react' : ''}`}>
                    <i className={skill.iconClass} aria-hidden="true" />
                  </div>
                  
                  {/* Name */}
                  <p className={`about-skill-name about-skill-name--${themeClass}`}>
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
