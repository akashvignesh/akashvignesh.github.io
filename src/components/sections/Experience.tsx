"use client";
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';
import { asset } from '@/src/config/site';

interface Highlight {
  metric?: string; // pulled-out headline number / outcome
  text: string;    // the supporting detail
}

interface Role {
  title: string;
  period: string;
  highlights: Highlight[];
}

interface Company {
  company: string;
  location: string;
  image: string;
  range: string;
  progression?: string; // shown when a company has multiple roles
  stack: string[];
  roles: Role[];
}

// Grouped by company so the Guardian progression reads as one tenure
// (Intern → SWE I → SWE II) instead of three repeated logos. Each bullet
// leads with the metric; the prose is the proof.
const timeline: Company[] = [
  {
    company: 'University at Buffalo',
    location: 'Buffalo, NY',
    image: '/education/buffalo.jpg',
    range: 'Feb 2026 – Present',
    stack: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    roles: [
      {
        title: 'Software Engineer, Research',
        period: 'Feb 2026 – Present',
        highlights: [
          { metric: '200+ users', text: 'Built a full-stack Faculty Portal across 6 departments: 7+ Java Spring Boot REST APIs, JWT/OAuth2 auth, normalized PostgreSQL schemas, and reusable React/Next.js workflows.' },
          { metric: '−40% query time', text: 'Cut average query response time 40% and database read load 35% with index-aware SQL and optimized Hibernate/JPA queries across 8+ workflows.' },
          { metric: '30m → <5m deploys', text: 'Containerized services with Docker and built GitHub Actions CI/CD with automated test gates on Linux.' },
        ],
      },
    ],
  },
  {
    company: 'Guardian Life',
    location: 'Chennai, India',
    image: '/experience/guardian.jpg',
    range: 'Apr 2022 – Aug 2024',
    progression: 'Intern → Software Engineer I → Software Engineer II',
    stack: ['Java', 'Spring Boot', 'AWS', 'Oracle', 'Redis', 'Docker', 'Angular'],
    roles: [
      {
        title: 'Software Engineer II',
        period: 'Apr 2024 – Aug 2024',
        highlights: [
          { metric: 'MTTR 5d → 2d', text: 'Drove incident response on a distributed eligibility platform serving 10M+ member records at 99.9% SLA and 500+ concurrent sessions, safeguarding $2M+/mo in policy transactions with real-time Splunk dashboards and AWS CloudWatch alarms.' },
          { metric: '3× faster ships', text: 'Cut release cycle from 1 hour to 15 minutes by helping decompose a monolith into event-driven microservices with isolated CI/CD pipelines.' },
          { metric: 'Mentored 7', text: 'Raised code quality across my team’s services by enforcing SonarQube quality gates, reviewing PRs, and mentoring 7 engineers — lifting PR throughput 20% and cutting cyclomatic complexity 75%.' },
        ],
      },
      {
        title: 'Software Engineer I',
        period: 'Oct 2022 – Mar 2024',
        highlights: [
          { metric: '455 → 120 ms p95', text: 'Cut API p95 latency from 455 ms to 120 ms and tripled throughput by rewriting Oracle/SQL execution plans, adding covering indexes, and introducing Redis caching with TTL-based invalidation across 12+ eligibility endpoints.' },
          { metric: 'Stopped improper payouts', text: 'Prevented improper claim payments on terminated/ineligible members by hardening real-time eligibility checks and speeding 834 benefit-enrollment file processing across the 10M+ member platform, reducing financial leakage.' },
          { metric: '−40% incidents', text: 'Cut critical incidents 40% and improved reliability 35% with circuit-breaker patterns and automated Postman regression suites across 20+ REST API contracts.' },
          { metric: '20+ features', text: 'Shipped 20+ production Java Spring Boot features for high-volume insurance eligibility and transaction-processing workflows.' },
        ],
      },
      {
        title: 'Software Engineer Intern',
        period: 'Apr 2022 – Sep 2022',
        highlights: [
          { metric: '$2M+/mo', text: 'Delivered end-to-end 5+ production eligibility features on a Java Spring Boot + Oracle platform serving 10M+ member records and $2M+/mo in policy transactions.' },
          { metric: 'P0 caught', text: 'Caught and resolved same-day a coverage defect missed by 3 prior reviews by authoring JUnit/Mockito contract tests across 15+ edge cases, protecting 12K+ policyholders.' },
          { metric: 'Onboarding 2d → 4h', text: 'Cut new-engineer onboarding from 2 days to 4 hours with reusable Angular workflows and setup/deployment runbooks.' },
        ],
      },
    ],
  },
];

export default function Experience() {
  const { theme } = useTheme();
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
      <div className="xp-timeline">
        {timeline.map((c, ci) => (
          <div key={ci} className={`xp-company xp-company--${themeClass}`}>
            <span className={`xp-dot xp-dot--${themeClass}`} aria-hidden="true" />

            <div className="xp-body">
              {/* Company header */}
              <div className="xp-head">
                <div className={`xp-logo xp-logo--${themeClass}`}>
                  <img
                    src={asset(c.image)}
                    alt={c.company}
                    className="xp-logo-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='150'%20height='150'%3E%3Crect%20width='150'%20height='150'%20fill='%230f172a'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="xp-head-text">
                  <h3 className={`xp-company-name xp-company-name--${themeClass}`}>{c.company}</h3>
                  <span className={`xp-location xp-location--${themeClass}`}>{c.location}</span>
                </div>
                <span className={`xp-range xp-range--${themeClass}`}>{c.range}</span>
              </div>

              {c.progression && (
                <div className={`xp-progression xp-progression--${themeClass}`}>{c.progression}</div>
              )}

              {/* Roles */}
              <div className="xp-roles">
                {c.roles.map((r, ri) => (
                  <div key={ri} className="xp-role">
                    <div className="xp-role-head">
                      <span className={`xp-role-title xp-role-title--${themeClass}`}>{r.title}</span>
                      <span className={`xp-role-period xp-role-period--${themeClass}`}>{r.period}</span>
                    </div>
                    <ul className="xp-highlights">
                      {r.highlights.map((h, hi) => (
                        <li key={hi} className="xp-highlight">
                          {h.metric && (
                            <span className={`xp-metric xp-metric--${themeClass}`}>{h.metric}</span>
                          )}
                          <span className={`xp-highlight-text xp-highlight-text--${themeClass}`}>{h.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Combined stack */}
              <div className={`xp-stack xp-stack--${themeClass}`}>
                {c.stack.map((t) => (
                  <span key={t} className={`xp-chip xp-chip--${themeClass}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
