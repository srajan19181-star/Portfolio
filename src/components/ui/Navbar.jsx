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
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
            ? 'var(--bg-overlay)'
            : 'rgba(5, 10, 14, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(59, 130, 246, 0.18)',
          borderRadius: 12,
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(59, 130, 246,0.06)'
            : 'none',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo('#hero')}
          style={{  }}
          className="interactive"
        >
          <span
            className="font-display glow-cyan"
            style={{ color: '#3b82f6', fontSize: '1rem', letterSpacing: '0.15em', fontWeight: 700 }}
          >
            SU
          </span>
        </div>

        {/* Right Section: Desktop Links + Theme Toggle + Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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

                    fontFamily: "'Orbitron', monospace",
                    fontSize: '0.58rem',
                    letterSpacing: '0.08em',
                    color: isActive ? '#00d4ff' : 'var(--text-muted)',
                    textShadow: isActive ? '0 0 10px #00d4ff' : 'none',
                    transition: 'all 0.3s ease',
                    padding: '4px 0',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = 'var(--text-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = 'var(--text-muted)';
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
                        boxShadow: '0 0 6px #3b82f6',
                        transformOrigin: 'center',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="interactive"
            style={{
              background: 'none',
              border: 'none',
              cursor:'pointer',
              color: 'var(--neon-cyan)',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              transition: 'all 0.3s ease',
            }}
            title="Toggle Light/Dark Mode"
          >
            {theme === 'dark' ? '💡' : '🌙'}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden interactive"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor:'pointer',
              color: '#3b82f6',
              fontSize: '1.2rem',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: 8,
            background: 'var(--bg-overlay)',
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

                fontFamily: "'Orbitron', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: 'var(--text-secondary)',
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
