import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../data/portfolioData';
import gsap from 'gsap';

/**
 * Hero Section — cinematic first impression
 */
const Hero = () => {
  const nameRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Mouse parallax on the hero
    const onMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 20;
      gsap.to('.hero-parallax', {
        x,
        y,
        duration: 1,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="section-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '140px 24px 60px',
      }}
    >
      {/* Background radial glow */}
      <div
        className="hero-parallax"
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59, 130, 246,0.07) 0%, rgba(31, 41, 55, 0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Animated corner brackets */}
      <div style={{ position: 'absolute', top: 80, left: 40, opacity: 0.3 }}>
        <div style={{ width: 30, height: 30, borderTop: '2px solid #3b82f6', borderLeft: '2px solid #3b82f6' }} />
      </div>
      <div style={{ position: 'absolute', top: 80, right: 40, opacity: 0.3 }}>
        <div style={{ width: 30, height: 30, borderTop: '2px solid #3b82f6', borderRight: '2px solid #3b82f6' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 80, left: 40, opacity: 0.3 }}>
        <div style={{ width: 30, height: 30, borderBottom: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 80, right: 40, opacity: 0.3 }}>
        <div style={{ width: 30, height: 30, borderBottom: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' }} />
      </div>

      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full relative z-10 gap-12 md:gap-20" style={{ maxWidth: 1100 }}>
        
        {/* Left Side: Text */}
        <div style={{ flex: 1, textAlign: 'left' }} className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* System tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono"
            style={{
              color: '#3b82f6',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#3b82f6',
                boxShadow: '0 0 10px #3b82f6, 0 0 20px #00d4ff',
                animation: 'pulse-neon 2s infinite',
              }}
            />
            SYSTEM ONLINE — PORTFOLIO v2.0
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#3b82f6',
                boxShadow: '0 0 10px #3b82f6, 0 0 20px #00d4ff',
                animation: 'pulse-neon 2s infinite',
              }}
            />
          </motion.div>

          {/* Name — cinematic entrance */}
          <motion.h1
            ref={nameRef}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display glow-cyan"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.05em',
              lineHeight: 1.05,
              marginBottom: 12,
              textShadow:
                '0 0 40px rgba(59, 130, 246,0.45), 0 0 80px rgba(0, 212, 255,0.2)',
            }}
          >
            {personalInfo.name.split(' ').map((word, i) => (
              <span
                key={i}
                style={{ display: 'block', color: i === 0 ? '#ffffff' : '#3b82f6' }}
              >
                {word}
              </span>
            ))}
          </motion.h1>

          {/* Animated role title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginBottom: 32 }}
          >
            <TypeAnimation
              sequence={personalInfo.taglines.flatMap((t) => [t, 2000])}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                color: '#94a3b8',
                letterSpacing: '0.1em',
                fontWeight: 500,
              }}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#64748b',
              maxWidth: 580,
              marginBottom: 48,
              lineHeight: 1.7,
            }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            className="justify-center md:justify-start"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="neon-btn interactive"
            >
              Explore My Work
            </a>
            <a
              href={personalInfo.resume}
              download
              className="neon-btn neon-btn-purple interactive"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 24,
            }}
            className="justify-center md:justify-start"
          >
            {[
              { label: 'GitHub', url: personalInfo.github, icon: '⌥' },
              { label: 'LinkedIn', url: personalInfo.linkedin, icon: '◈' },
              { label: 'Email', url: `mailto:${personalInfo.email}`, icon: '◉' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#64748b',
                  textDecoration: 'none',
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3b82f6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                <span style={{ fontSize: '1rem' }}>{social.icon}</span>
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Outer glow ring */}
            <div style={{
              width: 'clamp(200px, 25vw, 320px)',
              height: 'clamp(200px, 25vw, 320px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #00d4ff, rgba(255,255,255,0.15), #3b82f6)',
              padding: 4,
              boxShadow: '0 0 50px rgba(59, 130, 246,0.35), 0 0 100px rgba(0, 212, 255,0.12)',
              animation: 'pulse-neon 3s ease-in-out infinite',
            }}>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
            </div>
            {/* Status badge */}
            <div style={{
              position: 'absolute',
              bottom: 16,
              right: 0,
              background: 'rgba(5,10,14,0.92)',
              border: '1.5px solid #3b82f6',
              borderRadius: 20,
              padding: '6px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backdropFilter: 'blur(10px)',
            }}>
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 10px #3b82f6', display: 'inline-block' }}
              />
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#3b82f6', letterSpacing: '0.1em' }}>OPEN TO WORK</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          className="font-mono"
          style={{ color: '#2d4a35', fontSize: '0.6rem', letterSpacing: '0.3em' }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(180deg, #3b82f6, #00d4ff, transparent)',
            boxShadow: '0 0 6px #3b82f6',
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
