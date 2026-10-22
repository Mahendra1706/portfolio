import { useState, useEffect } from 'react';
import { DownloadIcon } from './Icons';

interface NavbarProps {
  name: string;
  role: string;
  resumeUrl: string;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ name, role, resumeUrl }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar__inner">
        <a href="#" className="navbar__brand">
          <span className="navbar__name">{name}</span>
          <span className="navbar__role">{role}</span>
        </a>

        <div className="navbar__actions">
          <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="navbar__link"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume-btn"
            title="Open Mahendra Gurjar's PDF Resume"
          >
            <DownloadIcon />
            <span>Resume</span>
          </a>

          <button
            className="navbar__mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
