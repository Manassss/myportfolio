import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Sample blog content
const blogs = [
  {
    title: 'Generative AI: The Future of Creativity',
    content: `Generative AI is transforming industries empowering tools like GPT, Midjourney, and more to produce original content. From digital art to game assets, we explore how this tech is changing creativity. It’s not just about automation; it’s about augmenting human expression and sparking entirely new forms of design, music, writing, and storytelling. Tools like ChatGPT and Stable Diffusion are now collaborators in the creative process.`,
  },
  {
    title: 'Innovation: Fueling the Next Wave of Tech',
    content: `Innovation powers progress from the internet to AI. This post explores how companies foster experimentation and design thinking. In a world of rapid change, companies thrive by nurturing a "fail fast, learn fast" culture. True innovation isn’t about luck it’s a mindset. We look at examples from Google X to SpaceX, where bold ideas, prototyping, and iteration fuel industry disruption.`,
  },
  {
    title: 'How Full-Stack Developers Shape Modern Products',
    content: `Full-stack engineers go beyond just tech they're builders and thinkers. We explore their role in shaping modern products. From designing APIs to crafting intuitive frontends, they bridge the gap between vision and implementation. Their ability to understand the whole picture from databases to UI/UX makes them uniquely valuable in startups and agile teams where speed, adaptability, and ownership matter most.`,
  },
];

const BlogCard = ({ blog, index }) => {
  return (
    <Box sx={{ width: 330, display: 'flex' }}>
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

          <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
            {blog.content}
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

const Blog = () => {
  return (
    <section
      id="blog"
      style={{
        background: 'linear-gradient(355deg, #9b4886, #f8f4ec)',
        padding: '80px 20px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" align="center" sx={{ fontWeight: 600, mb: 5, color: 'black' }}>
          My Blog
        </Typography>
      </motion.div>

      <Grid container justifyContent="center" spacing={4} sx={{ columnGap: 4,rowGap: 4}}>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </Grid>
    </section>
  );
};

export default Blog;
