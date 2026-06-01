import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const username = 'Manassss';

// ── Shimmer while image loads ────────────────────────────────────────────
const Shimmer = ({ height = 180 }) => (
  <Box sx={{
    width: '100%', height, borderRadius: 2,
    bgcolor: 'rgba(255,255,255,0.03)',
    position: 'relative', overflow: 'hidden',
    '&::after': {
      content: '""', position: 'absolute', inset: 0,
      background: 'linear-gradient(90deg, transparent 0%, rgba(155,72,134,0.07) 50%, transparent 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.6s infinite',
    },
  }} />
);

// ── Lazy image with shimmer + error fallback ─────────────────────────────
const LazyImg = ({ src, alt, height = 180, fallbackLabel }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <FaGithub size={30} color="#333" />
        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 1 }}>
          {fallbackLabel}
        </Typography>
        <Button size="small" href={`https://github.com/${username}`} target="_blank"
          sx={{ color: 'primary.light', textTransform: 'none', mt: 0.5, fontSize: '0.72rem' }}>
          View on GitHub
        </Button>
      </Box>
    );
  }

  return (
    <>
      {!loaded && <Shimmer height={height} />}
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(false); setFailed(true); }}
        sx={{ width: '100%', height: 'auto', borderRadius: 1, display: loaded ? 'block' : 'none' }}
      />
    </>
  );
};

// ── Stat highlight pill ──────────────────────────────────────────────────
const StatPill = ({ icon, label, value }) => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    px: 2.5, py: 1.5,
    borderRadius: 2,
    bgcolor: 'rgba(155,72,134,0.08)',
    border: '1px solid rgba(155,72,134,0.2)',
    minWidth: 90,
  }}>
    <Box sx={{ fontSize: 18, color: 'primary.light', mb: 0.5 }}>{icon}</Box>
    <Typography sx={{ fontWeight: 800, fontSize: '1.3rem', color: 'text.primary', fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}>
      {value}
    </Typography>
    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', mt: 0.3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
      {label}
    </Typography>
  </Box>
);

const GitHubStats = () => (
  <Box
    component="section"
    id="github"
    sx={{ scrollSnapAlign: 'start', scrollMarginTop: 64, bgcolor: '#06060f', py: { xs: 8, sm: 14 } }}
  >
    <Container maxWidth="lg">
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" align="center" sx={{
          fontWeight: 700, mb: 1,
          background: 'linear-gradient(90deg, #9b4886, #c08497)',
          WebkitBackgroundClip: 'text', color: 'transparent',
        }}>
          GitHub Activity
        </Typography>
        <Typography align="center" variant="body2" sx={{ color: 'text.secondary', mb: 7 }}>
          Consistent shipping across personal and professional projects
        </Typography>
      </motion.div>

      <Grid container spacing={3} alignItems="stretch">

        {/* ── Left: Contribution heatmap (full height) ── */}
        <Grid item xs={12} md={7} sx={{ display: 'flex' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ width: '100%' }}>
            <Box sx={{
              height: '100%', p: 3, borderRadius: 3,
              bgcolor: 'background.paper',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', flexDirection: 'column',
            }}>
              <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.65rem', mb: 2, display: 'block' }}>
                Contribution Graph
              </Typography>
              <LazyImg
                src={`https://ghchart.rshah.org/9b4886/${username}`}
                alt="GitHub contribution graph"
                height={130}
                fallbackLabel="Contribution graph"
              />
              <Box sx={{ display: 'flex', gap: 2, mt: 2.5, flexWrap: 'wrap' }}>
                <StatPill icon={<FaStar />}        label="Public Repos"  value="15+"  />
                <StatPill icon={<FaCodeBranch />}  label="Contributions" value="160+" />
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* ── Right: Streak stats ── */}
        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ width: '100%' }}>
            <Box sx={{
              height: '100%', p: 3, borderRadius: 3,
              bgcolor: 'background.paper',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.65rem', mb: 2, display: 'block' }}>
                Streak Stats
              </Typography>
              <LazyImg
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0e0e1c&ring=9b4886&fire=c08497&currStreakLabel=c08497&stroke=0e0e1c`}
                alt="GitHub streak stats"
                height={160}
                fallbackLabel="Streak stats"
              />
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  href={`https://github.com/${username}`}
                  target="_blank"
                  startIcon={<FaGithub />}
                  endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                  sx={{
                    mt: 2.5,
                    borderColor: 'rgba(155,72,134,0.35)',
                    color: 'primary.light',
                    '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(155,72,134,0.08)' },
                  }}
                >
                  View GitHub Profile
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

      </Grid>
    </Container>
  </Box>
);

export default GitHubStats;
