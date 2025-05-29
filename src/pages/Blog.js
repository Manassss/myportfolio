import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

// Sample blog content
const blogs = [
  {
    title: 'Building Production-Ready Microservices with Node.js & Docker',
    content: `Explore best practices for decomposing a monolith into microservices powered by Express or Koa, containerizing services with Docker, and orchestrating them with Kubernetes. Learn about service discovery, health checks, and implementing zero-downtime rolling updates for reliable deployments.`,
  },
  {
    title: 'End-to-End TypeScript: From Next.js Frontend to NestJS Backend',
    content: `See how to share types between client and server for rock‑solid contracts. Wire up Next.js pages to a NestJS REST API, leverage tRPC for type‑safe RPC calls, and deploy both to Vercel for unified, type‑safe full‑stack development.`,
  },
  {
    title: 'Leveraging Serverless AI: Image‑Captioning API with AWS Lambda & SageMaker',
    content: `Walk through packaging a PyTorch transformer model as a Lambda container, invoking an AWS SageMaker endpoint for inference, and auto‑scaling with no server provisioning. Build a cost‑efficient, serverless AI API for dynamic workloads.`,
  },
  {
    title: 'Real‑Time Data Streams with WebSockets, Redis & React',
    content: `Implement a live dashboard powered by Redis Pub/Sub and a Node.js WebSocket server. Push real‑time updates to React clients, handle reconnection logic gracefully, and optimize for sub‑100ms latency in data‑intensive applications.`,
  },
  {
    title: 'Production ML Pipelines: FastAPI, MLflow & GitHub Actions',
    content: `Package your scikit‑learn or XGBoost pipeline behind a FastAPI service, track experiments with MLflow, and automate model promotions via GitHub Actions. Streamline your path from prototype to production with CI/CD for machine learning.`,
  },
];

const BlogCard = ({ blog, index }) => {
  return (
    <Box sx={{ width: 330, display: 'flex', mb: 5, }}>
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
    // Lighter soft gradient for card background
    backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #fff5f7 100%)',
            color: 'text.primary',
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
          <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: 'primary.main' }}>
            {blog.title}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            {blog.content}
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

const Blog = () => {
  const theme = useTheme();

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      sx={{
        position: 'relative',
        bgcolor: theme => theme.palette.background.default,
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 4 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          mb: { xs: 4, sm: 6 },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Box
          component={Typography}
          variant="h3"
          align="center"
          sx={{
            fontWeight: 600,
            mb: 5,
            mt: { xs: 2, sm: 4 },
            background: 'linear-gradient(90deg, #9b4886, #c08497)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Blog
        </Box>
      </motion.div>

      <Grid container justifyContent="center" spacing={4} sx={{ columnGap: 4, rowGap: 4, mt: 4 }}>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </Grid>
    </motion.section>
  );
};

export default Blog;
