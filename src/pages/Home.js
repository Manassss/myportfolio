import React, { useRef } from 'react';
import { motion as m, useViewportScroll, useTransform } from 'framer-motion';
import {
  Container,
  Box,
  Avatar,
  Typography,
  Button,
  Stack,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import Header from '../components/Header';
import gifImage from '../assests/about.jpg';
import myImage from '../assests/profile.jpeg';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './ExperienceEducation';
import Blog from './Blog';
import About from './About';
import Footer from './footer';

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const blogRef = useRef(null);

  const theme = useTheme();

  const { scrollY } = useViewportScroll();
  const circle1Y = useTransform(scrollY, [0, 300], [0, -60]);
  const circle2Y = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      <Header />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          scrollSnapAlign: 'start',
          scrollMarginTop: 64,
          py: { xs: 10, sm: 20 },
          bgcolor: 'common.black',
          position: 'relative',
        }}
      >
        <m.div style={{ y: circle1Y, x: circle1Y }}>
          <Box sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: '#c08497',
            opacity: 0.2,
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }} />
        </m.div>
        <m.div style={{ y: circle2Y, x: circle2Y }}>
          <Box sx={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: '#c08497',
            opacity: 0.2,
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }} />
        </m.div>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: 'center',
              gap: 6,
              justifyContent: 'center',
            }}
          >
            {/* Left column: avatar */}
            <Box sx={{ flexShrink: 0 }}>
              <m.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              >
                <Avatar
                  alt="Manas Mandlecha"
                  src={myImage}
                  sx={{
                    width: 240,
                    height: 240,
                    boxShadow: 3,
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                    border: `2px solid ${theme.palette.primary.main}`,
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, textAlign: 'center', color: theme.palette.common.white }}>
                  Full-Stack Software Engineer
                </Typography>
              </m.div>
            </Box>

            {/* Right column: text */}
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '-50%',
                  width: '200%',
                  height: '100%',
                  background: 'radial-gradient(circle at left center, rgba(152,72,134,0.2), transparent)',
                  pointerEvents: 'none',
                }}
              />
              <Box sx={{ maxWidth: 600 }}>
                <m.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.2,
                      fontSize: { xs: '2rem', md: '3rem' },
                      background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    <DeveloperModeIcon fontSize="large" sx={{ mr: 1 }} />
                    Hello, I’m Manas
                  </Typography>
                </m.div>

                <m.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      mb: 4,
                      lineHeight: 1.8,
                      letterSpacing: '0.5px',
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      color: theme.palette.common.white,
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    I’m a full-stack developer who loves turning ideas into impactful digital products.
                    From crafting sleek UIs with React to building robust backends with Node.js and Firebase.
                    I bring design and code together. Lately, I’m diving deep into AI and mobile development to build smarter, more connected experiences.
                  </Typography>
                </m.div>

                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <Stack direction="row" spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }} mb={3}>
                    <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#9b4886',
                          color: '#fff',
                          px: 5,
                          '&:hover': { bgcolor: '#7a3f6f' },
                        }}
                        startIcon={<DownloadIcon />}
                        href={`${process.env.PUBLIC_URL}/Manas_Mandlecha_Software_Engineer.pdf`}
                        download
                      >
                        Resume
                      </Button>
                    </m.div>
                    <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outlined"
                        sx={{
                          borderWidth: 2,
                          borderColor: '#9b4886',
                          color: '#9b4886',
                          px: 5,
                          '&:hover': { backgroundColor: 'rgba(152, 72, 134, 0.08)' },
                        }}
                        startIcon={<EmailIcon />}
                        href="mailto:manas.mandlecha.career@gmail.com"
                      >
                        Contact Me
                      </Button>
                    </m.div>
                  </Stack>
                </m.div>

              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Sections */}
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}>
        <About ref={aboutRef} />
      </Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}>
        <Projects ref={projectsRef} />
      </Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}>
        <Skills ref={skillsRef} />
      </Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}>
        <Experience ref={experienceRef} />
      </Box>
      <Box component="section" sx={{ scrollSnapAlign: 'start' }}>
        <Blog ref={blogRef} />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
