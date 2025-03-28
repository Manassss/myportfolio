import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #9b4886, #f8f4ec)',
        color: '#fff',
        textAlign: 'center',
        py: 4,
        fontFamily: "'Poppins', sans-serif",
        minHeight: '5vh',

      }}
    >
      <Typography variant="body1" sx={{ mb: 1, color:'black', fontWeight:'10px',         fontFamily: "'Poppins', sans-serif",
 }}>
        🎉 Thank you for scrolling through my journey!
      </Typography>
      <Typography variant="body2" sx={{ color: 'black',         fontFamily: "'Poppins', sans-serif",
 }}>
        Whether you're here for inspiration, collaboration, or curiosity — I appreciate your time 🙌
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: 'black',         fontFamily: "'Poppins', sans-serif",
 }}>
        © {new Date().getFullYear()} Manas Mandlecha • Built with 💻 React, ❤️ passion & ☕ coffee
      </Typography>
    </Box>
  );
};

export default Footer;
