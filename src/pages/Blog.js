import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaExternalLinkAlt, FaPen } from 'react-icons/fa';

const topics = [
  {
    title: 'Production ML Pipelines: From Raw Data to REST API',
    summary: 'How I reduced model deployment cycle time from weeks to under 2 days at Pylon Management, covering feature engineering, Scikit-learn pipelines, and FastAPI inference.',
    tag: 'AI / ML',
    readTime: '8 min',
    link: null,
  },
  {
    title: 'Cutting Page Load Times by 75%: A Frontend Profiling Playbook',
    summary: 'The exact profiling workflow, code-splitting strategy, and query optimizations I used at 99 Yards to achieve a 75% reduction in load time.',
    tag: 'Frontend',
    readTime: '6 min',
    link: null,
  },
  {
    title: 'Real-Time at Scale: WebSockets vs. Server-Sent Events',
    summary: 'When I chose SSE over WebSockets for the Investment Portal and how it reduced infrastructure overhead while maintaining sub-100ms latency.',
    tag: 'Backend',
    readTime: '7 min',
    link: null,
  },
  {
    title: 'Hybrid Recommendation Engines: CVine Case Study',
    summary: 'Combining content-based filtering, collaborative filtering, and Google Vision label recognition to achieve sub-200ms inference on 8,000+ items.',
    tag: 'AI / ML',
    readTime: '9 min',
    link: null,
  },
  {
    title: 'Taming State at Scale: Redux vs. Context API in Enterprise Apps',
    summary: 'How redesigning shared state at Cybage eliminated a class of race-condition bugs and cut reported defects by 45% over two release cycles.',
    tag: 'Frontend',
    readTime: '5 min',
    link: null,
  },
];

const tagStyle = {
  'AI / ML':  { bg: 'rgba(155,72,134,0.18)', border: 'rgba(155,72,134,0.45)', color: '#c08497' },
  'Frontend': { bg: 'rgba(192,132,151,0.18)', border: 'rgba(192,132,151,0.45)', color: '#d4a0b0' },
  'Backend':  { bg: 'rgba(122,54,104,0.18)', border: 'rgba(122,54,104,0.45)', color: '#b07090' },
};

const BlogCard = ({ topic, index }) => {
  const ts = tagStyle[topic.tag] || tagStyle['AI / ML'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: '#111',
          border: '1px solid rgba(155,72,134,0.22)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            borderColor: ts.border,
            boxShadow: `0 8px 28px ${ts.bg}`,
          },
        }}
      >
        {/* Tag row */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{
            px: 1.5, py: 0.35, borderRadius: '12px',
            bgcolor: ts.bg,
            border: `1px solid ${ts.border}`,
            color: ts.color,
            fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.5px',
          }}>
            {topic.tag}
          </Box>
          <Typography variant="caption" sx={{ color: 'grey.700', fontSize: '0.7rem' }}>
            {topic.readTime} read
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: 'common.white',
            fontWeight: 700,
            mb: 1.5,
            lineHeight: 1.4,
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.9rem',
            flexShrink: 0,
          }}
        >
          {topic.title}
        </Typography>

        {/* Summary */}
        <Typography
          variant="body2"
          sx={{ color: 'grey.600', lineHeight: 1.75, flexGrow: 1, fontSize: '0.82rem' }}
        >
          {topic.summary}
        </Typography>

        {/* Footer */}
        <Box sx={{ mt: 2.5, borderTop: '1px solid rgba(255,255,255,0.06)', pt: 2 }}>
          {topic.link ? (
            <Button
              size="small"
              href={topic.link}
              target="_blank"
              endIcon={<FaExternalLinkAlt size={10} />}
              sx={{
                color: ts.color, textTransform: 'none', p: 0, fontSize: '0.78rem',
                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
              }}
            >
              Read on LinkedIn
            </Button>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <FaPen size={9} color="#444" />
              <Typography variant="caption" sx={{ color: 'grey.800', fontStyle: 'italic', fontSize: '0.72rem' }}>
                Full article coming soon on LinkedIn
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <Box
      component="section"
      id="blog"
      sx={{
        scrollSnapAlign: 'start',
        scrollMarginTop: 64,
        bgcolor: '#0a0a0a',
        py: { xs: 8, sm: 12 },
        position: 'relative',
      }}
    >
      <Box sx={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2,
        background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
      }} />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontFamily: "'Poppins', sans-serif",
              background: 'linear-gradient(90deg, #9b4886, #c08497)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Writing
          </Typography>
          <Typography align="center" variant="body2" sx={{ color: 'grey.500', mb: 3 }}>
            Topics I'm actively writing about. Follow on LinkedIn for full articles.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/manas-mandlecha"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaLinkedin />}
                sx={{
                  borderColor: '#9b4886',
                  color: '#9b4886',
                  fontFamily: "'Poppins', sans-serif",
                  '&:hover': { bgcolor: 'rgba(155,72,134,0.08)', borderColor: '#c08497' },
                }}
              >
                Follow on LinkedIn
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* 2-2-1 grid: first 4 in two columns, last card centered at same width */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 3,
        }}>
          {topics.map((topic, index) => (
            <Box
              key={index}
              sx={index === topics.length - 1 && topics.length % 2 !== 0 ? {
                gridColumn: { sm: '1 / -1' },
                maxWidth: { sm: 'calc(50% - 12px)' },
                mx: 'auto',
                width: '100%',
              } : {}}
            >
              <BlogCard topic={topic} index={index} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
