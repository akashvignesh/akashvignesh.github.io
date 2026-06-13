"use client";
import { useState, useEffect, useRef } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

const skills = [
  // Backend
  { name: 'Java', iconClass: 'devicon-java-plain colored', category: 'backend' },
  { name: 'Spring Boot', iconClass: 'devicon-spring-original colored', category: 'backend' },
  { name: 'Python', iconClass: 'devicon-python-plain colored', category: 'backend' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', category: 'backend' },
  // ML / AI
  { name: 'PyTorch', iconClass: 'devicon-pytorch-original colored', category: 'ml' },
  { name: 'TensorFlow', iconClass: 'devicon-tensorflow-original colored', category: 'ml' },
  { name: 'scikit-learn', iconClass: 'devicon-scikitlearn-plain colored', category: 'ml' },
  { name: 'Pandas', iconClass: 'devicon-pandas-original colored', category: 'ml' },
  { name: 'NumPy', iconClass: 'devicon-numpy-original colored', category: 'ml' },
  // Data
  { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored', category: 'data' },
  { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', category: 'data' },
  { name: 'Oracle', iconClass: 'devicon-oracle-original colored', category: 'data' },
  { name: 'Redis', iconClass: 'devicon-redis-plain colored', category: 'data' },
  { name: 'R', iconClass: 'devicon-r-plain colored', category: 'data' },
  // Frontend
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', category: 'frontend' },
  { name: 'React', iconClass: 'devicon-react-original colored', category: 'frontend' },
  { name: 'Next.js', iconClass: 'devicon-nextjs-plain', category: 'frontend' },
  { name: 'Angular', iconClass: 'devicon-angularjs-plain colored', category: 'frontend' },
  { name: 'Tailwind', iconClass: 'devicon-tailwindcss-original colored', category: 'frontend' },
  // Cloud / DevOps
  { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored', category: 'devops' },
  { name: 'Docker', iconClass: 'devicon-docker-plain colored', category: 'devops' },
  { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain colored', category: 'devops' },
  { name: 'Jenkins', iconClass: 'devicon-jenkins-plain colored', category: 'devops' },
  // Tools
  { name: 'Git', iconClass: 'devicon-git-plain colored', category: 'tools' },
  { name: 'Postman', iconClass: 'devicon-postman-plain colored', category: 'tools' },
  { name: 'Jupyter', iconClass: 'devicon-jupyter-plain colored', category: 'tools' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'ml', label: 'ML / AI' },
  { id: 'data', label: 'Data' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'devops', label: 'Cloud / DevOps' },
  { id: 'tools', label: 'Tools' },
];

export default function About() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "From scalable backends to ML in production.";
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
        </div>

        {/* Bio with gradient highlight */}
        <div className="about-bio">
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            I&apos;m a <span className={`about-highlight about-highlight--${themeClass}`}>Software Engineer</span> with 3+ years shipping production backend systems:
            REST APIs, event-driven microservices, and distributed services in <span className={`about-highlight about-highlight--${themeClass}`}>Java / Spring Boot</span>.
            At Guardian Life I cut API p95 latency from 455&nbsp;ms to 120&nbsp;ms, reduced MTTR from 5 days to 2, and mentored 7 engineers.
          </p>
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            I&apos;m completing an <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>MS at the University at Buffalo</span>,
            and beyond backend I ship <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>ML &amp; AI systems</span>: multimodal models,
            LLM agents, and end-to-end data pipelines on AWS, turning models into production services.
          </p>
        </div>

        {/* Skills Section */}
        <div className="about-skills">
          <h3 className={`about-skills-title about-skills-title--${themeClass}`}>
            Tech Stack
          </h3>

          {/* Category Filter */}
          <div className="about-category-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`about-category-btn about-category-btn--${themeClass} ${activeCategory === cat.id ? 'about-category-btn--active' : ''}`}
              >
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
