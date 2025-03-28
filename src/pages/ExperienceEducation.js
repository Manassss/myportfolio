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
import { Typography, Paper } from '@mui/material';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'Experience',
    date: 'Jan 2025 – Present',
    title: 'Full Stack Developer Intern',
    company: '99 Yards, New York City, NY',
    icon: <FaBriefcase />,
    bullets: [
      'Engineered a responsive admin dashboard with Firebase API to streamline client approvals and reduce manual workflows by 40%.',
      'Created a Python script to auto-scrape About, Services, and Contact info from client websites — cutting onboarding time by 30%.',
      'Improved site speed by 25% and pushed performance-based updates regularly to ensure optimal user experience.',
      'Tested iOS mobile app across devices and resolved 15+ UI/UX issues, boosting cross-platform performance by 20%.',
    ],
  },
  {
    date: 'Sep 2023 – Dec 2024',
    title: 'Full Stack Developer Intern (Phase 1)',
    company: '99 Yards, New York City, NY',
    icon: <FaBriefcase />,
    bullets: ['Built and scaled internal tools and real-time dashboards for business insights.'],
  },
  {
    date: 'Sep 2022 – Jun 2023',
    title: 'Software Engineer',
    company: 'Cybage Software, Pune, India',
    icon: <FaBriefcase />,
    bullets: [
      'Delivered 10+ front-end features under strict timelines, maintaining a 100% on-time deployment rate.',
      'Resolved 30% of critical UI bugs by improving troubleshooting workflows and preemptive debugging.',
      'Led UI redesign efforts, improving mobile responsiveness and increasing user retention by 15%.',
    ],
  },
];

const education = [
  {
    type: 'Education',
    date: 'May 2025',
    title: 'M.S. in Computer Science',
    place: 'Pace University, NY, USA',
    icon: <FaGraduationCap />,
    detail: 'GPA: 3.95 | Focus: Software Engineering, AI, Full Stack Development',
  },
  {
    date: 'May 2022',
    title: 'B.E. in Computer Engineering',
    place: 'AISSMS IOIT, Pune, India',
    icon: <FaGraduationCap />,
    detail: 'GPA: 3.33',
  },
];

const ExperienceEducation = () => {
  const combined = [...education.reverse(), ...experiences.reverse()];

  return (
    <section
      id="experience"
      style={{
        background: 'linear-gradient(190deg, #9b4886, #f8f4ec)',
        padding: '80px 20px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Section Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 5, color: 'black', fontWeight: 600 }}
        >
          📌 My Journey
        </Typography>
      </motion.div>

      <Timeline position="alternate">
        {combined.map((item, idx) => (
          <TimelineItem
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color={item.type === 'Education' ? 'secondary' : 'primary'}>
                {item.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #fff4f2, #fce8eb)',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: 'bold', color: '#9b4886' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: '#444' }}>
                    {item.place || item.company}
                  </Typography>
                  {item.detail && (
                    <Typography variant="body2" sx={{ mb: 1, color: '#555' }}>
                      {item.detail}
                    </Typography>
                  )}
                  {item.bullets && (
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {item.bullets.map((point, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: '0.95rem',
                            marginBottom: '8px',
                            color: '#555',
                          }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default ExperienceEducation;
