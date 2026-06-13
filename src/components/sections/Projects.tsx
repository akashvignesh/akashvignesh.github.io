"use client";
import { useState } from 'react';
import SectionCard from '../SectionCard';
import { useTheme } from '@/src/context/ThemeContext';
import { asset } from '@/src/config/site';

interface Repo {
  label: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  track: string;
  category: 'ml' | 'data' | 'cloud';
  featured: boolean;
  outcome: string;        // headline result, shown first
  description: string;
  hard?: string;          // "what made it hard" — featured cards only
  tags: string[];
  image: string;
  period: string;
  repos: Repo[];          // one or more GitHub links
  demo?: string;          // optional live demo
}

// Two standouts are featured large; the rest are compact. Bike + Taxi
// demand forecasting are merged into one case study (same stack, same
// shape) so the section reads as range, not repetition.
const projects: Project[] = [
  {
    id: 1,
    title: 'Multimodal Pump-Fault Prediction',
    track: 'AI / ML Engineering',
    category: 'ml',
    featured: true,
    outcome: '+26% throughput · <50 ms p95 inference',
    description: 'A multimodal service that predicts industrial pump-failure risk by fusing real-time sensor telemetry with inspection images, served behind a FastAPI endpoint.',
    hard: 'Aligning two very different modalities — tabular telemetry (LightGBM) and images (CLIP ViT-B/32) — through a trained gated cross-modal Transformer fusion layer without label leakage.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'CLIP', 'LightGBM', 'Docker'],
    image: '/projects/pump.svg',
    period: '2026',
    repos: [{ label: 'GitHub', url: 'https://github.com/akashvignesh/multimodal-pump-fault-prediction' }],
  },
  {
    id: 2,
    title: 'Agentic Browser Automation',
    track: 'AI Engineering',
    category: 'ml',
    featured: true,
    outcome: 'Completes real web tasks from one prompt — zero hand-coded selectors',
    description: 'An LLM agent that drives a real Chrome session over CDP to complete web tasks from natural language: it snapshots each page, picks one action at a time, then verifies and repeats.',
    hard: 'A provider-agnostic agentic loop (Bedrock / Ollama / NVIDIA) with set-of-marks screenshots, a loop-guard that halts repeated failures, and a per-page-fingerprint cache that replays known pages with zero LLM calls.',
    tags: ['TypeScript', 'Node.js', 'LLM Agents', 'Chrome DevTools Protocol', 'AWS Bedrock'],
    image: '/projects/agentic.svg',
    period: '2026',
    repos: [{ label: 'GitHub', url: 'https://github.com/akashvignesh/agentic-web-automation' }],
  },
  {
    id: 3,
    title: 'NYC Demand Forecasting · Bike + Taxi',
    track: 'Data Engineering · MLOps',
    category: 'data',
    featured: false,
    outcome: 'Two end-to-end MLOps pipelines with automated retraining',
    description: 'Forecasts Citi Bike and Yellow Taxi demand across NYC: feature engineering, a Hopsworks feature/model store, time-series-validated LightGBM models, GitHub Actions schedules, and live Streamlit dashboards.',
    tags: ['Python', 'LightGBM', 'Hopsworks', 'Streamlit', 'GitHub Actions', 'AWS S3'],
    image: '/projects/bike.svg',
    period: '2025–26',
    repos: [
      { label: 'Citi Bike', url: 'https://github.com/akashvignesh/citibike-demand-forecasting' },
      { label: 'Yellow Taxi', url: 'https://github.com/akashvignesh/nyc-taxi-demand-prediction' },
    ],
  },
  {
    id: 4,
    title: 'Serverless AWS File Pipeline',
    track: 'Cloud · Data Engineering',
    category: 'cloud',
    featured: false,
    outcome: 'Event-driven, on-demand compute, 100% infrastructure-as-code',
    description: 'A file upload flows through API Gateway + Lambda to S3/DynamoDB; a DynamoDB stream spins up a fresh EC2 instance that processes the file and self-terminates. Provisioned end-to-end with AWS CDK.',
    tags: ['Next.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'EC2', 'AWS CDK'],
    image: '/projects/serverless.svg',
    period: '2026',
    repos: [{ label: 'GitHub', url: 'https://github.com/akashvignesh/serverless-file-pipeline' }],
  },
  {
    id: 5,
    title: 'Diabetes Risk Prediction',
    track: 'Machine Learning',
    category: 'ml',
    featured: false,
    outcome: 'Benchmarked multiple classifiers to pick the best diabetes-risk model',
    description: 'Predicts diabetes risk from patient health indicators — engineered features, compared several classification models, and selected the strongest performer, packaged with a Dockerized app.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Jupyter', 'Docker'],
    image: '/projects/diabetes.png',
    period: '2025',
    repos: [{ label: 'GitHub', url: 'https://github.com/akashvignesh/diseasePredictionSystem' }],
  },
  {
    id: 6,
    title: 'Document RAG Service',
    track: 'AI Engineering · RAG',
    category: 'ml',
    featured: false,
    outcome: 'Grounded Q&A over a PDF via hybrid semantic + vector retrieval',
    description: 'A Retrieval-Augmented Generation service that answers natural-language questions about a document: parses the PDF, embeds it into ChromaDB, runs hybrid semantic + vector search, and grounds Google Gemini responses — served behind FastAPI and Dockerized.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'FastAPI', 'Gemini', 'Docker'],
    image: '/projects/rag.svg',
    period: '2026',
    repos: [{ label: 'GitHub', url: 'https://github.com/akashvignesh/document-rag-service' }],
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ml', label: 'AI / ML' },
  { id: 'data', label: 'Data & MLOps' },
  { id: 'cloud', label: 'Cloud' },
];

const imgFallback =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='600'%20height='300'%3E%3Crect%20width='600'%20height='300'%20fill='%230f172a'/%3E%3C/svg%3E";

export default function Projects() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  const [activeCategory, setActiveCategory] = useState('all');

  const visible = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);
  const featured = visible.filter((p) => p.featured);
  const compact = visible.filter((p) => !p.featured);

  const renderRepos = (p: Project) => (
    <div className="pj-links">
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className={`pj-link pj-link--demo pj-link--demo-${themeClass}`}>
          <svg className="pj-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
      )}
      {p.repos.map((r) => (
        <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className={`pj-link pj-link--gh pj-link--gh-${themeClass}`}>
          <i className="devicon devicon-github-original pj-link-gh-icon" aria-hidden="true" />
          {r.label}
        </a>
      ))}
    </div>
  );

  return (
    <SectionCard
      title="Projects"
      icon={
        <svg className="projects-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      }
    >
      {/* Track filter */}
      <div className="pj-filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`pj-filter-btn pj-filter-btn--${themeClass} ${activeCategory === cat.id ? 'pj-filter-btn--active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="pj-featured-grid">
          {featured.map((p) => (
            <article key={p.id} className={`pj-featured pj-featured--${themeClass}`}>
              <div className="pj-featured-media">
                <img
                  src={asset(p.image)}
                  alt={p.title}
                  className="pj-featured-img"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = imgFallback; }}
                />
                <span className={`pj-track pj-track--${themeClass}`}>{p.track}</span>
              </div>
              <div className="pj-featured-body">
                <h3 className={`pj-title pj-title--${themeClass}`}>{p.title}</h3>
                <p className={`pj-outcome pj-outcome--${themeClass}`}>{p.outcome}</p>
                <p className={`pj-desc pj-desc--${themeClass}`}>{p.description}</p>
                {p.hard && (
                  <p className={`pj-hard pj-hard--${themeClass}`}>
                    <span className="pj-hard-label">Hard part —</span> {p.hard}
                  </p>
                )}
                <div className="pj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className={`pj-tag pj-tag--${themeClass}`}>{t}</span>
                  ))}
                </div>
                {renderRepos(p)}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Compact */}
      {compact.length > 0 && (
        <div className="pj-compact-grid">
          {compact.map((p) => (
            <article key={p.id} className={`pj-compact pj-compact--${themeClass}`}>
              <div className="pj-compact-media">
                <img
                  src={asset(p.image)}
                  alt={p.title}
                  className="pj-compact-img"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = imgFallback; }}
                />
                <span className={`pj-track pj-track--${themeClass}`}>{p.track}</span>
              </div>
              <div className="pj-compact-body">
                <h3 className={`pj-title pj-title--sm pj-title--${themeClass}`}>{p.title}</h3>
                <p className={`pj-outcome pj-outcome--sm pj-outcome--${themeClass}`}>{p.outcome}</p>
                <p className={`pj-desc pj-desc--sm pj-desc--${themeClass}`}>{p.description}</p>
                <div className="pj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className={`pj-tag pj-tag--${themeClass}`}>{t}</span>
                  ))}
                </div>
                {renderRepos(p)}
              </div>
            </article>
          ))}
        </div>
      )}
    </SectionCard>
  );
}
