import { useState } from 'react';
import { QuickStat } from '../types/portfolio';
import { DownloadIcon, CopyIcon, CheckIcon, LocationPin, ExternalArrow } from './Icons';

interface HeroProps {
  name: string;
  role: string;
  location: string;
  headline: string;
  subheadline: string;
  availabilityLabel?: string;
  resumeUrl: string;
  email: string;
  quickStats: QuickStat[];
}

export default function Hero({
  location,
  headline,
  subheadline,
  availabilityLabel,
  resumeUrl,
  email,
  quickStats,
}: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const domainBadges = [
    'C++ & CUDA Inference',
    'Custom Attention Kernels',
    '4-Bit Quantization (GGUF/AWQ)',
    'Mixture-of-Experts (MoE)',
    'Transformer Mechanistic Circuits',
  ];

  return (
    <header className="hero container" aria-label="Introduction">
      {availabilityLabel && (
        <div className="hero__status-badge fade-in-1">
          <span className="hero__status-dot" aria-hidden="true" />
          <span className="hero__status-text">{availabilityLabel}</span>
        </div>
      )}

      <h1 className="hero__headline fade-in-2">{headline}</h1>
      <p className="hero__subheadline fade-in-3">{subheadline}</p>

      {/* Recruiter Quick-Scan Domain Chips */}
      <div className="hero__domain-chips fade-in-4" aria-label="Core Technical Specializations">
        {domainBadges.map((badge) => (
          <span key={badge} className="hero__domain-chip">
            {badge}
          </span>
        ))}
      </div>

      {/* Primary Action Buttons for Recruiters */}
      <div className="hero__cta-group fade-in-5">
        <a className="btn btn--primary" href="#projects">
          Explore Projects ↓
        </a>

        <a
          className="btn btn--secondary"
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon />
          <span>Resume (PDF)</span>
          <ExternalArrow />
        </a>

        <button
          type="button"
          className="btn btn--ghost copy-email-btn"
          onClick={handleCopyEmail}
          aria-label="Copy email address"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? 'Copied to Clipboard!' : email}</span>
        </button>
      </div>

      {/* Candidate Fast-Facts & Location Bar */}
      <div className="hero__meta-bar fade-in-5">
        <div className="hero__meta-item">
          <LocationPin />
          <span>{location}</span>
        </div>
        <div className="hero__meta-item">
          <a
            href="https://github.com/Mahendra1706"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__meta-link"
          >
            github.com/Mahendra1706 ↗
          </a>
        </div>
        <div className="hero__meta-item">
          <a
            href="https://huggingface.co/mahendra4"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__meta-link"
          >
            huggingface.co/mahendra4 ↗
          </a>
        </div>
      </div>

      {/* Recruiter Proof Bar: Concrete Quantitative Benchmarks */}
      <div className="hero__stats-grid fade-in-5" aria-label="Key Performance Benchmarks">
        {quickStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-card__value">{stat.value}</div>
            <div className="stat-card__label">{stat.label}</div>
            <div className="stat-card__subtext">{stat.subtext}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
