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

// Content is kept in sync with the verified resume: real, defensible numbers only.
const timeline: Company[] = [
  {
    company: 'University at Buffalo, AI Innovation Lab',
    location: 'Buffalo, NY',
    image: '/education/buffalo.jpg',
    range: 'Feb 2026 – Present',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Python', 'RAG', 'LLM', 'GitHub Actions', 'Docker', 'Kubernetes', 'MySQL'],
    roles: [
      {
        title: 'Software Engineer',
        period: 'Feb 2026 – Present',
        highlights: [
          { metric: '143 faculty · 1,342 students', text: 'Delivered a single source of truth for faculty data now used by 143 faculty and 1,342 students, cutting redundant manual spreadsheet work ~70%, by building a full-stack CSE Faculty Portal end to end with AI coding assistants (Claude Code, Codex).' },
          { metric: '−50% advising queries', text: 'Enabled students to self-serve faculty information in natural language and cut routine advising queries over 50%, by building and deploying a RAG chatbot with an LLM retrieval pipeline over structured faculty data.' },
          { metric: '5-min zero-touch deploys', text: 'Enabled zero-touch releases that build and deploy in ~5 minutes while leading a 6-engineer team, by scripting GitHub Actions CI/CD that ships Dockerized containers to Kubernetes on a self-hosted Linux server.' },
          { metric: '6 tools → 1', text: 'Replaced fragmented access across 6 separate tools with unified role-based access control across 4 role views, enforcing least privilege over profiles, courses, committees, awards, and advisee records.' },
        ],
      },
    ],
  },
  {
    company: 'Guardian Life',
    location: 'Remote',
    image: '/experience/guardian.jpg',
    range: 'Apr 2022 – Aug 2024',
    progression: 'Software Engineer I → Software Engineer II',
    stack: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Redis', 'Angular', 'TypeScript', 'AWS', 'Splunk', 'CloudWatch', 'JUnit'],
    roles: [
      {
        title: 'Software Engineer II',
        period: 'Apr 2022 – Aug 2024',
        highlights: [
          { metric: '29M+ members', text: 'Modernized a 29M+ member insurance platform by rebuilding 6 legacy monolithic flows into distributed microservices, owning 30+ secured REST APIs serving 100K+ requests daily within SLA across eligibility, benefits, and coverage flows.' },
          { metric: '−50%+ dev effort', text: "Cut 10+ teams' development effort 50%+ by consolidating duplicated legacy business logic into reusable, shared APIs." },
          { metric: '−90% incidents · 80% caught', text: 'Cut production incidents ~90% and caught 80% of failures before they reached users by building Splunk and CloudWatch dashboards that track latency and error-rate SLIs against defined SLOs, improving MTTR through proactive alerting.' },
          { metric: '600→210ms · 10–20ms cached', text: 'Cut API latency from ~600–800 ms to under 210 ms, and to 10–20 ms on cached reads via Redis, through database query tuning and multithreading.' },
          { metric: 'Mentored 8 · TDD', text: 'Delivered dental, vision, and dependent coverage features for all policyholders, driving quality through test-driven development (TDD) while reviewing pull requests, setting engineering standards, and onboarding 8 new engineers.' },
          { metric: '−1 hr/deploy · 40+ engineers', text: 'Cut deployment toil ~1 hour per change for 40+ engineers and enabled zero-downtime releases by reverse-engineering an undocumented legacy monolith into deployment runbooks and analysis docs that became the team reference.' },
          { metric: '4 policyholder flows', text: 'Rebuilt 4 legacy policyholder flows in Angular and TypeScript, lazy loading each member eligibility, coverage, and dependents to render large nested payloads without lag, with secure JWT REST APIs and PDF generation.' },
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
