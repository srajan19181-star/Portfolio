import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';

/**
 * Projects Section — futuristic floating panels with cinematic modal
 */
const categoryColors = {
  Backend: '#7c3aed',
  Frontend: '#00d4ff',
  AI: '#ff0080',
  Tools: '#00ff88',
};

const statusColors = {
  'In Progress': '#f59e0b',
  Live: '#00ff88',
  Complete: '#00d4ff',
};

// Project Card
const ProjectCard = ({ project, onClick, index, isInView }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const color = project.color || categoryColors[project.category] || '#00d4ff';

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onClick={() => onClick(project)}
      className="interactive"
      style={{
        background: 'rgba(13, 20, 36, 0.85)',
        border: `1px solid ${color}25`,
        borderRadius: 16,
        padding: 28,
        cursor: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        backdropFilter: 'blur(16px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        borderColor: color,
        boxShadow: `0 0 30px ${color}20, 0 20px 60px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Corner accent glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 100,
          height: 100,
          background: `radial-gradient(circle at top right, ${color}15, transparent)`,
          borderRadius: '0 16px 0 0',
          pointerEvents: 'none',
        }}
      />

      {/* Top row — category + status */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <span
          className="font-mono"
          style={{
            padding: '4px 10px',
            borderRadius: 4,
            background: `${color}15`,
            border: `1px solid ${color}30`,
            color: color,
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
          }}
        >
          {project.category.toUpperCase()}
        </span>
        <span
          className="font-mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: statusColors[project.status],
            fontSize: '0.65rem',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: statusColors[project.status],
              boxShadow: `0 0 8px ${statusColors[project.status]}`,
              display: 'inline-block',
            }}
          />
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-display"
        style={{
          color: '#e2e8f0',
          fontSize: '1.1rem',
          fontWeight: 700,
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          color: color,
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '0.85rem',
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        {project.subtitle}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          color: '#64748b',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          marginBottom: 20,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            style={{
              padding: '3px 10px',
              borderRadius: 4,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#64748b',
              fontSize: '0.7rem',
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span
            style={{
              padding: '3px 10px',
              color: '#475569',
              fontSize: '0.7rem',
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Footer — links */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="interactive"
            style={{
              color: '#475569',
              fontSize: '0.75rem',
              fontFamily: "'Share Tech Mono', monospace",
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            ⌥ GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="interactive"
            style={{
              color: '#475569',
              fontSize: '0.75rem',
              fontFamily: "'Share Tech Mono', monospace",
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff88')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            ◈ Live Demo
          </a>
        )}
        <span
          style={{
            marginLeft: 'auto',
            color: '#334155',
            fontSize: '0.7rem',
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Hover instruction */}
      <div
        style={{
          position: 'absolute',
          bottom: 12,
          right: 16,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.6rem',
          color: color,
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
        className="card-hint"
      >
        CLICK TO EXPAND →
      </div>
    </motion.div>
  );
};

// Project Modal
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const color = project.color || '#00d4ff';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0a0f1e',
          border: `1px solid ${color}40`,
          borderRadius: 20,
          padding: 40,
          maxWidth: 700,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: `0 0 60px ${color}15, 0 40px 80px rgba(0,0,0,0.8)`,
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="interactive"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#94a3b8',
            width: 36,
            height: 36,
            borderRadius: '50%',
            cursor: 'none',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Category + Status */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <span
            className="font-mono"
            style={{
              padding: '4px 12px',
              borderRadius: 4,
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color,
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
            }}
          >
            {project.category}
          </span>
          <span
            className="font-mono"
            style={{
              padding: '4px 12px',
              borderRadius: 4,
              background: `${statusColors[project.status]}15`,
              border: `1px solid ${statusColors[project.status]}30`,
              color: statusColors[project.status],
              fontSize: '0.65rem',
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-display"
          style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h2>
        <p style={{ color, fontFamily: "'Rajdhani', sans-serif", fontSize: '1rem', marginBottom: 24 }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: '#94a3b8',
            lineHeight: 1.8,
            fontSize: '0.95rem',
            marginBottom: 32,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ marginBottom: 32 }}>
          <div
            className="font-mono"
            style={{ color: '#475569', fontSize: '0.65rem', marginBottom: 12, letterSpacing: '0.2em' }}
          >
            // TECH STACK
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  background: `${color}10`,
                  border: `1px solid ${color}25`,
                  color: '#e2e8f0',
                  fontSize: '0.8rem',
                  fontFamily: "'Share Tech Mono', monospace",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 16 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn interactive"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              ⌥ View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn neon-btn-purple interactive"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              ◈ Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="section-container"
        style={{ padding: '120px 24px', position: 'relative' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 48 }}
          >
            <div className="section-tag">// PROJECTS</div>
            <h2 className="section-title">What I've Built</h2>
            <div className="section-line" />
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="interactive"
                style={{
                  padding: '8px 20px',
                  border: `1px solid ${filter === cat ? '#00d4ff' : 'rgba(0,212,255,0.15)'}`,
                  borderRadius: 6,
                  background: filter === cat ? 'rgba(0,212,255,0.1)' : 'transparent',
                  color: filter === cat ? '#00d4ff' : '#475569',
                  fontFamily: "'Orbitron', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  cursor: 'none',
                  transition: 'all 0.3s',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
