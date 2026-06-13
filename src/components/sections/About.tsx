"use client";
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';

// Curated to depth, grouped by area: the things worth defending in an
// interview, not an exhaustive icon dump.
const skillGroups = [
  {
    label: 'Backend',
    items: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Spring Boot', icon: 'devicon-spring-original colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    ],
  },
  {
    label: 'ML / AI',
    items: [
      { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
      { name: 'scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
      { name: 'Pandas', icon: 'devicon-pandas-original colored' },
    ],
  },
  {
    label: 'Data & Cloud',
    items: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
    ],
  },
];

export default function About() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';

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
        {/* Tagline */}
        <p className={`about-tagline about-tagline--${themeClass}`}>
          From scalable backends to ML in production.
        </p>

        {/* Bio */}
        <div className="about-bio">
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            I&apos;m a <span className={`about-highlight about-highlight--${themeClass}`}>Software Engineer</span> with 3+ years shipping production backends:
            REST APIs, event-driven microservices, and distributed services in <span className={`about-highlight about-highlight--${themeClass}`}>Java / Spring Boot</span>.
            At Guardian Life I cut API p95 latency 455&nbsp;→&nbsp;120&nbsp;ms, halved MTTR (5d&nbsp;→&nbsp;2d), and mentored 7 engineers.
          </p>
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            I&apos;m finishing an <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>MS in Engineering Science</span> at the University at Buffalo.
            Beyond backend I ship <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>ML &amp; AI systems</span>: multimodal models,
            LLM agents, and end-to-end data pipelines on AWS, turning models into production services.
          </p>
        </div>

        {/* Skills, grouped */}
        <div className="about-skills">
          <h3 className={`about-skills-title about-skills-title--${themeClass}`}>Tech Stack</h3>
          <div className="sk-groups">
            {skillGroups.map((g) => (
              <div key={g.label} className="sk-group">
                <span className={`sk-group-label sk-group-label--${themeClass}`}>{g.label}</span>
                <div className="sk-chips">
                  {g.items.map((s) => (
                    <span key={s.name} className={`sk-chip sk-chip--${themeClass}`}>
                      <i className={`devicon ${s.icon} sk-chip-icon`} aria-hidden="true" />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
