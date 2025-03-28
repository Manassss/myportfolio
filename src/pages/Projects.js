import React, { forwardRef } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import restImage from '../assests/rest.png';

const projects = [
  {
    title: 'Smart Restaurant UI',
    description:
      'A dynamic React-based restaurant UI with responsive layout, menu browsing, and animated user interactions. Focused on creating smooth UI/UX experiences with reusable components.',
    image: restImage,
    tech: ['React', 'Bootstrap', 'Framer Motion'],
    github: 'https://github.com/manassss/Restraunt_react',
    demo: 'https://manassss.github.io/Restraunt_react/',
  },
  {
    title: 'CVine',
    description:
      'CVine is a wine discovery platform that recommends wines using a hybrid machine learning model combining content-based and collaborative filtering. As team lead, I’m overseeing full-stack development (React + Flask + Firebase), model integration, and real-time querying.',
    tech: ['React', 'Flask', 'Firebase', 'Machine Learning'],
    inProgress: true,
  },
  {
    title: 'PaceX',
    description:
      'PaceX is a social marketplace tailored for student entrepreneurs. I’m leading the project architecture, backend design, and real-time features (chat, stories, notifications). Users can create posts, join communities, sell products, and network in real time.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    inProgress: true,
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: 'linear-gradient(185deg, #9b4886, #f8f4ec)',
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
          sx={{ fontWeight: 600, color: 'black', mb: 5 }}
        >
          🚀 My Projects
        </Typography>
      </motion.div>

      {/* Project Cards */}
      <Grid
        container
        justifyContent="center"
        sx={{
          flexWrap: 'wrap',
          rowGap: 4,
          columnGap: 4,
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: 330, // 🔧 Fixed width (adjustable)
              display: 'flex',
              
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Card
                elevation={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #fff4f2, #fce8eb)',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                {project.image && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                  />
                )}

                <CardContent
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600, color: '#9b4886' }}
                    >
                      {project.title}
                    </Typography>
                    {project.inProgress && (
                      <Chip
                        label="In Progress"
                        size="small"
                        sx={{
                          backgroundColor: '#e91e63',
                          color: '#fff',
                          fontSize: '0.7rem',
                          fontWeight: 'bold',
                        }}
                      />
                    )}
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {project.description}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                    {project.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: '#9b4886',
                          color: '#fff',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>

                  <Box display="flex" gap={1} mt="auto">
                    {project.github && (
                      <Tooltip title="View on GitHub">
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener"
                          sx={{ color: '#9b4886' }}
                        >
                          <FaGithub />
                        </IconButton>
                      </Tooltip>
                    )}
                    {project.demo && (
                      <Tooltip title="Live Demo">
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener"
                          sx={{ color: '#9b4886' }}
                        >
                          <FaExternalLinkAlt />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Grid>
    </section>
  );
});

export default Projects;
