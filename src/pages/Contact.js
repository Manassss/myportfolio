import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => (
  <Box
    component="section"
    id="contact"
    sx={{
      scrollSnapAlign: 'start',
      scrollMarginTop: 64,
      bgcolor: 'background.default',
      py: { xs: 12, sm: 20 },
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Ambient glows */}
    <Box sx={{ position: 'absolute', top: '10%',  left: '-10%', width: 400, height: 400, borderRadius: '50%', bgcolor: '#9b4886', opacity: 0.05, filter: 'blur(120px)', pointerEvents: 'none' }} />
    <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: 400, height: 400, borderRadius: '50%', bgcolor: '#7c3aed', opacity: 0.05, filter: 'blur(120px)', pointerEvents: 'none' }} />

    <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative' }}>

      {/* Big heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Typography sx={{
          fontFamily:   "'Poppins', sans-serif",
          fontWeight:   900,
          fontSize:     { xs: '3.5rem', sm: '6rem', md: '8rem' },
          lineHeight:   1,
          letterSpacing: '-2px',
          mb: 3,
          background: 'linear-gradient(135deg, #ffffff 0%, #c08497 40%, #9b4886 75%, #7c3aed 100%)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: 'gradient-x 6s ease infinite',
        }}>
          LET'S
          <br />
          BUILD.
        </Typography>
      </motion.div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: 'center' }}
      >
        <Box sx={{ height: 1, bgcolor: 'rgba(155,72,134,0.3)', mb: 4, mx: 'auto', maxWidth: 480 }} />
      </motion.div>

      {/* Email link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Box
          component="a"
          href="mailto:manas.mandlecha.career@gmail.com"
          sx={{
            display: 'inline-block',
            fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.15rem' },
            color: 'text.secondary',
            textDecoration: 'none',
            px: 3.5, py: 1.5,
            borderRadius: 2,
            border: '1px solid rgba(155,72,134,0.25)',
            bgcolor: 'rgba(155,72,134,0.06)',
            backdropFilter: 'blur(10px)',
            mb: 5,
            transition: 'all 0.3s',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.3px',
            '&:hover': {
              color: 'primary.light',
              borderColor: 'primary.main',
              bgcolor: 'rgba(155,72,134,0.12)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(155,72,134,0.2)',
            },
          }}
        >
          manas.mandlecha.career@gmail.com
        </Box>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
      >
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          {[
            { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/manas-mandlecha', color: '#0A66C2', label: 'LinkedIn' },
            { icon: <FaGithub   size={22} />, href: 'https://github.com/manassss',                color: '#e2e8f0',  label: 'GitHub'   },
          ].map((item) => (
            <motion.div key={item.label} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: item.color,
                  width: 52, height: 52,
                  border: '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: `${item.color}18`,
                    borderColor: `${item.color}55`,
                    boxShadow: `0 0 20px ${item.color}33`,
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.6 }}>
          <LocationOnIcon sx={{ fontSize: 14, color: 'text.secondary', opacity: 0.6 }} />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8rem', opacity: 0.6 }}>
            New York, NY · F-1 OPT · Open to Full-time, Hybrid/Remote
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontSize: '0.72rem', mt: 0.5, opacity: 0.4 }}>
          Response within 24 hours.
        </Typography>
      </motion.div>

    </Container>
  </Box>
);

export default Contact;
