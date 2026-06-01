import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, experience } from '../../data/portfolioData';

/**
 * Experience / Education Timeline — animated neon timeline with cinematic entrances
 */
const timelineItems = [
  ...education.map((e) => ({
    ...e,
    type: 'education',
    title: e.degree,
    org: e.institution,
    duration: e.duration,
    color: '#00d4ff',
    icon: '🎓',
  })),
  ...experience.map((e) => ({
    ...e,
    type: 'experience',
    title: e.role,
    org: e.company,
    duration: e.duration,
    color: '#7c3aed',
    icon: '💼',
  })),
];

// Add a placeholder "self learning" milestone
const allItems = [
  {
    type: 'milestone',
    title: 'Started Full-Stack Journey',
    org: 'Self-Taught',
    duration: 'Aug 2024 – Present',
    description:
      'Independently learned React.js, Node.js, Express.js, and MongoDB alongside formal coursework at IIIT Bhopal. Built 4+ real-world projects and now exploring AI agent development.',
    color: '#a855f7',
    icon: '🚀',
  },
  ...timelineItems,
  {
    type: 'milestone',
    title: 'HackXios 2025 — Participant',
    org: 'InAmigos Foundation',
    duration: 'Dec 2025',
    description:
      'Participated in HackXios 2025 at InAmigos Foundation, building an AI-powered cybersecurity prototype that detects anomalous network behavior in real time. Delivered a working demo in 24 hours with a 3-person team.',
    color: '#f59e0b',
    icon: '👨‍💻',
  },
];

const TimelineItem = ({ item, index, isInView }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 60px 1fr',
        gap: 0,
        alignItems: 'center',
        marginBottom: 48,
      }}
    >
      {/* Left side content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        style={{ paddingRight: 32, textAlign: 'right' }}
      >
        {isLeft ? (
          <TimelineCard item={item} />
        ) : (
          <div style={{ height: '100%' }} />
        )}
      </motion.div>

      {/* Center dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: `${item.color}15`,
            border: `2px solid ${item.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            boxShadow: `0 0 20px ${item.color}40`,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Right side content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        style={{ paddingLeft: 32 }}
      >
        {!isLeft ? (
          <TimelineCard item={item} />
        ) : (
          <div style={{ height: '100%' }} />
        )}
      </motion.div>
    </div>
  );
};

const TimelineCard = ({ item }) => (
  <div
    className="glass-card"
    style={{
      padding: 24,
      borderLeft: `3px solid ${item.color}`,
      textAlign: 'left',
    }}
  >
    <div
      className="font-mono"
      style={{ color: item.color, fontSize: '0.65rem', marginBottom: 8, letterSpacing: '0.2em' }}
    >
      {item.duration}
    </div>
    <h3
      className="font-display"
      style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}
    >
      {item.title}
    </h3>
    <div
      style={{ color: item.color, fontFamily: "'Rajdhani', sans-serif", fontSize: '0.9rem', marginBottom: 12 }}
    >
      {item.org}
    </div>
    {item.description && (
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          color: '#64748b',
          fontSize: '0.85rem',
          lineHeight: 1.6,
        }}
      >
        {item.description}
      </p>
    )}
    {item.location && (
      <div
        className="font-mono"
        style={{ color: '#334155', fontSize: '0.65rem', marginTop: 8 }}
      >
        📍 {item.location}
      </div>
    )}
  </div>
);

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-container"
      style={{ padding: '120px 24px', position: 'relative' }}
    >
      {/* BG glow */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          width: 400,
          height: 600,
          background: 'radial-gradient(circle, rgba(168, 85, 247,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72, textAlign: 'center' }}
        >
          <div className="section-tag" style={{ textAlign: 'center' }}>// JOURNEY</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Education & Milestones</h2>
          <div className="section-line" style={{ margin: '0 auto 0' }} />
        </motion.div>

        {/* Mobile: single column */}
        <div className="hidden md:block" style={{ position: 'relative' }}>
          {/* Center line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: 2,
              background: 'linear-gradient(180deg, transparent, #a855f7, #00d4ff, #ffffff, transparent)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 12px rgba(168, 85, 247,0.4)',
            }}
          />

          {allItems.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {allItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: 20, position: 'relative' }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: -8,
                  top: 16,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: item.color,
                  boxShadow: `0 0 10px ${item.color}`,
                }}
              />
              <TimelineCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
