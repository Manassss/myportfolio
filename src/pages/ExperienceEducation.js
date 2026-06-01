import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Paper, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';

const customTimeline = [
  {
    type: 'Education',
    date: 'Sept 2023 – May 2025',
    title: 'M.S. in Computer Science',
    place: 'Pace University, NY, USA',
    icon: <FaGraduationCap />,
    detail: 'GPA: 3.89 | Focus: Software Engineering, AI, Full Stack Development',
    skills: ['Software Engineering', 'AI', 'Full Stack Development'],
  },
  {
    type: 'Experience',
    date: 'Feb 2026 – Present',
    title: 'Junior ML Engineer',
    company: 'Pylon Management, New York City, NY',
    icon: <FaBriefcase />,
    bullets: [
      'Delivered an AI-driven inventory forecasting system using time-series and regression models, cutting overstock-related carrying costs by ~20% and eliminating 3+ hours/day of manual demand review.',
      'Shipped end-to-end ML pipelines (data ingestion, feature engineering, model training, and REST API inference), reducing model deployment cycle time from weeks to under 2 days.',
      'Surfaced predictive reorder signals directly in the procurement backend, replacing spreadsheet-driven decisions and enabling real-time, data-driven restocking across 5+ product categories.',
    ],
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Time-Series Forecasting', 'REST APIs', 'Feature Engineering'],
  },
  {
    type: 'Experience',
    date: 'Sep 2024 – Feb 2026',
    title: 'Full Stack Developer',
    company: '99 Yards, New York City, NY',
    icon: <FaBriefcase />,
    bullets: [
      'Replaced a fully manual ops workflow by engineering a React + Spring Boot + Firebase admin dashboard, giving the team real-time visibility and saving ~15 hours/week of reporting effort.',
      'Slashed data pipeline latency by 40% by redesigning Python-based scraping workflows and REST integrations, increasing data freshness from daily batches to near-real-time feeds.',
      'Achieved a 75% reduction in page load times through frontend profiling, code-splitting, and database query optimization, directly improving cross-platform user retention.',
    ],
    skills: ['React.js', 'Spring Boot', 'Firebase', 'Node.js', 'MongoDB', 'PostgreSQL', 'Python'],
  },
  {
    type: 'Experience',
    date: 'Sep 2022 – Jun 2023',
    title: 'Software Engineer',
    company: 'Cybage Software Pvt Ltd, Pune, India',
    icon: <FaBriefcase />,
    bullets: [
      'Engineered high-performance web apps using Angular and TypeScript across 3 production deployments serving 10,000+ users, achieving a 35% improvement in page speed and cross-platform accessibility.',
      'Reduced bug frequency by 45% by designing a scalable state management architecture with Redux and Context API.',
      'Acted as sprint lead in Agile workflows, mentoring a team of 4 junior developers and running code reviews to increase team velocity by 30%.',
      'Implemented automated end-to-end testing with Cypress, cutting regression defects by 50%.'
    ],
    skills: ['Angular', 'TypeScript', 'Redux', 'Context API', 'Cypress', 'Agile'],
  },
  {
    type: 'Education',
    date: 'Aug 2018 – May 2022',
    title: 'B.E. in Computer Engineering',
    place: 'AISSMS IOIT, Pune, India',
    icon: <FaGraduationCap />,
    detail: 'GPA: 3.33 | Focus: Software Engineering, Full Stack Development',
    skills: ['Software Engineering', 'Full Stack Development'],
  },
];

const ExperienceEducation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        scrollSnapAlign: 'start',
        scrollMarginTop: 64,
        bgcolor: '#06060f',
        py: { xs: 8, sm: 14 },
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 2,
          background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        }}
      />
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 4, md: 6 },
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: 1.2,
            background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          The Journey
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <Timeline position={isMobile ? 'right' : 'alternate'}>
          {customTimeline.map((item, idx) => (
            <TimelineItem
              key={idx}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              sx={idx === customTimeline.length - 1 ? { mb: { xs: 4, sm: 6 } } : {}}
            >
              <TimelineOppositeContent
                variant="subtitle2"
                sx={{
                  m: 'auto 0',
                  display: 'block',
                  textAlign: 'right',
                  color: 'grey.400',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  position: 'relative',
                  pr: 2,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 8,
                    height: 1,
                    bgcolor: 'grey.700',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '24px',
                    bgcolor: 'grey.700',
                  },
                }}
              >
                {item.date}
              </TimelineOppositeContent>

              <TimelineSeparator sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TimelineDot
                  sx={{
                    bgcolor: item.type === 'Education' ? 'secondary.main' : 'primary.main',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </TimelineDot>
                <TimelineConnector
                  sx={{ bgcolor: 'grey.700', width: 3, mx: 0 }}
                />
              </TimelineSeparator>

              <TimelineContent sx={{
                py: { xs: 2, sm: 3 },
                px: { xs: 2, sm: 3, md: 4 },
                mx: { sm: 0, md: 2 },
                position: 'relative',
                // connector to timeline on both sides
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  top: 'calc(50% - 1px)',
                  width: '8px',
                  height: '2px',
                  bgcolor: 'grey.700 !important',
                },
                '&::before': {
                  left: '-8px',
                },
                '&::after': {
                  right: '-8px',
                },
                '@media (max-width:600px)': {
                  '&::before, &::after': { display: 'none !important' },
                },
              }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  <Paper
                    elevation={4}
                    component={motion.div}
                    whileHover={{ scale: 1.02 }}
                    sx={{
                      p: 3.5,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: 'background.paper',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 16px 40px rgba(155,72,134,0.22)',
                        borderColor: 'rgba(155,72,134,0.5)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, rgba(155,72,134,0.7), transparent)',
                        borderRadius: '3px 3px 0 0',
                      },
                      maxWidth: 400,
                      width: '100%',
                      mx: 'auto',
                    }}
                  >
                    <Typography variant="h6" component="span" sx={{ fontWeight: 700, color: 'primary.light', fontFamily: "'Poppins', sans-serif" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'grey.400', fontWeight: 500 }}>
                      {item.place || item.company}
                    </Typography>
                    {item.detail && (
                      <Typography variant="body2" sx={{ mb: 1, color: 'grey.400', fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                        {item.detail}
                      </Typography>
                    )}
                    {item.bullets && (
                      <List dense disablePadding>
                        {item.bullets.map((point, i) => (
                          <ListItem key={i} sx={{ py: 0.4, pl: 0, alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ minWidth: 22, mt: 0.4 }}>
                              <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'primary.light', mt: 0.5 }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body2" sx={{ color: 'grey.300', lineHeight: 1.6 }}>{point}</Typography>} />
                          </ListItem>
                        ))}
                      </List>
                    )}
                    {item.skills && (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mt: 2 }}>
                        {item.skills.map((s, si) => (
                          <Box key={si} sx={{ px: 1.2, py: 0.3, borderRadius: '12px', border: '1px solid rgba(155,72,134,0.4)', fontSize: '0.68rem', color: 'primary.light', fontWeight: 500 }}>
                            {s}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Box>
  );
};

export default ExperienceEducation;
