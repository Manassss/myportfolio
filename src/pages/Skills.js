import React, { forwardRef, useState } from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare,
  FaDatabase, FaGitAlt, FaGithub, FaDocker, FaAws, FaCloud
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiFirebase, SiKubernetes, SiGraphql,
  SiNextdotjs, SiTypescript, SiCplusplus
} from 'react-icons/si';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <FaJsSquare />, proficiency: 90, color: '#F7DF1E', detail: 'Built multiple modern JS apps' },
      { name: 'TypeScript',      icon: <SiTypescript />, proficiency: 80, color: '#3178C6', detail: 'Typed React & Node codebases' },
      { name: 'Python',          icon: <FaPython />, proficiency: 85, color: '#3776AB', detail: 'Automated scripts and ML protos' },
      { name: 'Java',            icon: <FaJava />, proficiency: 75, color: '#5382A1', detail: 'Built Spring Boot services' },
      { name: 'SQL',             icon: <FaDatabase />, proficiency: 70, color: '#4479A1', detail: 'Designed relational schemas' },
      { name: 'C++',             icon: <SiCplusplus />, proficiency: 65, color: '#00599C', detail: 'Performed systems programming' },
    ],
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React.js',        icon: <FaReact />, proficiency: 90, color: '#61DAFB', detail: 'Built 10+ React SPAs' },
      { name: 'Angular',         icon: <SiNextdotjs />, proficiency: 70, color: '#DD0031', detail: 'Developed enterprise dashboards' },
      { name: 'Next.js',         icon: <SiNextdotjs />, proficiency: 80, color: '#000000', detail: 'Server-side rendered apps' },
      { name: 'Redux',           icon: <FaDatabase />, proficiency: 75, color: '#764ABC', detail: 'State management expertise' },
      { name: 'Context API',     icon: <FaReact />, proficiency: 70, color: '#61DAFB', detail: 'Lightweight state sharing' },
      { name: 'HTML5',           icon: <FaHtml5 />, proficiency: 95, color: '#E34F26', detail: 'Semantic, accessible markup' },
      { name: 'CSS3',            icon: <FaCss3Alt />, proficiency: 95, color: '#264DE4', detail: 'Responsive layouts & animations' },
      { name: 'Bootstrap',       icon: <FaCss3Alt />, proficiency: 80, color: '#7952B3', detail: 'Rapid prototyping with Bootstrap' },
      { name: 'Material UI',     icon: <FaCss3Alt />, proficiency: 75, color: '#0081CB', detail: 'Theming and components' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js',         icon: <FaNodeJs />, proficiency: 85, color: '#339933', detail: 'Built Express services' },
      { name: 'Express.js',      icon: <FaNodeJs />, proficiency: 80, color: '#000000', detail: 'RESTful API development' },
      { name: 'Spring Boot',     icon: <FaJava />, proficiency: 70, color: '#6DB33F', detail: 'Microservices with Spring' },
      { name: 'Firebase',        icon: <SiFirebase />, proficiency: 75, color: '#FFCA28', detail: 'Realtime DB & auth' },
      { name: 'PostgreSQL',      icon: <FaDatabase />, proficiency: 80, color: '#336791', detail: 'ACID-compliant schemas' },
      { name: 'MongoDB',         icon: <SiMongodb />, proficiency: 75, color: '#47A248', detail: 'Document database design' },
      { name: 'RESTful APIs',    icon: <FaDatabase />, proficiency: 85, color: '#000000', detail: 'API design & docs' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git',             icon: <FaGitAlt />, proficiency: 90, color: '#F05032', detail: 'Version control workflows' },
      { name: 'Swagger', icon: <FaDatabase />, proficiency: 75, color: '#85EA2D', detail: 'API documentation' },
      { name: 'Postman',         icon: <FaDatabase />, proficiency: 80, color: '#FF6C37', detail: 'API testing' },
      { name: 'Docker',          icon: <FaDocker />, proficiency: 80, color: '#2496ED', detail: 'Containerization' },
      { name: 'Vercel',          icon: <FaDatabase />, proficiency: 70, color: '#000000', detail: 'Serverless deployments' },
      { name: 'Render',          icon: <FaDatabase />, proficiency: 65, color: '#003C87', detail: 'Managed hosting' },
      { name: 'Figma',           icon: <FaDatabase />, proficiency: 75, color: '#F24E1E', detail: 'UI/UX prototyping' },
      { name: 'GitHub ',  icon: <FaGithub />, proficiency: 70, color: '#181717', detail: 'CI/CD pipelines' },
      { name: 'CI/CD',           icon: <FaDatabase />, proficiency: 80, color: '#0088CC', detail: 'Automated workflows' },
    ],
  },
];

const Skills = forwardRef((props, ref) => {
  const theme = useTheme();
  const [openCategory, setOpenCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <Box
      component="section"
      id="skel"
      ref={ref}
      sx={{
        scrollSnapAlign: 'start',
        scrollMarginTop: 64,
        bgcolor: theme => theme.palette.background.default,
        py: { xs: 6, sm: 10 },
      }}
    >
      <Divider
        variant="fullWidth"
        sx={{
          borderBottomWidth: 2,
          borderColor: 'primary.main',
          width: { xs: 60, sm: 80, md: 100 },
          mx: 'auto',
          mb: 2,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 600,
            mb: 5,
            background: theme => `linear-gradient(90deg, #9b4886, #c08497)`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
           Tech Stack
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center" sx={{ mx: 'auto', px: 2 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={2}
                component="div"
                role="button"
                tabIndex={0}
                aria-label={`View ${category.title}`}
                onClick={() => {
                  setOpenIndex(idx);
                  setOpenCategory(category);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpenIndex(idx);
                    setOpenCategory(category);
                  }
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  p: 4,
                  width: 300,
                  height: 200,
                  bgcolor: 'linear-gradient(135deg, #333333, #444444)',
                  color: 'primary.main',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s, boxShadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.02)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', fontSize: '1.5rem', mr: 1 }}>
                    {category.title}
                  </Typography>
                  <InfoIcon sx={{ color: '#FFFFFF', opacity: 0.8 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', mb: 1 }}>
                  {category.skills.slice(0, 4).map((skill, idx) => (
                    <Box key={idx} sx={{ fontSize: 28, color: skill.color, opacity: 0.9 }}>
                      {skill.icon}
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#FFFFFF',
                      fontStyle: 'italic',
                    }}
                  >
                    Click to view 
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </motion.div>
        ))}
      </Grid>

  <Dialog
    open={!!openCategory}
    onClose={() => setOpenCategory(null)}
    fullWidth
    maxWidth="md"
    PaperProps={{
      sx: {
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 4, // add rounded corners
      }
    }}
  >
    <DialogTitle
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bgcolor: 'black',
        color: 'primary.main',
        // borderRadius removed for consistency with Dialog
        py: 1.5,
      }}
    >
          <IconButton
            size="small"
            disabled={openIndex <= 0}
            onClick={() => {
              const prev = openIndex - 1;
              setOpenIndex(prev);
              setOpenCategory(skillCategories[prev]);
            }}
            sx={{ position: 'absolute', left: 16, color: 'white' }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>

          <Typography variant="h6" sx={{ color: 'white' }}>
            {openCategory?.title}
          </Typography>

          <IconButton
            size="small"
            disabled={openIndex >= skillCategories.length - 1}
            onClick={() => {
              const next = openIndex + 1;
              setOpenIndex(next);
              setOpenCategory(skillCategories[next]);
            }}
            sx={{ position: 'absolute', right: 16, color: 'white' }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            p: 0,
            '&.MuiDialogContent-dividers': {
              borderTopWidth: '0.5px',
              borderBottomWidth: 0,
            },
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={{ px: 2, py: 2 }}
          >
            {openCategory?.skills.map((skill, i) => (
              <Grid item xs={6} sm={3} md={2} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Tooltip title={skill.detail} arrow>
                      <Box sx={{ fontSize: 32, color: skill.color, cursor: 'help' }}>
                        {skill.icon}
                      </Box>
                    </Tooltip>
                    <Typography
                      sx={{ mt: 1, fontSize: '0.9rem', color: 'text.primary', textAlign: 'center' }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'text.primary', mt: 0.5 }}
                    >
                      {(skill.proficiency / 20).toFixed(1)}/5
                    </Typography>
                    <Box sx={{ width: '100%', mt: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.proficiency}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          bgcolor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': { bgcolor: 'primary.main' },
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
          <Button onClick={() => setOpenCategory(null)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
});

export default Skills;
