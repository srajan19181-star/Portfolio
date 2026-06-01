import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

/**
 * About Section — personal story with animated floating info cards
 */
const stats = [
  { label: 'Projects Built', value: '5+', icon: '⚡' },
  { label: 'Tech Stack', value: 'MERN', icon: '🛠' },
  { label: 'CGPA', value: '8.2', icon: '🎓' },
  { label: 'HackXios', value: 'Part.', icon: '👨‍💻' },
];

const interests = [
  { label: 'Full-Stack Development', icon: '🔧', color: '#00c853' },
  { label: 'AI Agent Building', icon: '🤖', color: '#69f0ae' },
  { label: 'Backend Engineering', icon: '🌐', color: '#00c853' },
  { label: 'React & Redux', icon: '⚛️', color: '#b9f6ca' },
  { label: 'API Architecture', icon: '🔗', color: '#69f0ae' },
  { label: 'Competitive Coding', icon: '💡', color: '#f59e0b' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="section-container"
      style={{ padding: '120px 24px', position: 'relative' }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          right: -100,
          top: '20%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,200,83,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <div className="section-tag">// ABOUT ME</div>
          <h2 className="section-title">Who Am I?</h2>
          <div className="section-line" />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Holographic ID card */}
            <div
              className="glass-card hologram"
              style={{
                padding: 32,
                marginBottom: 32,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background:
                    'linear-gradient(135deg, transparent 50%, rgba(0,212,255,0.08) 50%)',
                }}
              />
              <div
                className="font-mono"
                style={{ color: '#00d4ff', fontSize: '0.65rem', marginBottom: 16, letterSpacing: '0.3em' }}
              >
                // IDENTITY.JSON
              </div>

              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.85rem', color: '#64748b', lineHeight: 2 }}>
                <span style={{ color: '#7c3aed' }}>const</span>{' '}
                <span style={{ color: '#00d4ff' }}>developer</span>{' '}
                <span style={{ color: '#ffffff' }}>=</span>{' '}
                <span style={{ color: '#ffffff' }}>{'{'}</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: '#00ff88' }}>name</span>:{' '}
                <span style={{ color: '#f59e0b' }}>"{personalInfo.name}"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: '#00c853' }}>role</span>:{' '}
                <span style={{ color: '#f59e0b' }}>"Full-Stack Developer"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: '#00c853' }}>location</span>:{' '}
                <span style={{ color: '#f59e0b' }}>"{personalInfo.location}"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: '#00ff88' }}>passion</span>:{' '}
                <span style={{ color: '#f59e0b' }}>"Building scalable APIs"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: '#00c853' }}>status</span>:{' '}
                <span style={{ color: '#69f0ae' }}>"Open to Full-Stack Internships"</span>,
                <br />
                <span style={{ color: '#ffffff' }}>{'}'}</span>
              </div>
            </div>

            {/* Bio text */}
            <div className="glass-card" style={{ padding: 32 }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#94a3b8',
                  lineHeight: 1.8,
                  fontSize: '0.95rem',
                  marginBottom: 20,
                }}
              >
                {personalInfo.bio}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#64748b',
                  lineHeight: 1.8,
                  fontSize: '0.9rem',
                }}
              >
                I believe in building things that work well, scale efficiently, and are maintainable. Every project I take on teaches me something new about software architecture and clean code principles.
              </p>
            </div>
          </motion.div>

          {/* Right — Photo + Stats + Interests */}
          <div>
            {/* Profile Photo — adjustable size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative' }}>
                {/* Outer glow ring */}
                <div style={{
                  width: 220,
                  height: 220,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00c853, #69f0ae, rgba(255,255,255,0.15), #00c853)',
                  padding: 3,
                  boxShadow: '0 0 40px rgba(0,200,83,0.35), 0 0 80px rgba(105,240,174,0.12)',
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
                  bottom: 8,
                  right: 8,
                  background: 'rgba(5,10,14,0.92)',
                  border: '1.5px solid #00c853',
                  borderRadius: 20,
                  padding: '4px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  backdropFilter: 'blur(10px)',
                }}>
                  <motion.span
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: '50%', background: '#00c853', boxShadow: '0 0 8px #00c853', display: 'inline-block' }}
                  />
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00c853', letterSpacing: '0.1em' }}>OPEN TO WORK</span>
                </div>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                marginBottom: 32,
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card glass-card-hover"
                  style={{ padding: 24, textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{stat.icon}</div>
                  <div
                    className="font-display glow-cyan"
                    style={{ color: '#00c853', fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono"
                    style={{ color: '#4a7c59', fontSize: '0.65rem', marginTop: 6, letterSpacing: '0.1em' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-card"
              style={{ padding: 32 }}
            >
              <div
                className="font-mono"
                style={{ color: '#00c853', fontSize: '0.65rem', marginBottom: 20, letterSpacing: '0.3em' }}
              >
                // INTERESTS & FOCUS AREAS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                    className="interactive"
                    style={{
                      padding: '8px 16px',
                      border: `1px solid ${item.color}30`,
                      borderRadius: 6,
                      background: `${item.color}08`,
                      color: item.color,
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      cursor: 'default',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                      background: `${item.color}15`,
                      boxShadow: `0 0 12px ${item.color}30`,
                    }}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card"
              style={{ padding: 24, marginTop: 16 }}
            >
              <div
                className="font-mono"
                style={{ color: '#69f0ae', fontSize: '0.65rem', marginBottom: 12, letterSpacing: '0.3em' }}
              >
                // EDUCATION
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                <div style={{ color: '#e8f5e9', fontWeight: 600, fontSize: '1rem' }}>
                  B.Tech — Electronics & Communication Engg.
                </div>
                <div style={{ color: '#00c853', fontSize: '0.85rem', marginTop: 4 }}>
                  IIIT Bhopal, MP
                </div>
                <div style={{ color: '#4a7c59', fontSize: '0.8rem', marginTop: 4 }}>
                  Aug 2024 – May 2028 · CGPA 8.2
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
