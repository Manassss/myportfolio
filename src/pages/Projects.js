import React, { forwardRef, useState, useRef, useCallback } from 'react';
import {
  Typography, Box, IconButton, Dialog, Button, Tooltip, Grid, Container
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';
import LockIcon from '@mui/icons-material/Lock';

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

const projects = [
  {
    title: 'Investment Portal',
    subtitle: 'Real-Time Client & Admin Platform',
    description:
      'Full-stack investment platform with live portfolio streaming via Server-Sent Events and JWT role-based access control for two distinct user tiers (client and admin). Built for financial-grade reliability with immutable audit logs.',
    details: 'Architected the platform from the ground up with React, Node.js, and MongoDB. The key challenge was supporting concurrent real-time updates without WebSocket overhead, solved with Server-Sent Events. Introduced compound indexes and query profiling that cut API response times by 45% under load. Immutable audit logs were added to satisfy financial-grade traceability requirements.',
    tech: ['React', 'Node.js', 'MongoDB', 'Server-Sent Events', 'JWT'],
    image: null,
    github: 'https://github.com/Manassss',
    deployStatus: { label: 'Private · Available on request', icon: <LockIcon sx={{ fontSize: 12 }} />, color: '#6b7280' },
    tags: ['Dashboard', 'Real-Time', 'Full Stack'],
    impact: 'Cut API response times 45% under concurrent load via compound indexes. Immutable audit logs for financial-grade traceability.',
    period: 'Jul 2025 – Aug 2025',
  },
  {
    title: 'CVine',
    subtitle: 'AI-Powered Wine Discovery App',
    description:
      "Wine discovery platform using a hybrid ML model combining content-based and collaborative filtering. As team lead, I oversaw full-stack development (React + Flask + Firebase), Google Vision integration, and real-time querying.",
    details: "Engineered a hybrid ML recommendation engine achieving sub-200ms inference on 8,000+ wines. Integrated OpenAI API for contextual food-pairing suggestions. Optimized MongoDB queries to serve recommendations with under 100ms p95 latency under concurrent load. Led a cross-functional team through end-to-end product delivery.",
    image: cvineImage,
    tech: ['React Native', 'Flask', 'Firebase', 'Scikit-learn', 'OpenAI API'],
    gallery: [cvine1, cvine2, cvine3, cvine4, cvine5, cvine6, cvine7, cvine8, cvine9, cvine10],
    frontend: 'https://github.com/siddharth101998/Cvine-Expo.git',
    backend: 'https://github.com/Manassss/CVine.git',
    deployStatus: { label: 'In Progress', icon: <LaunchIcon sx={{ fontSize: 12 }} />, color: '#f59e0b' },
    tags: ['AI', 'Mobile App', 'Recommendation System'],
    impact: '95% satisfaction rate in private beta (50+ users). Sub-200ms ML inference on 8,000+ wine catalog.',
    period: 'Jan 2025 – May 2025',
  },
  {
    title: 'PaceX',
    subtitle: 'Student Social Networking Platform',
    description:
      "Real-time social platform for student entrepreneurs. I led project architecture, backend design, and all real-time features: WebSocket-backed chat, stories, activity feeds, communities, and product marketplace.",
    details: "Built with React, Express.js, and Firebase. Used Socket.IO for real-time messaging and Firebase Auth for secure login. Sustained 100+ concurrent users with no observable degradation. Coordinated agile sprint planning with GitHub-based version control.",
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Firebase'],
    image: pacex1,
    gallery: [pacex1, pacex2, pacex3, pacex4],
    frontend: 'https://github.com/Manassss/PaceX.git',
    demo: 'https://pacedev.vercel.app',
    deployStatus: { label: 'Live', icon: <LaunchIcon sx={{ fontSize: 12 }} />, color: '#22c55e' },
    tags: ['Social Platform', 'Real-Time', 'Full Stack'],
    impact: 'Sustained 100+ concurrent users with WebSocket architecture and no observable degradation.',
    period: 'Jan 2025 – May 2025',
  },
];

// ── 3-D perspective tilt on hover ────────────────────────────────────────
const TiltCard = ({ children }) => {
  const el = useRef(null);

  const onMove = useCallback((e) => {
    const rect = el.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -14;
    el.current.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
  }, []);

  const onLeave = useCallback(() => {
    el.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
  }, []);

  return (
    <div
      ref={el}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.18s ease', transformStyle: 'preserve-3d', height: '100%' }}
    >
      {children}
    </div>
  );
};

const Projects = forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);

  const handleOpenGallery = (images) => { setModalImages(images); setCurrentImageIndex(0); setOpenModal(true); };
  const handleNext = () => { if (currentImageIndex < modalImages.length - 1) setCurrentImageIndex(p => p + 1); };
  const handlePrev = () => { if (currentImageIndex > 0) setCurrentImageIndex(p => p - 1); };

  return (
    <Box
      component="section"
      id="projects"
      ref={ref}
      sx={{ scrollSnapAlign: 'start', scrollMarginTop: 64, bgcolor: '#04040c', py: { xs: 8, sm: 14 } }}
    >
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 1, fontFamily: "'Poppins', sans-serif", background: 'linear-gradient(90deg, #9b4886, #c08497)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Projects
          </Typography>
          <Typography align="center" variant="body2" sx={{ color: 'grey.500', mb: 6 }}>
            Production systems and full-stack builds
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((proj, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <TiltCard>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    '&:hover': { borderColor: 'rgba(155,72,134,0.5)', boxShadow: '0 16px 48px rgba(155,72,134,0.2)' },
                  }}
                >
                  {/* Image / Gradient placeholder */}
                  {proj.image ? (
                    <Box component="img" src={proj.image} alt={proj.title} sx={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  ) : (
                    <Box sx={{ width: '100%', height: 200, background: 'linear-gradient(135deg, #1a0a14 0%, #3a1a2e 50%, #9b4886 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                      <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, textAlign: 'center', px: 2, fontFamily: "'Poppins', sans-serif" }}>{proj.title}</Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>UI screenshots coming soon</Typography>
                    </Box>
                  )}

                  <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Header row */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                      <Typography variant="h6" sx={{ color: 'common.white', fontWeight: 700, fontFamily: "'Poppins', sans-serif", lineHeight: 1.3 }}>
                        {proj.title}
                      </Typography>
                      {/* Deploy status badge */}
                      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.4, px: 1, py: 0.3, borderRadius: '12px', border: `1px solid ${proj.deployStatus.color}`, flexShrink: 0, ml: 1 }}>
                        <Box sx={{ color: proj.deployStatus.color, display: 'flex' }}>{proj.deployStatus.icon}</Box>
                        <Typography sx={{ fontSize: '0.62rem', color: proj.deployStatus.color, fontWeight: 600, whiteSpace: 'nowrap' }}>{proj.deployStatus.label}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 600, mb: 1, display: 'block' }}>{proj.subtitle}</Typography>
                    <Typography variant="caption" sx={{ color: 'grey.600', mb: 1.5, display: 'block' }}>{proj.period}</Typography>

                    <Typography variant="body2" sx={{ color: 'grey.400', mb: 1.5, lineHeight: 1.7, flexGrow: 1 }}>
                      {proj.description}
                    </Typography>

                    {/* Impact */}
                    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(155,72,134,0.08)', border: '1px solid rgba(155,72,134,0.2)', mb: 2 }}>
                      <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 600, display: 'block', mb: 0.3, textTransform: 'uppercase', letterSpacing: '0.8px', fontSize: '0.6rem' }}>Impact</Typography>
                      <Typography variant="caption" sx={{ color: 'grey.300', lineHeight: 1.6 }}>{proj.impact}</Typography>
                    </Box>

                    {/* More Info toggle */}
                    {expandedProject === i && (
                      <Typography variant="body2" sx={{ color: 'grey.500', mb: 2, lineHeight: 1.7, fontSize: '0.8rem' }}>{proj.details}</Typography>
                    )}
                    <Button size="small" variant="text" onClick={() => setExpandedProject(expandedProject === i ? null : i)} sx={{ color: 'primary.light', mb: 1.5, textTransform: 'none', p: 0, width: 'fit-content', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
                      {expandedProject === i ? 'Hide details' : 'Show details'}
                    </Button>

                    {/* Tech chips - outlined */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                      {proj.tech.map((tech, ti) => (
                        <Box key={ti} sx={{ px: 1.2, py: 0.35, border: '1px solid rgba(155,72,134,0.5)', borderRadius: '12px', fontSize: '0.7rem', color: 'primary.light', fontWeight: 500 }}>
                          {tech}
                        </Box>
                      ))}
                    </Box>

                    {/* Links */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 'auto' }}>
                      {proj.github && (
                        <Tooltip title="GitHub">
                          <IconButton href={proj.github} target="_blank" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                            <FaGithub size={16} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {proj.frontend && (
                        <Tooltip title="Frontend Repo">
                          <IconButton href={proj.frontend} target="_blank" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                            <FaGithub size={16} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {proj.backend && (
                        <Tooltip title="Backend Repo">
                          <IconButton href={proj.backend} target="_blank" size="small" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                            <FaGithub size={16} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {proj.demo && (
                        <Tooltip title="Live Demo">
                          <IconButton href={proj.demo} target="_blank" size="small" sx={{ color: 'grey.400', '&:hover': { color: '#22c55e' } }}>
                            <FaExternalLinkAlt size={14} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {proj.gallery && (
                        <Button size="small" variant="text" onClick={() => handleOpenGallery(proj.gallery)} sx={{ color: 'grey.400', textTransform: 'none', fontSize: '0.75rem', p: '2px 8px', '&:hover': { color: 'primary.light', bgcolor: 'transparent' } }}>
                          Screenshots
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
                </TiltCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Gallery Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} fullScreen PaperProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
        <IconButton onClick={() => setOpenModal(false)} sx={{ position: 'fixed', top: 20, right: 20, color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }, zIndex: 20 }}>
          <CloseIcon />
        </IconButton>
        <IconButton onClick={handlePrev} disabled={currentImageIndex === 0} sx={{ position: 'fixed', top: '50%', left: 10, transform: 'translateY(-50%)', color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', zIndex: 10 }}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={handleNext} disabled={currentImageIndex === modalImages.length - 1} sx={{ position: 'fixed', top: '50%', right: 10, transform: 'translateY(-50%)', color: '#fff', bgcolor: 'rgba(255,255,255,0.1)', zIndex: 10 }}>
          <ArrowForwardIosIcon />
        </IconButton>
        {modalImages.length > 0 && (
          <img src={modalImages[currentImageIndex]} alt={`gallery-${currentImageIndex}`} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: 8 }} />
        )}
        <Typography sx={{ position: 'fixed', bottom: 20, color: 'grey.500', fontSize: '0.8rem' }}>{currentImageIndex + 1} / {modalImages.length}</Typography>
      </Dialog>
    </Box>
  );
});

export default Projects;
