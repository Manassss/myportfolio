import React, { forwardRef } from 'react';
import {
  Box,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Grid, Paper } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const About = forwardRef((props, ref) => {
  return (
    <Box
      component="section"
      id="about"
      ref={ref}
      sx={{
        scrollSnapAlign: 'start',
        scrollMarginTop: 64,
        bgcolor: 'common.black',
        py: { xs: 6, sm: 10 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          pt: 8,
          mb: 6,
          background: theme => `linear-gradient(90deg, #9b4886, #c08497)`,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        My Full-Stack Odyssey & Beyond
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        wrap="wrap"
        sx={{ maxWidth: 900, mx: 'auto' }}
      >
        {aboutSections.map((section, i) => (
          <Grid item xs={12} sm={6} key={i} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
                <Paper
                  elevation={4}
                  sx={{
                    p: 5,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: 400,
                    borderLeft: '2px solid',
                    mb: 4,
                    borderColor: 'primary.main',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
                    },
                  }}
                >
                <Box sx={{ fontSize: 48, color: theme => theme.palette.primary.main }}>
                  {section.icon}
                </Box>
                <Typography variant="subtitle2" sx={{ mt: 1, color: 'primary.main', fontWeight: 500, letterSpacing: '1px' }}>
                  {section.phase}
                </Typography>
                <Typography variant="h5" sx={{ my: 1, color: 'common.white', fontWeight: 600 }}>
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 2, textAlign: 'left' }}>
                  {section.bullets.map((bullet, idx) => (
                    <Box component="li" key={idx} sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 1 }}>
                      {bullet}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

const aboutSections = [
  {
    phase: '• Frontend Foundations',
    title: 'Crafting Pixel-Perfect UI',
    icon: <FaHtml5 />,
    color: 'error',
    bullets: [
      "Built responsive layouts with HTML5, CSS3, and modern frameworks like React and Tailwind.",
      "Focused on accessibility, performance, and intuitive interactions."
    ],
  },
  {
    phase: '• Backend & APIs',
    title: 'Engineered Robust Services',
    icon: <FaNodeJs />,
    color: 'secondary',
    bullets: [
      "Developed scalable REST & GraphQL APIs with Node.js, Flask, and FastAPI.",
      "Integrated databases (MongoDB, PostgreSQL) and optimized data flows."
    ],
  },
  {
    phase: '• Cloud & DevOps',
    title: 'Deploying at Scale',
    icon: <FaAws />,
    color: 'warning',
    bullets: [
      "Automated CI/CD pipelines and containerized apps using Docker & Kubernetes.",
      "Deployed on AWS, leveraging Lambda, S3, and RDS for reliability."
    ],
  },
  {
    phase: '• Design & UX',
    title: 'Shaping Engaging Experiences',
    icon: <SiFigma />,
    color: 'info',
    bullets: [
      "Prototyped in Figma and refined interactions through user feedback.",
      "Blended design principles with code to create cohesive brand experiences."
    ],
  },
];

export default About;
