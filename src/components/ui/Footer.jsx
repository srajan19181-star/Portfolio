import { personalInfo } from '../../data/portfolioData';
import { motion } from 'framer-motion';

/**
 * Footer — minimal cyberpunk footer
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: '40px 24px',
        borderTop: '1px solid rgba(0, 200, 83, 0.1)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div>
          <span
            className="font-display glow-cyan"
            style={{ color: '#00c853', fontSize: '0.9rem', letterSpacing: '0.15em' }}
          >
            {personalInfo.name.toUpperCase()}
          </span>
          <span
            className="font-mono"
            style={{ color: '#334155', fontSize: '0.65rem', marginLeft: 12 }}
          >
            © {year} — All rights reserved
          </span>
        </div>

        <div className="font-mono" style={{ color: '#334155', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
          BUILT WITH REACT + THREE.JS + GSAP
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'GH', url: personalInfo.github },
            { label: 'LI', url: personalInfo.linkedin },
            { label: 'ML', url: `mailto:${personalInfo.email}` },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive"
              style={{
                color: '#334155',
                fontSize: '0.7rem',
                fontFamily: "'Orbitron', monospace",
                textDecoration: 'none',
                transition: 'color 0.3s',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00c853')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
