import React, { useRef, useState, useEffect } from 'react';
import { motion as m, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container, Box, Avatar, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiScikitlearn } from 'react-icons/si';

import Header from '../components/Header';
import myImage from '../assests/profile.jpeg';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './ExperienceEducation';
import Blog from './Blog';
import About from './About';
import Footer from './footer';
import Contact from './Contact';
import Certifications from './Certifications';
import GitHubStats from './GitHubStats';

// ── Config ───────────────────────────────────────────────────────────────────
const roles = [
  'Full-Stack Engineer',
  'ML Engineer',
  'React Developer',
  'Backend Engineer',
  'AI/ML Builder',
];

const orbitIcons = [
  { icon: <FaReact />,      color: '#61DAFB', label: 'React' },
  { icon: <FaPython />,     color: '#3776AB', label: 'Python' },
  { icon: <SiTypescript />, color: '#3178C6', label: 'TypeScript' },
  { icon: <FaNodeJs />,     color: '#339933', label: 'Node.js' },
  { icon: <SiScikitlearn />,color: '#F7931E', label: 'Scikit-learn' },
  { icon: <SiMongodb />,    color: '#47A248', label: 'MongoDB' },
];

const metrics = [
  { raw: 3,    suffix: '+', label: 'Years Exp.',       decimal: false },
  { raw: 3.89, suffix: '',  label: 'GPA',              decimal: true  },
  { raw: 5,    suffix: '+', label: 'Production Apps',  decimal: false },
  { raw: 75,   suffix: '%', label: 'Faster Load Times',decimal: false },
  { raw: 40,   suffix: '%', label: 'Pipeline Latency', decimal: false },
];

// ── Animated count-up ─────────────────────────────────────────────────────
const AnimatedCounter = ({ metric }) => {
  const ref      = useRef(null);
  const hasRun   = useRef(false);
  const initVal  = metric.decimal ? '0.00' : '0';
  const [disp, setDisp] = useState(initVal);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true;
        const start = performance.now();
        const dur   = 1500;
        const tick  = (now) => {
          const t    = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          const cur  = ease * metric.raw;
          setDisp(metric.decimal ? cur.toFixed(2) : String(Math.round(cur)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.8 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [metric]);

  return <span ref={ref}>{disp}{metric.suffix}</span>;
};

// ── Home ──────────────────────────────────────────────────────────────────
const Home = () => {
  const theme = useTheme();

  // Role cycling
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  // Scroll
  const { scrollY, scrollYProgress } = useScroll();
  const circle1Y = useTransform(scrollY, [0, 400], [0, -80]);
  const circle2Y = useTransform(scrollY, [0, 400], [0,  80]);
  const scaleX   = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Box component="main" sx={{
      bgcolor: 'background.default',
      color: 'text.primary',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth',
    }}>

      {/* ── Scroll progress bar ── */}
      <m.div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        transformOrigin: '0%', scaleX, zIndex: 9999,
      }} />

      <Header />

      {/* ══════════════════════════ HERO ══════════════════════════════════ */}
      <Box id="home" sx={{
        scrollSnapAlign: 'start', scrollMarginTop: 64,
        minHeight: '100vh',
        pt: { xs: 14, sm: 18 },
        pb: { xs: 6,  sm: 10 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        {/* Ambient gradient blobs */}
        <m.div style={{ y: circle1Y, position: 'absolute', top: -160, right: -160, pointerEvents: 'none' }}>
          <Box sx={{ width: 500, height: 500, borderRadius: '50%', bgcolor: '#9b4886', opacity: 0.07, filter: 'blur(120px)' }} />
        </m.div>
        <m.div style={{ y: circle2Y, position: 'absolute', bottom: -160, left: -160, pointerEvents: 'none' }}>
          <Box sx={{ width: 500, height: 500, borderRadius: '50%', bgcolor: '#7c3aed', opacity: 0.07, filter: 'blur(120px)' }} />
        </m.div>
        {/* Dot-grid texture */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.035,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
            justifyContent: 'space-between',
          }}>

            {/* ── Left: text ── */}
            <Box sx={{ flex: 1, maxWidth: { md: 600 } }}>

              {/* Label */}
              <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Box sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1,
                  mb: 2, px: 1.5, py: 0.5,
                  borderRadius: '20px',
                  border: '1px solid rgba(155,72,134,0.4)',
                  bgcolor: 'rgba(155,72,134,0.08)',
                }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#22c55e', animation: 'otw-pulse 2s ease-in-out infinite' }} />
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', color: '#22c55e', textTransform: 'uppercase', fontFamily: "'Poppins', sans-serif" }}>
                    Open to Work
                  </Typography>
                </Box>
              </m.div>

              {/* Name */}
              <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                <Typography sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.6rem' },
                  lineHeight: 1.05,
                  mb: 1,
                  background: 'linear-gradient(135deg, #fff 20%, #c08497 60%, #9b4886 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  letterSpacing: '-1px',
                }}>
                  Hello,<br />I'm Manas.
                </Typography>
              </m.div>

              {/* Animated role */}
              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Box sx={{ position: 'relative', height: '2rem', mb: 2.5, overflow: 'hidden' }}>
                  {roles.map((role, i) => (
                    <Typography key={i} variant="h6" sx={{
                      position: 'absolute', left: 0, right: 0,
                      color: 'primary.light',
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      opacity:   i === roleIdx ? 1 : 0,
                      transform: i === roleIdx ? 'translateY(0)' : 'translateY(12px)',
                      pointerEvents: 'none',
                      textAlign: { xs: 'center', md: 'left' },
                    }}>
                      {role}
                    </Typography>
                  ))}
                </Box>
              </m.div>

              {/* Bio */}
              <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Typography variant="body1" sx={{
                  color: 'text.secondary', lineHeight: 1.85, mb: 2.5,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}>
                  Full-Stack &amp; ML Engineer with an M.S. in CS from Pace University (GPA 3.89). Building production ML pipelines at Pylon Management. Cut pipeline latency 40% and page load times 75% at 99 Yards. I ship across the full stack — React, Node.js, Python, Spring Boot, Firebase, Scikit-learn.
                </Typography>
              </m.div>

              {/* Currently Building */}
              <m.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <Box sx={{
                  display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 3,
                  p: 2, borderRadius: 2,
                  bgcolor: 'rgba(155,72,134,0.08)',
                  border: '1px solid rgba(155,72,134,0.25)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <Typography sx={{ fontSize: '1rem', mt: 0.1 }}>🔨</Typography>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.62rem', display: 'block', mb: 0.3 }}>
                      Currently Building
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      Real-time inventory forecasting API at Pylon Management, serving reorder signals across 25,000+ product SKUs.
                    </Typography>
                  </Box>
                </Box>
              </m.div>

              {/* CTAs */}
              <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Stack direction="row" flexWrap="wrap" gap={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  {[
                    { label: 'Resume',   icon: <DownloadIcon sx={{ fontSize: 17 }} />, href: `${process.env.PUBLIC_URL}/Manas_Mandlecha_Software_Engineer.pdf`, download: true,  variant: 'contained', sx: { bgcolor: '#9b4886', '&:hover': { bgcolor: '#7a3668' } } },
                    { label: 'LinkedIn', icon: <FaLinkedin size={15} />,               href: 'https://www.linkedin.com/in/manas-mandlecha', variant: 'contained', sx: { bgcolor: '#0A66C2', '&:hover': { bgcolor: '#004182' } } },
                    { label: 'GitHub',   icon: <FaGithub size={15} />,                 href: 'https://github.com/manassss',                variant: 'outlined',  sx: { borderColor: 'rgba(255,255,255,0.2)', color: '#e2e8f0', '&:hover': { borderColor: 'rgba(255,255,255,0.5)', bgcolor: 'rgba(255,255,255,0.04)' } } },
                    { label: 'Contact',  icon: <EmailIcon sx={{ fontSize: 17 }} />,    href: 'mailto:manas.mandlecha.career@gmail.com',     variant: 'outlined',  sx: { borderColor: 'rgba(155,72,134,0.5)', color: '#c08497', '&:hover': { bgcolor: 'rgba(155,72,134,0.08)', borderColor: '#9b4886' } } },
                  ].map((btn) => (
                    <m.div key={btn.label} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant={btn.variant}
                        startIcon={btn.icon}
                        href={btn.href}
                        target={btn.download ? undefined : '_blank'}
                        rel={btn.download ? undefined : 'noopener noreferrer'}
                        download={btn.download}
                        sx={{ px: 2.5, py: 0.9, fontSize: '0.85rem', ...btn.sx }}
                      >
                        {btn.label}
                      </Button>
                    </m.div>
                  ))}
                </Stack>

                {/* Location caption */}
                <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary', fontSize: '0.72rem', textAlign: { xs: 'center', md: 'left' } }}>
                  F-1 OPT · New York, NY · Full-time, Hybrid/Remote
                </Typography>
              </m.div>
            </Box>

            {/* ── Right: Avatar + orbit ── */}
            <m.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              style={{ flexShrink: 0 }}
            >
              <Box sx={{ position: 'relative', width: { xs: 220, md: 320 }, height: { xs: 220, md: 320 }, mx: 'auto' }}>

                {/* Orbiting icons — desktop only */}
                {orbitIcons.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      position: 'absolute',
                      top: '50%', left: '50%',
                      width: 40, height: 40,
                      marginTop: '-20px', marginLeft: '-20px',
                      alignItems: 'center', justifyContent: 'center',
                      borderRadius: '50%',
                      bgcolor: 'rgba(14,14,28,0.9)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(6px)',
                      fontSize: 18,
                      color: item.color,
                      animation: 'icon-orbit 14s linear infinite',
                      animationDelay: `${-(i * 14 / orbitIcons.length)}s`,
                      zIndex: 3,
                      filter: `drop-shadow(0 0 5px ${item.color}88)`,
                      boxShadow: `0 0 12px ${item.color}22`,
                    }}
                  >
                    {item.icon}
                  </Box>
                ))}

                {/* Spinning conic ring */}
                <Box sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 216, height: 216,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #9b4886 0deg, #c08497 90deg, transparent 180deg, transparent 360deg)',
                  animation: 'ring-rotate 5s linear infinite',
                  zIndex: 1,
                }} />

                {/* Ring inner mask */}
                <Box sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 208, height: 208,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                  zIndex: 2,
                }} />

                {/* Avatar */}
                <Box sx={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 3,
                }}>
                  <Avatar
                    alt="Manas Mandlecha"
                    src={myImage}
                    sx={{
                      width:  { xs: 200, md: 200 },
                      height: { xs: 200, md: 200 },
                      animation: 'pulse-glow 3.5s ease-in-out infinite',
                      border: '2px solid rgba(155,72,134,0.5)',
                    }}
                  />
                </Box>

                {/* Open to work badge */}
                <Box sx={{
                  position: 'absolute',
                  bottom: { xs: -52, md: 12 },
                  left:   '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 4,
                  display: 'flex', alignItems: 'center', gap: 0.8,
                  px: 2, py: 0.6,
                  borderRadius: '20px',
                  border: '1px solid rgba(34,197,94,0.4)',
                  bgcolor: 'rgba(34,197,94,0.07)',
                  backdropFilter: 'blur(8px)',
                  whiteSpace: 'nowrap',
                }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e', animation: 'otw-pulse 2s ease-in-out infinite' }} />
                  <Typography variant="caption" sx={{ color: '#22c55e', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.5px', fontFamily: "'Poppins', sans-serif" }}>
                    OPEN TO WORK
                  </Typography>
                </Box>
              </Box>
            </m.div>

          </Box>

          {/* Scroll indicator */}
          <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
            <m.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
              <Box sx={{
                width: 26, height: 42, borderRadius: '13px',
                border: '2px solid rgba(155,72,134,0.4)',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center', pt: '6px',
              }}>
                <Box sx={{ width: 3, height: 9, borderRadius: 2, bgcolor: 'primary.main', animation: 'scroll-dot 1.8s ease-in-out infinite' }} />
              </Box>
            </m.div>
          </m.div>
        </Container>
      </Box>

      {/* ══════════════════════════ METRICS STRIP ════════════════════════ */}
      <Box sx={{
        bgcolor: 'rgba(14,14,28,0.8)',
        borderTop:    '1px solid rgba(155,72,134,0.15)',
        borderBottom: '1px solid rgba(155,72,134,0.15)',
        py: 3,
        backdropFilter: 'blur(12px)',
      }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'auto',
          }}>
            {metrics.map((m, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <Box sx={{ width: '1px', height: 40, bgcolor: 'rgba(255,255,255,0.1)', flexShrink: 0, mx: { xs: 2, sm: 3 } }} />
                )}
                <Box sx={{ textAlign: 'center', minWidth: { xs: 70, sm: 90 }, flexShrink: 0 }}>
                <Typography sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.5rem', sm: '1.8rem' },
                  lineHeight: 1,
                  fontFamily: "'Poppins', sans-serif",
                  background: 'linear-gradient(135deg, #c08497, #9b4886)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}>
                  <AnimatedCounter metric={m} />
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', mt: 0.3 }}>
                  {m.label}
                </Typography>
              </Box>
              </React.Fragment>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ══════════════════════════ SECTIONS ════════════════════════════ */}
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><About /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><Experience /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><Projects /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><Skills /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><GitHubStats /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><Certifications /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><Blog /></Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}><Contact /></Box>
      <Footer />
    </Box>
  );
};

export default Home;
