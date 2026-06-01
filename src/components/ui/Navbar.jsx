import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Navbar — glassmorphism floating navigation bar
 */
const navItems = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'TIMELINE', href: '#experience' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((n) => n.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        zIndex: 1000,
        width: 'calc(100% - 40px)',
        maxWidth: 1100,
      }}
    >
      <div
        style={{
          background: scrolled
            ? 'rgba(5, 10, 14, 0.95)'
            : 'rgba(5, 10, 14, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 200, 83, 0.18)',
          borderRadius: 12,
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(0,200,83,0.06)'
            : 'none',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo('#hero')}
          style={{ cursor: 'none' }}
          className="interactive"
        >
          <span
            className="font-display glow-cyan"
            style={{ color: '#00c853', fontSize: '1rem', letterSpacing: '0.15em', fontWeight: 700 }}
          >
            SU
          </span>
          <span
            className="font-mono"
            style={{ color: '#475569', fontSize: '0.65rem', marginLeft: 8, letterSpacing: '0.2em' }}
          >
            v2.0
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center" style={{ gap: '18px' }}>
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = active === id;
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="interactive"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'none',
                  fontFamily: "'Orbitron', monospace",
                  fontSize: '0.58rem',
                  letterSpacing: '0.08em',
                  color: isActive ? '#00d4ff' : '#64748b',
                  textShadow: isActive ? '0 0 10px #00d4ff' : 'none',
                  transition: 'all 0.3s ease',
                  padding: '4px 0',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = '#94a3b8';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = '#64748b';
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: 'linear-gradient(90deg, transparent, #00c853, transparent)',
                      boxShadow: '0 0 6px #00c853',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden interactive"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'none',
            color: '#00c853',
            fontSize: '1.2rem',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: 8,
            background: 'rgba(10, 15, 30, 0.97)',
            border: '1px solid rgba(0, 212, 255, 0.15)',
            borderRadius: 12,
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'none',
                fontFamily: "'Orbitron', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: '#94a3b8',
                textAlign: 'left',
                padding: '8px 0',
                borderBottom: '1px solid rgba(0,212,255,0.08)',
              }}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
