import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import gif from '../assests/home.gif';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skel', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // shrink AppBar on scroll
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  return (
    <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          color: 'common.white',
          transition: 'all 0.3s ease',
          height: trigger ? 56 : 80,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: 2, justifyContent: 'space-between', alignItems: 'center', minHeight: trigger ? 56 : 80, transition: 'all 0.3s ease' }}>
          {/* Logo and Name */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={gif}
              alt="logo"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <Typography variant="h6" fontWeight={600} color="common.white">
              Manas Mandlecha
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={3}>
                {navItems.map((item, i) => (
                  <motion.div key={item.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                    <Link
                      to={item.id}
                      smooth
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
                          color: 'common.white',
                          '&:hover': { color: theme.palette.primary.main },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '0%',
                            height: '2px',
                            backgroundColor: theme.palette.primary.main,
                            transition: 'width 0.3s',
                          },
                          '&:hover::after': { width: '100%' },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          )}

          {/* Social + Menu */}
          <Stack direction="row" spacing={2} alignItems="center">
            {!isMobile &&
              [
                { icon: <Github size={20} />, link: 'https://github.com/manassss' },
                { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/manas-mandlecha' },
                { icon: <Mail size={20} />, link: 'mailto:manas.mandlecha.career@gmail.com' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 1 + i * 0.1 }}
                >
                  <IconButton component="a" href={item.link} target="_blank" rel="noreferrer" sx={{ color: 'common.white' }}>
                    {item.icon}
                  </IconButton>
                </motion.div>
              ))}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'common.white' }}>
                <Menu size={22} />
              </IconButton>
            )}
          </Stack>
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              bgcolor: 'common.black',
              color: 'common.white',
              width: 250,
              px: 2,
              py: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ml:'22',
            },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }} color="common.white">
              Navigate
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.id}
                  onClick={() => {
                    setDrawerOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <ListItemText primary={item.label} primaryTypographyProps={{ color: 'common.white' }} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Social links in drawer */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <IconButton href="https://github.com/manassss" target="_blank" sx={{ color: 'common.white' }}>
              <Github size={20} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/manas-mandlecha" target="_blank" sx={{ color: 'common.white' }}>
              <Linkedin size={20} />
            </IconButton>
            <IconButton href="mailto:manas.mandlecha.career@gmail.com" sx={{ color: 'common.white' }}>
              <Mail size={20} />
            </IconButton>
          </Box>
        </Drawer>
      </AppBar>
    </motion.div>
  );
};

export default Header;
