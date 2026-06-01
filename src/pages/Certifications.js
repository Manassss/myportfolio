import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const certs = [
  {
    title:  'Frontend Developer (React)',
    issuer: 'HackerRank',
    year:   '2024',
    icon:   <VerifiedIcon sx={{ fontSize: 22 }} />,
    color:  '#1ba94c',
    link:   'https://www.hackerrank.com/certificates/iframe/2e0e0c5e01ea',
  },
  {
    title:  'Software Engineer',
    issuer: 'HackerRank',
    year:   '2024',
    icon:   <VerifiedIcon sx={{ fontSize: 22 }} />,
    color:  '#1ba94c',
    link:   'https://www.hackerrank.com/certificates/iframe/b2e77ee8d62e',
  },
  {
    title:  'Angular (Intermediate)',
    issuer: 'HackerRank',
    year:   '2023',
    icon:   <VerifiedIcon sx={{ fontSize: 22 }} />,
    color:  '#1ba94c',
    link:   'https://www.hackerrank.com/certificates/iframe/b39f0dd18a72',
  },
  {
    title:  'Java (Basic)',
    issuer: 'HackerRank',
    year:   '2023',
    icon:   <VerifiedIcon sx={{ fontSize: 22 }} />,
    color:  '#1ba94c',
    link:   'https://www.hackerrank.com/certificates/iframe/3ba4a68e28bc',
  },
  {
    title:  'INSPIRE Program',
    issuer: 'Pace University',
    year:   '2024',
    icon:   <SchoolIcon sx={{ fontSize: 22 }} />,
    color:  '#9b4886',
    link:   null,
  },
];

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
    <Box
      component={cert.link ? 'a' : 'div'}
      href={cert.link || undefined}
      target={cert.link ? '_blank' : undefined}
      rel={cert.link ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2.5,
        borderRadius: 3,
        bgcolor: 'background.paper',
        border: '1px solid rgba(255,255,255,0.06)',
        textDecoration: 'none',
        cursor: cert.link ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        '&:hover': cert.link ? {
          borderColor: `${cert.color}55`,
          boxShadow:   `0 8px 28px ${cert.color}22`,
        } : {},
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: `linear-gradient(90deg, ${cert.color}66, transparent)`,
        },
      }}
    >
      {/* Badge icon */}
      <Box sx={{
        flexShrink: 0,
        width: 46, height: 46,
        borderRadius: 2,
        bgcolor: `${cert.color}14`,
        border:  `1px solid ${cert.color}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color:   cert.color,
        filter: `drop-shadow(0 0 6px ${cert.color}44)`,
      }}>
        {cert.icon}
      </Box>

      {/* Text */}
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Typography variant="body2" sx={{
          fontWeight: 700,
          color: 'text.primary',
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1.3,
          mb: 0.4,
          fontSize: '0.88rem',
        }}>
          {cert.title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.72rem' }}>
          {cert.issuer} · {cert.year}
        </Typography>
        {cert.link && (
          <Typography variant="caption" sx={{ color: cert.color, fontWeight: 600, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: 0.3, mt: 0.3 }}>
            View credential <OpenInNewIcon sx={{ fontSize: 10 }} />
          </Typography>
        )}
      </Box>
    </Box>
  </motion.div>
);

const Certifications = () => (
  <Box
    component="section"
    id="certifications"
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
          Certifications
        </Typography>
        <Typography align="center" variant="body2" sx={{ color: 'text.secondary', mb: 7 }}>
          Verified credentials and program completions
        </Typography>
      </motion.div>

      <Grid container spacing={2.5} justifyContent="center">
        {certs.map((cert, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CertCard cert={cert} index={i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Certifications;
