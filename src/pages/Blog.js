import React from 'react';
import { Typography, Grid, Paper, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'Generative AI: The Future of Creativity',
    content: `Generative AI is transforming industries—empowering tools like GPT, Midjourney, and more to produce original content. From digital art to game assets, we explore how this tech is changing creativity.`,
  },
  {
    title: 'Innovation: Fueling the Next Wave of Tech',
    content: `Innovation powers progress—from the internet to AI. This post explores how companies foster experimentation, design thinking, and fail-fast culture to solve problems in bold ways.`,
  },
  {
    title: 'How Full-Stack Developers Shape Modern Products',
    content: `Full-stack engineers go beyond just tech—they're builders and thinkers. We explore their role in shaping products across frontend, backend, DevOps, and user empathy.`,
  },
];

const Blog = () => (
  <section
    id="blog"
    style={{
      background: 'linear-gradient(355deg, #9b4886, #f8f4ec)',
      padding: '80px 20px',
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    {/* Animated Heading */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography variant="h3" align="center" sx={{ fontWeight: 600, mb: 5, color: 'black' }}>
        📝 My Blog
      </Typography>
    </motion.div>

    <Grid
      container
      justifyContent="center"
      spacing={4}
      sx={{
        rowGap: 4,
        columnGap: 4,
      }}
    >
      {blogs.map((blog, index) => (
        <Box
          key={index}
          sx={{
            width: 330, // 📏 Fixed width (adjust as needed)
            display: 'flex',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #fff4f2, #fce8eb)',
                color: '#333',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#9b4886' }}>
                {blog.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#555', lineHeight: 1.6 }}>
                {blog.content}
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: '#9b4886',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: '20px',
                  alignSelf: 'flex-start',
                  '&:hover': {
                    backgroundColor: '#7c366b',
                  },
                }}
              >
                Read More
              </Button>
            </Paper>
          </motion.div>
        </Box>
      ))}
    </Grid>
  </section>
);

export default Blog;
