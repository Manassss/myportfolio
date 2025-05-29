import React, { forwardRef, useState, useRef, useEffect } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Dialog,
  IconButton as MuiIconButton,
  Button,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import restImage from '../assests/rest.png';
import pacex1 from '../assests/pacex1.jpeg';
import pacex2 from '../assests/pacex2.jpeg';
import pacex3 from '../assests/pacex3.jpeg';
import pacex4 from '../assests/pacex4.jpeg';
import cvineImage from '../assests/CVine1.png';
import cvine1 from '../assests/CVine_1.jpg';
import cvine2 from '../assests/CVine_2.jpg';
import cvine3 from '../assests/CVine_3.jpg';
import cvine4 from '../assests/CVine_4.jpg';
import cvine5 from '../assests/CVine_5.jpg';
import cvine6 from '../assests/CVine_6.jpg';
import cvine7 from '../assests/CVine_7.jpg';
import cvine8 from '../assests/CVine_8.jpg';
import cvine9 from '../assests/CVine_9.jpg';
import cvine10 from '../assests/CVine_10.jpg';

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
      image: cvineImage,
      tech: ['React Native', 'Flask', 'Firebase', 'Machine Learning'],
      gallery: [cvine1, cvine2, cvine3, cvine4, cvine5, cvine6, cvine7, cvine8, cvine9, cvine10],
      frontend: 'https://github.com/siddharth101998/Cvine-Expo.git',
      backend: 'https://github.com/Manassss/CVine.git',
      demo: '',
      inProgress: true,
    },
    {
      title: 'PaceX',
      description:
        'PaceX is a social marketplace tailored for student entrepreneurs. I’m leading the project architecture, backend design, and real-time features (chat, stories, notifications). Users can create posts, join communities, sell products, and network in real time.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      inProgress: true,
      image: pacex1,
      gallery: [pacex1, pacex2, pacex3, pacex4],
      frontend: 'https://github.com/Manassss/PaceX.git',
      demo: 'https://pacedev.vercel.app',
      username: 'as44927n@pace.edu',
      password: '123sid',
    },
  ];

  const theme = useTheme();
  const carouselRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const next = scrollLeft + clientWidth;
        carouselRef.current.scrollTo({
          left: next > maxScroll ? 0 : next,
          behavior: 'smooth',
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.section
      component="section"
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      sx={{
        scrollSnapAlign: 'start',
        scrollMarginTop: 64,
        bgcolor: 'common.black',
        py: { xs: 8, sm: 12 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 600,
          mb: 5,
          background: theme => `linear-gradient(90deg, #9b4886, #c08497)`,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
         Projects
      </Typography>

      <Box sx={{ position: 'relative', mt: 4 }}>
        <IconButton
          onClick={() =>
            carouselRef.current?.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })
          }
          sx={{
            position: 'absolute',
            left: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'common.white',
            zIndex: 10,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            carouselRef.current?.scrollBy({ left: window.innerWidth, behavior: 'smooth' })
          }
          sx={{
            position: 'absolute',
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'common.white',
            zIndex: 10,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          gap: { xs: 0, sm: 4 },
          pt: 4,
          pb: 4,
          flexWrap: { xs: 'nowrap', sm: 'nowrap' },
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        ref={carouselRef}
      >
        {projects.map((proj, i) => (
          <Box
            key={i}
            sx={{
              flex: '0 0 100vw',
              scrollSnapAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 28px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{ width: '80%', maxWidth: 600 }}
            >
              <Box sx={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: '1px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
                p: 2,
              }}>
              <Box
                component="img"
                src={proj.image}
                alt={proj.title}
                sx={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 2, mb: 2 }}
              />
              <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 600, mb: 1 }}>
                {proj.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'common.white', mb: 2, lineHeight: 1.6 }}>
                {proj.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {proj.tech.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      px: 2,
                      py: 0.5,
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      borderRadius: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {proj.frontend && (
                  <Tooltip title="Frontend Repo">
                    <IconButton href={proj.frontend} target="_blank" sx={{ color: theme.palette.primary.main }}>
                      <FaGithub />
                    </IconButton>
                  </Tooltip>
                )}
                {proj.backend && (
                  <Tooltip title="Backend Repo">
                    <IconButton href={proj.backend} target="_blank" sx={{ color: theme.palette.primary.main }}>
                      <FaGithub />
                    </IconButton>
                  </Tooltip>
                )}
                {proj.demo && (
                  <IconButton href={proj.demo} target="_blank" sx={{ color: theme.palette.primary.main }}>
                    <FaExternalLinkAlt />
                  </IconButton>
                )}
                {proj.gallery && (
                  <Button
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                    onClick={() => handleOpenGallery(proj.gallery)}
                  >
                    View Screenshots
                  </Button>
                )}
              </Box>
              </Box>
            </motion.div>
          </Box>
        ))}
      </Box>
      </Box>

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

    </motion.section>
  );
});

export default Projects;
