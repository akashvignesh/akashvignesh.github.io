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
          Systems that stay fast, correct, and simple to ship.
        </p>

        {/* Bio */}
        <div className="about-bio">
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            At <span className={`about-highlight about-highlight--${themeClass}`}>Guardian Life</span> I helped run a distributed insurance-eligibility platform serving 10M+ members,
            cutting API p95 latency 455&nbsp;→&nbsp;120&nbsp;ms, tripling throughput, and halving MTTR (5d&nbsp;→&nbsp;2d) while mentoring 7 engineers.
            The work I care about is the unglamorous kind: execution plans, caching, circuit breakers, and the tests that keep an eligibility check correct under real load.
          </p>
          <p className={`about-bio-text about-bio-text--${themeClass}`}>
            Now I&apos;m finishing an <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>MS in Engineering Science</span> at the University at Buffalo and pushing further into <span className={`about-highlight about-highlight--secondary about-highlight--secondary-${themeClass}`}>ML &amp; AI</span>:
            multimodal models, LLM agents, and end-to-end data pipelines on AWS. What I enjoy most is the full path from a trained model to a service people actually call.
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
