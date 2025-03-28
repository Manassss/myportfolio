import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #9b4886, #f8f4ec)',
        color: '#fff',
        textAlign: 'center',
        py: { xs: 4, sm: 5 },
        px: { xs: 2, sm: 4 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontWeight: 500,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            color: 'black',
          }}
        >
           Thank you for scrolling through my journey!
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: 'black',
            mb: 1,
          }}
        >
          Whether you're here for inspiration, collaboration, or curiosity — I appreciate your time 
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.95rem' },
            color: 'black',
          }}
        >
          © {new Date().getFullYear()} Manas Mandlecha • Built with 💻 React,  passion & ☕ coffee
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
