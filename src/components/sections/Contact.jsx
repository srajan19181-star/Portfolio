import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

/**
 * Contact Section — futuristic terminal-style contact form
 */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1800);
  };

  const socialLinks = [
    { label: 'GitHub', url: personalInfo.github, color: '#e2e8f0', icon: '⌥', desc: '@srajan-umrao' },
    { label: 'LinkedIn', url: personalInfo.linkedin, color: '#00d4ff', icon: '◈', desc: 'srajan-umrao' },
    { label: 'Email', url: `mailto:${personalInfo.email}`, color: '#7c3aed', icon: '◉', desc: personalInfo.email },
    { label: 'Phone', url: `tel:${personalInfo.phone}`, color: '#00ff88', icon: '◎', desc: personalInfo.phone },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-container"
      style={{ padding: '120px 24px', position: 'relative' }}
    >
      {/* BG glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: 600,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
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
          style={{ marginBottom: 72, textAlign: 'center' }}
        >
          <div className="section-tag" style={{ textAlign: 'center' }}>// CONTACT</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Let's Connect</h2>
          <div className="section-line" style={{ margin: '0 auto' }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#64748b',
              marginTop: 16,
              fontSize: '0.95rem',
            }}
          >
            Open to internships, collaborations, and cool projects.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
          }}
        >
          {/* Left — Terminal form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="glass-card"
              style={{ padding: 0, overflow: 'hidden' }}
            >
              {/* Terminal title bar */}
              <div
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  borderBottom: '1px solid rgba(0,212,255,0.1)',
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff0080' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00ff88' }} />
                <span
                  className="font-mono"
                  style={{ color: '#475569', fontSize: '0.65rem', marginLeft: 8, letterSpacing: '0.15em' }}
                >
                  MESSAGE.TERMINAL
                </span>
              </div>

              <div style={{ padding: 32 }}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '32px 0' }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                    <div
                      className="font-mono"
                      style={{ color: '#00ff88', fontSize: '0.85rem', marginBottom: 8 }}
                    >
                      MESSAGE TRANSMITTED
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: '#64748b',
                        fontSize: '0.85rem',
                      }}
                    >
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {[
                      { label: 'SENDER_NAME', name: 'name', type: 'text', placeholder: 'Your name' },
                      { label: 'SENDER_EMAIL', name: 'email', type: 'email', placeholder: 'your@email.com' },
                    ].map((field) => (
                      <div key={field.name} style={{ marginBottom: 24 }}>
                        <label
                          className="font-mono"
                          style={{
                            display: 'block',
                            color: '#00d4ff',
                            fontSize: '0.65rem',
                            marginBottom: 8,
                            letterSpacing: '0.2em',
                          }}
                        >
                          {'>'} {field.label}:
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          style={{
                            width: '100%',
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: 6,
                            padding: '12px 16px',
                            color: '#e2e8f0',
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '0.85rem',
                            outline: 'none',
                            transition: 'border-color 0.3s',
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = 'rgba(0,212,255,0.6)')
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = 'rgba(0,212,255,0.2)')
                          }
                        />
                      </div>
                    ))}

                    <div style={{ marginBottom: 28 }}>
                      <label
                        className="font-mono"
                        style={{
                          display: 'block',
                          color: '#00d4ff',
                          fontSize: '0.65rem',
                          marginBottom: 8,
                          letterSpacing: '0.2em',
                        }}
                      >
                        {'>'} MESSAGE_BODY:
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        required
                        rows={5}
                        style={{
                          width: '100%',
                          background: 'rgba(0,0,0,0.3)',
                          border: '1px solid rgba(0,212,255,0.2)',
                          borderRadius: 6,
                          padding: '12px 16px',
                          color: '#e2e8f0',
                          fontFamily: "'Share Tech Mono', monospace",
                          fontSize: '0.85rem',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'border-color 0.3s',
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = 'rgba(0,212,255,0.6)')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = 'rgba(0,212,255,0.2)')
                        }
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="neon-btn interactive"
                      disabled={sending}
                      whileTap={{ scale: 0.97 }}
                      style={{ width: '100%', fontSize: '0.8rem' }}
                    >
                      {sending ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{ display: 'inline-block' }}
                          >
                            ◌
                          </motion.span>
                          TRANSMITTING...
                        </span>
                      ) : (
                        '⌁ SEND MESSAGE'
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right — Social links + info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div
              className="font-mono"
              style={{ color: '#475569', fontSize: '0.65rem', letterSpacing: '0.3em', marginBottom: 8 }}
            >
              // DIRECT CHANNELS
            </div>

            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('mailto') || social.url.startsWith('tel') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass-card glass-card-hover interactive"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  textDecoration: 'none',
                  cursor: 'none',
                }}
                whileHover={{ x: 4 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: `${social.color}15`,
                    border: `1px solid ${social.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: social.color,
                    flexShrink: 0,
                  }}
                >
                  {social.icon}
                </div>
                <div>
                  <div
                    className="font-display"
                    style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    {social.label}
                  </div>
                  <div
                    className="font-mono"
                    style={{ color: social.color, fontSize: '0.7rem', marginTop: 2 }}
                  >
                    {social.desc}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#334155', fontSize: '0.8rem' }}>→</div>
              </motion.a>
            ))}

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="glass-card"
              style={{
                padding: '20px 24px',
                marginTop: 8,
                borderLeft: '3px solid #00ff88',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#00ff88',
                  boxShadow: '0 0 12px #00ff88',
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  className="font-display"
                  style={{ color: '#00ff88', fontSize: '0.85rem', fontWeight: 600 }}
                >
                  Available for Internship
                </div>
                <div
                  className="font-mono"
                  style={{ color: '#475569', fontSize: '0.65rem', marginTop: 4 }}
                >
                  MERN / Backend / Full-Stack Roles
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
