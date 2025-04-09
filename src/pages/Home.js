import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Box,
  Avatar,
  Typography,
  Button,
  Stack
} from '@mui/material';

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

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />

      <Header />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(185deg, #9b4886, #f8f4ec)',
          pt: '100px',
          color: '#333',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Avatar
              alt="Manas Mandlecha"
              src={myImage}
              sx={{
                width: 240,
                height: 240,
                mx: 'auto',
                mb: 3,
                boxShadow: 3,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight={700} mb={2}>
              Hey, I'm Manas 👋
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.15rem',
                color: '#444',
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              I’m a full-stack developer who loves turning ideas into impactful digital products.
              From crafting sleek UIs with React to building robust backends with Node.js and Firebase.
              I bring design and code together. Lately, I’m diving deep into AI and mobile development to build smarter, more connected experiences.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
              <Button
                variant="contained"
                size="large"
                href={`${process.env.PUBLIC_URL}/Manas-Resume.pdf`}
                download
                sx={{
                  borderRadius: '30px',
                  fontWeight: '600',
                  px: 4,
                  backgroundColor: '#333',
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                }}
              >
                📄 Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="mailto:manas.mandlecha.career@gmail.com"
                sx={{
                  borderRadius: '30px',
                  fontWeight: '600',
                  px: 4,
                  color: '#333',
                  borderColor: '#333',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                    borderColor: '#333',
                  },
                }}
              >
                📬 Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Sections */}
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Blog ref={blogRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
