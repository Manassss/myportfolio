import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'black',
        borderTop: '4px solid',
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(90deg, #9b4886, #c08497)',
        borderRadius: '0 0 8px 8px',
        color: '#fff',
        textAlign: 'center',
        py: { xs: 6, sm: 7 },
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
            color: '#fff',
          }}
        >
           Thank you for scrolling through my journey!
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#fff',
            mb: 1,
          }}
        >
          Whether you're here for inspiration, collaboration, or curiosity. I appreciate your time. 
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.95rem' },
            color: 'primary.light',
          }}
        >
          © {new Date().getFullYear()} Manas Mandlecha • Built with React,  passion & coffee
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
