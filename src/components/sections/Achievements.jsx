import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../../data/portfolioData';

/**
 * Achievements Section — interactive futuristic display wall with flip cards
 */
const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (i) =>
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section
      id="achievements"
      ref={ref}
      className="section-container"
      style={{ padding: '120px 24px', position: 'relative' }}
    >
      {/* BG accent */}
      <div
        style={{
          position: 'absolute',
          left: '30%',
          bottom: '10%',
          width: 500,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <div className="section-tag">// ACHIEVEMENTS</div>
          <h2 className="section-title">Wins & Milestones</h2>
          <div className="section-line" />
        </motion.div>

        {/* Achievement cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginBottom: 72,
          }}
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ perspective: 1000, height: 260 }}
            >
              <div
                onClick={() => toggleFlip(i)}
                className="interactive"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: flipped[i] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  cursor: 'none',
                }}
              >
                {/* Front */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    background: 'rgba(13, 20, 36, 0.9)',
                    border: `1px solid ${ach.color}25`,
                    borderRadius: 16,
                    padding: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Glow orb behind icon */}
                  <div
                    style={{
                      position: 'absolute',
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${ach.color}15, transparent)`,
                      filter: 'blur(20px)',
                    }}
                  />

                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ fontSize: '3rem', marginBottom: 16, position: 'relative', zIndex: 1 }}
                  >
                    {ach.icon}
                  </motion.div>

                  <div
                    className="font-mono"
                    style={{
                      color: ach.color,
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      marginBottom: 8,
                    }}
                  >
                    {ach.type.toUpperCase()} • {ach.date}
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      color: '#e2e8f0',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: 16,
                    }}
                  >
                    {ach.title}
                  </h3>

                  <div
                    className="font-mono"
                    style={{ color: '#334155', fontSize: '0.6rem', letterSpacing: '0.2em' }}
                  >
                    TAP TO REVEAL
                  </div>

                  {/* Border glow pulse */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 0px ${ach.color}00`,
                        `0 0 20px ${ach.color}30`,
                        `0 0 0px ${ach.color}00`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 16,
                      border: `1px solid ${ach.color}`,
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Back */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, ${ach.color}15, rgba(13,20,36,0.95))`,
                    border: `1px solid ${ach.color}50`,
                    borderRadius: 16,
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: `0 0 30px ${ach.color}20`,
                  }}
                >
                  <div
                    className="font-mono"
                    style={{ color: ach.color, fontSize: '0.65rem', marginBottom: 12, letterSpacing: '0.2em' }}
                  >
                    {ach.type.toUpperCase()} — {ach.date}
                  </div>
                  <h3
                    className="font-display"
                    style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 700, marginBottom: 12 }}
                  >
                    {ach.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: '#94a3b8',
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {ach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitive programming stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card"
          style={{
            padding: '32px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '3px solid #00d4ff',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              className="font-display glow-cyan"
              style={{ color: '#00d4ff', fontSize: '2.5rem', fontWeight: 800 }}
            >
              1484
            </div>
            <div className="font-mono" style={{ color: '#475569', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              CODECHEF MAX RATING
            </div>
          </div>
          <div style={{ width: 1, height: 60, background: 'rgba(0,212,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div
              className="font-display"
              style={{ color: '#e2e8f0', fontSize: '2.5rem', fontWeight: 800 }}
            >
              2★
            </div>
            <div className="font-mono" style={{ color: '#475569', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              CODECHEF DIVISION
            </div>
          </div>
          <div style={{ width: 1, height: 60, background: 'rgba(0,212,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div
              className="font-display"
              style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: 800 }}
            >
              100+
            </div>
            <div className="font-mono" style={{ color: '#475569', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              PROBLEMS SOLVED
            </div>
          </div>
          <div style={{ width: 1, height: 60, background: 'rgba(0,212,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div
              className="font-display"
              style={{ color: '#f59e0b', fontSize: '2.5rem', fontWeight: 800 }}
            >
              1W
            </div>
            <div className="font-mono" style={{ color: '#475569', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              HACKATHON PART.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
