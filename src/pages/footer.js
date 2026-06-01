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
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 4 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            color: 'grey.600',
            mb: 0.5,
          }}
        >
          Built with React + MUI + Framer Motion
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            color: 'primary.light',
          }}
        >
          © {new Date().getFullYear()} Manas Mandlecha
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
