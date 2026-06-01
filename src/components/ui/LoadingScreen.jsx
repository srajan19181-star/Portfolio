import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen — cinematic boot-up sequence before the portfolio loads
 */
const bootLines = [
  '> INITIALIZING NEURAL INTERFACE...',
  '> LOADING CORE SYSTEMS...',
  '> ESTABLISHING SECURE CONNECTION...',
  '> MOUNTING HOLOGRAPHIC DISPLAY...',
  '> CALIBRATING 3D ENVIRONMENT...',
  '> LOADING PORTFOLIO DATA...',
  '> SRAJAN UMRAO OS v2.0 — READY',
];

const LoadingScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let prog = 0;

    const addLine = () => {
      if (lineIndex < bootLines.length) {
        setLines((prev) => [...prev, bootLines[lineIndex]]);
        lineIndex++;
        prog = Math.round((lineIndex / bootLines.length) * 100);
        setProgress(prog);

        if (lineIndex < bootLines.length) {
          setTimeout(addLine, 300 + Math.random() * 200);
        } else {
          setTimeout(() => setDone(true), 600);
          setTimeout(() => onComplete(), 1400);
        }
      }
    };

    setTimeout(addLine, 400);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="loading-screen scanlines"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 cyber-grid opacity-30"
            style={{ backgroundSize: '40px 40px' }}
          />

          {/* Glowing center orb */}
          <div
            className="absolute"
            style={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-8">
            {/* Logo / Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <div
                className="font-display text-3xl font-bold glow-cyan mb-1"
                style={{ color: '#3b82f6', letterSpacing: '0.2em' }}
              >
                SRAJAN.SYS
              </div>
              <div
                className="font-mono text-xs"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.3em' }}
              >
                PORTFOLIO OPERATING SYSTEM
              </div>
            </motion.div>

            {/* Boot terminal */}
            <div
              className="w-full glass-card p-6 mb-8"
              style={{ minHeight: 220, fontFamily: "'Share Tech Mono', monospace" }}
            >
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm mb-1"
                  style={{
                    color: i === lines.length - 1 ? '#3b82f6' : 'var(--text-muted)',
                    fontSize: '0.75rem',
                  }}
                >
                  {line}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: '#3b82f6', fontSize: '0.75rem' }}
              >
                █
              </motion.span>
            </div>

            {/* Progress bar */}
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span
                  className="font-mono"
                  style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}
                >
                  BOOT SEQUENCE
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.65rem', color: '#3b82f6' }}
                >
                  {progress}%
                </span>
              </div>
              <div
                style={{
                  height: 2,
                  background: 'rgba(59, 130, 246,0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #3b82f6, #00d4ff)',
                    boxShadow: '0 0 10px #3b82f6',
                    borderRadius: 2,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
