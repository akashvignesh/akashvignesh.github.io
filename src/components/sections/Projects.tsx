"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';
import { asset } from '@/src/config/site';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  achievements: string[];
  period: string;
  track: string;
  link?: string;
  github?: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Pump Fault Risk Prediction Service',
    description: 'A multimodal service that predicts industrial pump failure risk by fusing real-time sensor telemetry with inspection images.',
    image: '/projects/pump.svg',
    tags: ['Python', 'FastAPI', 'PyTorch', 'LightGBM', 'CLIP', 'Docker'],
    period: '2026',
    achievements: [
      'Delivered +26% throughput and 49% lower p95 latency vs. a single-modal LightGBM baseline at 75 concurrent users, with sub-50 ms inference at peak load.',
      'Fused sensor telemetry (LightGBM) with pump inspection images (CLIP ViT-B/32) through a trained Transformer cross-modal and gated-attention fusion layer.',
      'Served predictions through a FastAPI service with health checks and OpenAPI docs, containerized with Docker for reproducible deployment.',
    ],
    track: 'ML / AI Engineering',
    github: 'https://github.com/akashvignesh/multimodal-pump-fault-prediction',
  },
  {
    id: 2,
    title: 'Bike Ride Demand Prediction',
    description: 'An end-to-end MLOps pipeline that forecasts 6-hourly Citi Bike demand for NYC’s busiest stations, with automated retraining.',
    image: '/projects/bike.svg',
    tags: ['Python', 'LightGBM', 'Hopsworks', 'Streamlit', 'GitHub Actions', 'AWS S3'],
    period: '2026',
    achievements: [
      'Ingested raw Citi Bike trip data from a public S3 bucket and engineered 112 lag features across 6-hour bins for the busiest stations.',
      'Stored features in a Hopsworks feature store and trained a LightGBM model with time-series cross-validation for reproducible, versioned pipelines.',
      'Automated the feature and inference pipelines on a schedule with GitHub Actions and visualized 2024 actuals vs 2025 predictions in an interactive Streamlit dashboard.',
    ],
    track: 'Data Engineering · MLOps',
    github: 'https://github.com/akashvignesh/citibike-demand-forecasting',
  },
  {
    id: 3,
    title: 'NYC Yellow Taxi Demand Predictor',
    description: 'A machine-learning system that predicts next-hour taxi ride demand across all NYC taxi zones, covering the full MLOps lifecycle.',
    image: '/projects/taxi.svg',
    tags: ['Python', 'LightGBM', 'Hopsworks', 'Streamlit', 'Pandas'],
    period: '2025',
    achievements: [
      'Built a full MLOps pipeline from raw NYC TLC trip records through feature engineering, model training, and a live feature/model store on Hopsworks.',
      'Trained a LightGBM regressor to predict the number of rides in the next hour for each pickup zone.',
      'Served real-time predictions through a Streamlit dashboard for interactive exploration across all NYC zones.',
    ],
    track: 'Data Science · Analytics',
    github: 'https://github.com/akashvignesh/nyc-taxi-demand-prediction',
  },
  {
    id: 4,
    title: 'Agentic Browser Automation Agent',
    description: 'An LLM agent that drives a real Chrome session to complete any web task from a natural-language prompt: perceiving the page, choosing one action at a time, and verifying each step.',
    image: '/projects/agentic.svg',
    tags: ['TypeScript', 'Node.js', 'LLM Agents', 'Chrome DevTools Protocol', 'AWS Bedrock'],
    period: '2026',
    achievements: [
      'Built a provider-agnostic agentic loop (Bedrock / Ollama / NVIDIA) that snapshots each page into an indexed element list with set-of-marks screenshots, lets the model pick one CDP action (fill / click / select / scroll / upload), then verifies and repeats. The LLM never touches a CSS selector.',
      'Demonstrated it on the hard real-world case of end-to-end job applications, adding a deterministic domain layer: a profile resolver, a safety policy that blocks sensitive fields (SSN, payment, CAPTCHA) and gates final submission, and Gmail IMAP OTP / magic-link verification.',
      'Hardened the runtime with a loop-guard that halts repeated failing actions and a per-page-fingerprint cache that replays known pages without any LLM calls, plus JSONL tool-trace and screenshot logging.',
    ],
    track: 'AI Engineering',
    github: 'https://github.com/akashvignesh/agentic-web-automation',
  },
  {
    id: 5,
    title: 'Serverless AWS File-Processing Pipeline',
    description: 'An event-driven AWS pipeline where a file upload spins up on-demand compute to process it and return the result, fully provisioned as infrastructure-as-code.',
    image: '/projects/serverless.svg',
    tags: ['Next.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'EC2', 'AWS CDK'],
    period: '2026',
    achievements: [
      'Designed an event-driven flow: a React/Next.js form submits a file through API Gateway and Lambda, persisting metadata to DynamoDB and the file to S3 via presigned URLs.',
      'Used a DynamoDB stream to trigger a Lambda that launches a fresh EC2 instance, which downloads the input, runs the processing script, uploads the output to S3, and self-terminates.',
      'Provisioned the entire stack as infrastructure-as-code with AWS CDK v2 (TypeScript) and the AWS SDK v3.',
    ],
    track: 'Data Engineering · Cloud',
    github: 'https://github.com/akashvignesh/serverless-file-pipeline',
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
                src={asset(project.image)}
                alt={project.title}
                className="projects-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='600'%20height='300'%3E%3Crect%20width='600'%20height='300'%20fill='%230f172a'/%3E%3C/svg%3E";
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
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  marginBottom: '0.4rem',
                }}
              >
                {project.track}
              </div>
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
