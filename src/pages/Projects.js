import React, { forwardRef, useState } from 'react';
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
  Dialog,
  DialogContent,
  IconButton as MuiIconButton,
  Badge,
} from '@mui/material';
import { FaGithub, FaExternalLinkAlt, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import restImage from '../assests/rest.png';
import pacex1 from '../assests/pacex1.jpeg';
import pacex2 from '../assests/pacex2.jpeg';
import pacex3 from '../assests/pacex3.jpeg';
import pacex4 from '../assests/pacex4.jpeg';
import cvineImage from '../assests/CVine1.png';

const Projects = forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenGallery = (images) => {
    setModalImages(images);
    setCurrentImageIndex(0);
    setOpenModal(true);
  };

  const handleNext = () => {
    if (currentImageIndex < modalImages.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

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
      image: cvineImage, // ✅ add this line
    },    
    {
      title: 'PaceX',
      description:
        'PaceX is a social marketplace tailored for student entrepreneurs. I’m leading the project architecture, backend design, and real-time features (chat, stories, notifications). Users can create posts, join communities, sell products, and network in real time.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      inProgress: true,
      image: pacex1,
      gallery: [pacex1, pacex2, pacex3, pacex4],
      demo: 'https://pacedev.vercel.app',
      github: 'https://github.com/Manassss/PaceX',
      username: 'as44927n@pace.edu',
      password: '123sid',
    },
  ];

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
      {/* Title */}
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
           My Projects
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
          <Box key={index} sx={{ width: 350, display: 'flex' }}>
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
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                      onClick={() =>
                        project.gallery && handleOpenGallery(project.gallery)
                      }
                      sx={{
                        cursor: project.gallery ? 'pointer' : 'default',
                        borderRadius: '8px 8px 0 0',
                      }}
                    />
                    {project.gallery && (
                     <Box
                     onClick={() => handleOpenGallery(project.gallery)}
                     sx={{
                       position: 'absolute',
                       bottom: 8,
                       right: 8,
                       background: 'rgba(0,0,0,0.6)',
                       color: '#fff',
                       px: 1.5,
                       py: 0.5,
                       fontSize: '0.75rem',
                       borderRadius: '12px',
                       display: 'flex',
                       alignItems: 'center',
                       gap: 1,
                       cursor: 'pointer',
                       '&:hover': { background: 'rgba(0,0,0,0.8)' },
                     }}
                   >
                     <FaCamera size={14} />
                     View Gallery
                   </Box>
                   
                    )}
                  </Box>
                )}

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
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
                      <Tooltip title={project.demo}>
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
                  {project.username && project.password && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      <strong>Login:</strong> {project.username} &nbsp;
                      <strong>Pass:</strong> {project.password}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Grid>

      {/* Modal Image Viewer */}
      <Dialog
  open={openModal}
  onClose={() => setOpenModal(false)}
  fullScreen
  PaperProps={{
    sx: {
      backgroundColor: 'rgba(0,0,0,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }}
>
  {/* Close Button */}
  <MuiIconButton
    onClick={() => setOpenModal(false)}
    sx={{
      position: 'fixed',
      top: 20,
      right: 20,
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.3)',
      '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
      zIndex: 20,
    }}
  >
    <CloseIcon />
  </MuiIconButton>

  {/* Left Arrow */}
  <MuiIconButton
    onClick={handlePrev}
    disabled={currentImageIndex === 0}
    sx={{
      position: 'fixed',
      top: '50%',
      left: 10,
      transform: 'translateY(-50%)',
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.3)',
      '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
      zIndex: 10,
    }}
  >
    <ArrowBackIosIcon />
  </MuiIconButton>

  {/* Right Arrow */}
  <MuiIconButton
    onClick={handleNext}
    disabled={currentImageIndex === modalImages.length - 1}
    sx={{
      position: 'fixed',
      top: '50%',
      right: 10,
      transform: 'translateY(-50%)',
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.3)',
      '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
      zIndex: 10,
    }}
  >
    <ArrowForwardIosIcon />
  </MuiIconButton>

  {/* Image */}
  {modalImages.length > 0 && (
    <img
      src={modalImages[currentImageIndex]}
      alt={`gallery-${currentImageIndex}`}
      style={{
        maxWidth: '90%',
        maxHeight: '90%',
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0,0,0,0.6)',
      }}
    />
  )}
</Dialog>

    </section>
  );
});

export default Projects;
