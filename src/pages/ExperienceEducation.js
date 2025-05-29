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
import { Divider } from '@mui/material';

const customTimeline = [
  {
    type: 'Education',
    date: 'Sept 2023 - May 2025',
    title: 'M.S. in Computer Science',
    place: 'Pace University, NY, USA',
    icon: <FaGraduationCap />,
    detail: 'GPA: 3.90 | Focus: Software Engineering, AI, Full Stack Development',
  },
  {
    type: 'Experience',
    date: 'Sep 2024 – May 2025',
    title: 'Full Stack Developer Intern',
    company: '99 Yards, New York City, NY',
    icon: <FaBriefcase />,
    bullets: [
      'Spearheaded end-to-end development of a full-stack onboarding platform using React.js, Spring Boot, and MongoDB, automating 70% of manual client intake processes.',
      'Built and deployed a Python-based data scraper that accelerated data population during login, boosting operational efficiency by 40%.',
      'Authored and integrated Swagger/OpenAPI docs into CI/CD workflows, reducing integration errors by 30% and enhancing QA coverage.',
      'Collaborated with UX designers to refine onboarding flows, improving user satisfaction scores by 25%.'
    ],
  },
  {
    type: 'Experience',
    date: 'Sep 2022 – Jun 2023',
    title: 'Software Engineer',
    company: 'Cybage Software Pvt Ltd, Pune, India',
    icon: <FaBriefcase />,
    bullets: [
      'Engineered high-performance web apps using Angular and TypeScript, achieving a 35% improvement in page speed and cross-platform accessibility.',
      'Reduced bug frequency by 45% by designing a scalable state management architecture with Redux and Context API.',
      'Acted as sprint lead in Agile workflows, mentoring junior developers and running code reviews to increase team velocity by 30%.',
      'Implemented automated end-to-end testing with Cypress, cutting regression defects by 50%.'
    ],
  },
  {
    type: 'Education',
    date: 'Aug 2018 – May 2022',
    title: 'B.E. in Computer Engineering',
    place: 'AISSMS IOIT, Pune, India',
    icon: <FaGraduationCap />,
    detail: 'GPA: 3.33 | Focus: Software Engineering, Full Stack Development',
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
        bgcolor: 'common.black',
        py: { xs: 6, sm: 10 },
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
            fontFamily: "'Playfair Display', serif",
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
                      p: 4,
                      borderRadius: 4,
                      bgcolor: 'grey.100',
                      boxShadow: 1,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
                      },
                      maxWidth: 380,
                      width: '100%',
                      mx: 'auto',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontWeight: 'bold', color: 'primary.main' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'grey.600' }}>
                      {item.place || item.company}
                    </Typography>
                    {item.detail && (
                      <Typography variant="body2" sx={{ mb: 1, color: '#555', textAlign: 'justify', fontFamily: "'Inter', sans-serif" }}>
                        {item.detail}
                      </Typography>
                    )}
                    {item.bullets && (
                      <List dense disablePadding>
                        {item.bullets.map((point, i) => (
                          <ListItem key={i} sx={{ py: 0.5, pl: 2 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <FaBriefcase color="grey" size={14} />
                            </ListItemIcon>
                            <ListItemText primary={point} primaryTypographyProps={{ variant: 'body2', color: 'grey.700' }} />
                          </ListItem>
                        ))}
                      </List>
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
