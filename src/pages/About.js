import React, { forwardRef } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { FaGamepad, FaMusic, FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiSitepoint } from "react-icons/si";

const About = forwardRef((props, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: 'linear-gradient(355deg, #9b4886, #f8f4ec)',
        padding: '80px 20px',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden',
      }}
    >
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
          ✨ Get to Know Me
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ margin: '0 auto', maxWidth: '1200px' }}
      >
        {aboutSections.map((section, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ width: '100%' }}
            >
              <Paper sx={styles.card} elevation={4}>
                <Typography variant="h5" sx={styles.title}>
                  {section.title}
                </Typography>
                {section.content.map((text, idx) =>
                  typeof text === 'string' ? (
                    <Typography key={idx} sx={styles.text}>
                      {text}
                    </Typography>
                  ) : (
                    <ul key={idx} style={styles.list}>
                      {text.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ marginRight: '6px' }}>{item.icon}</span> {item.text}
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
});

const aboutSections = [
  {
    title: ' Who I Am',
    content: [
      `I’m Manas, a full-stack developer passionate about building scalable digital products. I specialize in frontend finesse using React and robust backend logic using Node.js, Firebase, and MongoDB.`,
      `I believe software is the ultimate expression of creativity and problem-solving.`,
      `I’ve led CVine and PaceX — platforms pushing the boundaries of AI and community-driven solutions.`,
    ],
  },
  {
    title: ' What Drives Me',
    content: [
      `I'm always eager to solve problems, grow fast, and build amazing things with passionate people.`,
      [
        { icon: <SiSitepoint />, text: 'Leading teams and bringing ideas to life' },
        { icon: <SiSitepoint />, text: 'Designing systems that scale' },
        { icon: <SiSitepoint />, text: 'Exploring AI, cloud, and mobile tech' },
      ],
      `I aim to blend logic and design to build usable, scalable, and delightful software.`,
    ],
  },
  {
    title: ' Beyond the Code',
    content: [
      `I explore cultures, tech meetups, and sonic landscapes that shape how I code and think.`,
      [
        { icon: <FaGamepad />, text: 'Strategy/RPG gamer — love narrative-driven worlds' },
        { icon: <FaMusic />, text: 'Music fuels my flow — lo-fi, EDM, ambient' },
        { icon: <FaPlane />, text: 'Travel inspires perspective & creativity' },
      ],
      `I'm always testing out side projects — tools, hacks, and fun experiments.`,
    ],
  },
];

const styles = {
  card: {
    p: 3,
    width: '100%',
    maxWidth: 360,
    minHeight: 400,
    borderRadius: 4,
    background: 'linear-gradient(135deg, #fff4f2, #fce8eb)',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    },
  },
  title: {
    fontWeight: 600,
    fontSize: '1.4rem',
    color: '#9b4886',
    mb: 2,
  },
  text: {
    fontSize: '1rem',
    lineHeight: 1.7,
    mb: 2,
    color: '#444',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    marginBottom: '16px',
    color: '#444',
    fontSize: '0.95rem',
    lineHeight: '1.8rem',
  },
};

export default About;
