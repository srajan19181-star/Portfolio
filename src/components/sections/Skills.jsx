import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolioData';

/**
 * Skills Section — animated skill orbs + proficiency rings
 */
const categoryColors = {
  Language: '#f59e0b',
  Frontend: '#00d4ff',
  Backend: '#7c3aed',
  Database: '#00ff88',
  Tools: '#ff0080',
};

const categoryIcons = {
  Language: '{ }',
  Frontend: '◈',
  Backend: '⚙',
  Database: '◉',
  Tools: '⌥',
};

const categories = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'Tools'];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container"
      style={{ padding: '120px 24px', position: 'relative' }}
    >
      {/* BG glow */}
      <div
        style={{
          position: 'absolute',
          left: -100,
          top: '30%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
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
          style={{ marginBottom: 48 }}
        >
          <div className="section-tag">// TECH STACK</div>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 48,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="interactive"
              style={{
                padding: '8px 20px',
                border: `1px solid ${
                  activeCategory === cat
                    ? '#00d4ff'
                    : 'rgba(0,212,255,0.15)'
                }`,
                borderRadius: 6,
                background:
                  activeCategory === cat
                    ? 'rgba(0,212,255,0.12)'
                    : 'transparent',
                color: activeCategory === cat ? '#00d4ff' : 'var(--text-muted)',
                fontFamily: "'Orbitron', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                cursor: 'none',
                transition: 'all 0.3s ease',
                boxShadow:
                  activeCategory === cat
                    ? '0 0 12px rgba(0,212,255,0.3)'
                    : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 16,
          }}
        >
          {filteredSkills.map((skill, i) => {
            const color = categoryColors[skill.category] || '#00d4ff';
            const isHovered = hoveredSkill === skill.name;
            const circumference = 2 * Math.PI * 28;
            const dashOffset = circumference * (1 - skill.level / 100);

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="interactive"
                style={{
                  background: isHovered
                    ? `${color}10`
                    : 'rgba(13, 20, 36, 0.7)',
                  border: `1px solid ${isHovered ? color : 'rgba(0,212,255,0.1)'}`,
                  borderRadius: 12,
                  padding: '24px 16px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  boxShadow: isHovered ? `0 0 20px ${color}20, 0 8px 32px rgba(0,0,0,0.3)` : 'none',
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                }}
              >
                {/* Circular progress ring */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 12 }}>
                  <svg width={72} height={72} viewBox="0 0 72 72">
                    {/* Background ring */}
                    <circle
                      cx={36}
                      cy={36}
                      r={28}
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth={3}
                    />
                    {/* Progress ring */}
                    <motion.circle
                      cx={36}
                      cy={36}
                      r={28}
                      fill="none"
                      stroke={color}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={isInView ? { strokeDashoffset: dashOffset } : {}}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                      transform="rotate(-90, 36, 36)"
                      style={{ filter: `drop-shadow(0 0 4px ${color})` }}
                    />
                    {/* Center icon */}
                    <text
                      x={36}
                      y={36}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={color}
                      fontSize={isHovered ? '14' : '11'}
                      fontFamily="'Share Tech Mono', monospace"
                      fontWeight="bold"
                    >
                      {skill.icon}
                    </text>
                  </svg>
                  {/* Percentage badge */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        background: color,
                        color: '#000',
                        borderRadius: '50%',
                        width: 28,
                        height: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        fontFamily: "'Orbitron', monospace",
                      }}
                    >
                      {skill.level}
                    </motion.div>
                  )}
                </div>

                {/* Skill name */}
                <div
                  className="font-body"
                  style={{
                    color: isHovered ? 'var(--text-secondary)' : 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: 4,
                    transition: 'color 0.3s',
                  }}
                >
                  {skill.name}
                </div>

                {/* Category tag */}
                <div
                  className="font-mono"
                  style={{
                    color: color,
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    opacity: 0.7,
                  }}
                >
                  {categoryIcons[skill.category]} {skill.category}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
