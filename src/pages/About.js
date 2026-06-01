import React, { forwardRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiScikitlearn } from 'react-icons/si';

const cards = [
  {
    phase:  'Frontend Engineering',
    title:  'High-Performance UIs',
    icon:   <FaReact />,
    color:  '#61DAFB',
    stats:  [{ val: '75%', desc: 'page load reduction' }, { val: '35%', desc: 'Lighthouse improvement' }],
    bullets: [
      'React, Next.js, Angular — cross-platform apps serving thousands of users',
      'Code-splitting, profiling, and lazy-loading to hit sub-second load targets',
    ],
    span: 1,
  },
  {
    phase:  'Backend & Systems',
    title:  'Scalable APIs & Services',
    icon:   <FaNodeJs />,
    color:  '#339933',
    stats:  [{ val: '45%', desc: 'API response cut' }, { val: 'SSE', desc: 'real-time streaming' }],
    bullets: [
      'Node.js, Express, Spring Boot — REST APIs with JWT auth and real-time data',
      'Compound indexes and query profiling that halved latency under concurrent load',
    ],
    span: 1,
  },
  {
    phase:  'AI / ML Engineering',
    title:  'Production ML Pipelines',
    icon:   <SiScikitlearn />,
    color:  '#F7931E',
    stats:  [{ val: '~20%', desc: 'overstock cost cut' }, { val: '<2 days', desc: 'deploy cycle' }],
    bullets: [
      'Time-series and regression models for inventory forecasting at Pylon Management',
      'End-to-end pipelines: ingestion, feature engineering, training, REST inference',
    ],
    span: 1,
  },
  {
    phase:  'Real-Time Platforms',
    title:  'Live & Event-Driven Systems',
    icon:   <FaPython />,
    color:  '#9b4886',
    stats:  [{ val: '100+', desc: 'concurrent users' }, { val: '40%', desc: 'latency reduced' }],
    bullets: [
      'Socket.IO chat and Server-Sent Events for live financial portfolio streaming',
      'Python scraping pipelines shifted from daily batches to near-real-time feeds',
    ],
    span: 1,
  },
];

const BentoCard = ({ card, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay: index * 0.1 }}
    style={{ height: '100%', width: '100%' }}
  >
    <Box
      sx={{
        height: '100%',
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        bgcolor: 'background.paper',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s',
        '&:hover': {
          borderColor: `${card.color}55`,
          boxShadow:   `0 16px 48px ${card.color}18`,
          transform: 'translateY(-4px)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${card.color}88, transparent)`,
        },
      }}
    >
      {/* Icon */}
      <Box sx={{
        width: 52, height: 52, borderRadius: 2,
        bgcolor: `${card.color}14`,
        border:  `1px solid ${card.color}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 26, color: card.color,
        mb: 2.5,
        filter: `drop-shadow(0 0 8px ${card.color}55)`,
      }}>
        {card.icon}
      </Box>

      {/* Header */}
      <Typography variant="caption" sx={{ color: card.color, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.65rem', mb: 0.5, display: 'block' }}>
        {card.phase}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 2, lineHeight: 1.3, fontFamily: "'Poppins', sans-serif" }}>
        {card.title}
      </Typography>

      {/* Stat pills */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2.5, flexWrap: 'wrap' }}>
        {card.stats.map((s, si) => (
          <Box key={si} sx={{
            px: 1.5, py: 0.4, borderRadius: '20px',
            bgcolor: `${card.color}12`,
            border:  `1px solid ${card.color}30`,
          }}>
            <Typography sx={{ fontSize: '0.72rem', color: card.color, fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
              {s.val} <Typography component="span" sx={{ fontSize: '0.65rem', color: 'text.secondary', fontWeight: 400 }}>{s.desc}</Typography>
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Bullets */}
      <Box sx={{ flexGrow: 1 }}>
        {card.bullets.map((b, bi) => (
          <Box key={bi} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
            <Box sx={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', bgcolor: card.color, mt: '6px', opacity: 0.7 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.85rem' }}>
              {b}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </motion.div>
);

const About = forwardRef((props, ref) => (
  <Box
    component="section"
    id="about"
    ref={ref}
    sx={{
      scrollSnapAlign: 'start',
      scrollMarginTop: 64,
      bgcolor: '#04040c',
      py: { xs: 8, sm: 14 },
    }}
  >
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" align="center" sx={{
          fontWeight: 700, mb: 1,
          background: 'linear-gradient(90deg, #9b4886, #c08497)',
          WebkitBackgroundClip: 'text', color: 'transparent',
        }}>
          What I Build
        </Typography>
        <Typography align="center" variant="body2" sx={{ color: 'text.secondary', mb: 7 }}>
          End-to-end systems, from UI to ML pipeline
        </Typography>
      </motion.div>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 3,
      }}>
        {cards.map((card, i) => (
          <BentoCard key={i} card={card} index={i} />
        ))}
      </Box>
    </Container>
  </Box>
));

export default About;
