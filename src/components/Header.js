import React from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Stack } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import gif from '../assests/home.gif';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skel', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
];

const Header = () => {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          background: 'linear-gradient(185deg, #c08497, #f8f4ec)',
          color: '#2c2c2c',
          py: 1,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: 3 }}>
          {/* Logo and Name */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                mr: 4,
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={gif}
                alt="logo"
                style={{
                  width: '45px',
                  height: '45px',
                  marginRight: '10px',
                  borderRadius: '50%',
                }}
              />
              <Typography variant="h6" fontWeight={600}>
                Manas Mandlecha
              </Typography>
            </Box>
          </motion.div>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={3}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        position: 'relative',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '6px',
                        fontWeight: 500,
                        color: '#2c2c2c',
                        '&:hover': {
                          color: '#9b4886',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          width: '0%',
                          height: '2px',
                          backgroundColor: '#9b4886',
                          transition: 'width 0.3s',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Social + Resume */}
          <Stack direction="row" spacing={2} alignItems="center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="/Manas-Resume.pdf"
                download
                title="Resume"
                style={{
                  fontSize: '1.2rem',
                  color: '#2c2c2c',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                📄
              </a>
            </motion.div>

            {/* Social Icons */}
            {[
              {
                icon: <FaGithub />,
                link: 'https://github.com/manassss',
              },
              {
                icon: <FaLinkedin />,
                link: 'https://linkedin.com/in/manasmandlecha',
              },
              {
                icon: <FaEnvelope />,
                link: 'mailto:manas.mandlecha.career@gmail.com',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: 1 + i * 0.1,
                }}
              >
                <IconButton
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ color: '#2c2c2c' }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;
