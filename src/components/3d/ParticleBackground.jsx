import { useEffect, useRef } from 'react';

/**
 * ParticleBackground — elegant canvas-based background
 * Features: subtle grid, drifting code fragments, soft radial glow
 * No 3D library needed — pure canvas for a hand-crafted feel
 */

const CODE_CHARS = ['0', '1', '{', '}', '<', '>', '/', ';', '()', '=>', '[]', '&&', '||', '++', 'fn', 'var', 'const', 'let'];

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // ── Code fragment particles ──────────────────────────────────────
    const fragments = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      text: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
      opacity: Math.random() * 0.18 + 0.04,
      speed: Math.random() * 0.18 + 0.06,
      size: Math.floor(Math.random() * 5) + 9,
      drift: (Math.random() - 0.5) * 0.3,
    }));

    // ── Soft glowing dots ────────────────────────────────────────────
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.25 + 0.05,
      speedY: Math.random() * 0.12 + 0.04,
      speedX: (Math.random() - 0.5) * 0.08,
    }));

    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // ── 1. Subtle dot-grid ───────────────────────────────────────
      const gridSize = 72;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.055)';
      for (let gx = 0; gx < width; gx += gridSize) {
        for (let gy = 0; gy < height; gy += gridSize) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── 2. Radial centre glow ────────────────────────────────────
      const grd = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.55);
      grd.addColorStop(0, 'rgba(59,130,246,0.045)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // ── 3. Drifting code fragments ───────────────────────────────
      fragments.forEach((f) => {
        ctx.font = `${f.size}px 'Share Tech Mono', monospace`;
        ctx.fillStyle = `rgba(0, 212, 255, ${f.opacity})`;
        ctx.fillText(f.text, f.x, f.y);
        f.y -= f.speed;
        f.x += f.drift;
        if (f.y < -20) {
          f.y = height + 10;
          f.x = Math.random() * width;
          f.text = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
          f.opacity = Math.random() * 0.18 + 0.04;
        }
        if (f.x < -30 || f.x > width + 30) f.drift *= -1;
      });

      // ── 4. Soft floating dots ────────────────────────────────────
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${d.opacity})`;
        ctx.fill();
        d.y -= d.speedY;
        d.x += d.speedX;
        if (d.y < -5) { d.y = height + 5; d.x = Math.random() * width; }
        if (d.x < -5 || d.x > width + 5) d.speedX *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
};

export default ParticleBackground;
