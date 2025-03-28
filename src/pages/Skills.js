import React, { forwardRef } from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare,
  FaDatabase, FaGitAlt, FaGithub, FaDocker, FaAws, FaCloud
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiFirebase, SiKubernetes, SiGraphql, SiNextdotjs
} from 'react-icons/si';

import {
  Grid,
  Paper,
  Typography,
  Tooltip,
  Zoom,
} from '@mui/material';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: '💻 Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'TypeScript', icon: <FaJsSquare style={{ color: '#3178c6' }} /> },
      { name: 'C++', icon: <FaJava style={{ color: '#00a6d6' }} /> },
    ],
  },
  {
    title: '🌐 Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: '⚙️ Backend & Databases',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ],
  },
  {
    title: '☁️ Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'GCP', icon: <FaCloud /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
    ],
  },
  {
    title: '🔧 Tools & Version Control',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
    ],
  },
];

const Skills = forwardRef((props, ref) => (
  <section
    id="skel"
    ref={ref}
    style={{
      background: 'linear-gradient(355deg, #9b4886, #f8f4ec)',
      padding: '80px 20px',
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    {/* Animated section heading */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 600, mb: 5, color: 'black' }}
      >
        🛠 My Tech Stack
      </Typography>
    </motion.div>

    <Grid container spacing={4} justifyContent="center" maxWidth="lg" sx={{ margin: '0 auto' }}>
      {skillCategories.map((category, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          {/* Animate each card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={4}
              sx={{
                padding: 3,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #fff4f2, #fce8eb)',
                color: '#333',
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#9b4886' }}>
                {category.title}
              </Typography>

              <Grid container spacing={2}>
                {category.skills.map((skill, i) => (
                  <Grid
                    item
                    xs={4}
                    key={i}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Zoom in>
                        <Tooltip title={skill.name} placement="top">
                          <div style={{ fontSize: '2rem', color: '#9b4886' }}>
                            {skill.icon}
                          </div>
                        </Tooltip>
                      </Zoom>
                    </motion.div>

                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, textAlign: 'center', color: '#444' }}
                    >
                      {skill.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </section>
));

export default Skills;
