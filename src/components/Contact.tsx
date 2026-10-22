import { useState } from 'react';
import { SocialLink } from '../types/portfolio';
import { CopyIcon, CheckIcon, DownloadIcon, MailIcon, ExternalArrow } from './Icons';

interface ContactProps {
  socialLinks: SocialLink[];
  email: string;
  resumeUrl: string;
}

export default function Contact({ socialLinks, email, resumeUrl }: ContactProps) {
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

  return (
    <section id="contact" className="section contact-section" aria-label="Contact information">
      <p className="section__label">Get in Touch</p>
      <div className="contact-card">
        <h2 className="contact__headline">Let's build something exceptional.</h2>
        <p className="contact__text">
          I'm actively open to full-time AI/ML engineering roles, systems research internships, and collaborative open-source projects. Feel free to reach out directly.
        </p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${email}`}>
            <MailIcon />
            <span>Send Email</span>
          </a>

          <button
            type="button"
            className="btn btn--secondary copy-email-btn"
            onClick={handleCopyEmail}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
          </button>

          <a
            className="btn btn--ghost"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon />
            <span>View Resume (PDF)</span>
            <ExternalArrow />
          </a>
        </div>

        <div className="contact__social-grid">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="social-pill"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.label}</span>
              <ExternalArrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
