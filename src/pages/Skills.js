import React, { forwardRef, useState } from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5,
  FaCss3Alt, FaJsSquare, FaDatabase, FaGitAlt, FaGithub, FaDocker, FaBrain,
} from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiScikitlearn, SiNextdotjs, SiTypescript,
  SiCplusplus, SiPandas, SiNumpy, SiOpenai, SiSpringboot, SiPostgresql, SiExpress,
} from 'react-icons/si';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';

const skillCategories = [
  {
    title: 'Languages',
    color: '#61DAFB',
    skills: [
      { name: 'JavaScript', icon: <FaJsSquare />,  color: '#F7DF1E', context: 'production' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', context: 'production' },
      { name: 'Python',     icon: <FaPython />,     color: '#3776AB', context: 'production' },
      { name: 'Java',       icon: <FaJava />,       color: '#5382A1', context: 'production' },
      { name: 'SQL',        icon: <FaDatabase />,   color: '#4479A1', context: 'production' },
      { name: 'C++',        icon: <SiCplusplus />,  color: '#00599C', context: 'project'    },
    ],
  },
  {
    title: 'Frontend',
    color: '#c08497',
    skills: [
      { name: 'React.js',    icon: <FaReact />,     color: '#61DAFB', context: 'production' },
      { name: 'Angular',     icon: <FaReact />,     color: '#DD0031', context: 'production' },
      { name: 'Redux',       icon: <FaDatabase />,  color: '#764ABC', context: 'production' },
      { name: 'HTML5',       icon: <FaHtml5 />,     color: '#E34F26', context: 'production' },
      { name: 'CSS3',        icon: <FaCss3Alt />,   color: '#264DE4', context: 'production' },
      { name: 'Next.js',     icon: <SiNextdotjs />, color: '#ffffff', context: 'project'    },
      { name: 'Bootstrap',   icon: <FaCss3Alt />,   color: '#7952B3', context: 'project'    },
      { name: 'Material UI', icon: <FaCss3Alt />,   color: '#0081CB', context: 'project'    },
    ],
  },
  {
    title: 'Backend & Databases',
    color: '#339933',
    skills: [
      { name: 'Node.js',     icon: <FaNodeJs />,     color: '#339933', context: 'production' },
      { name: 'Express.js',  icon: <SiExpress />,    color: '#ffffff', context: 'production' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F', context: 'production' },
      { name: 'Firebase',    icon: <SiFirebase />,   color: '#FFCA28', context: 'production' },
      { name: 'PostgreSQL',  icon: <SiPostgresql />, color: '#336791', context: 'production' },
      { name: 'MongoDB',     icon: <SiMongodb />,    color: '#47A248', context: 'production' },
      { name: 'REST APIs',   icon: <FaDatabase />,   color: '#9b4886', context: 'production' },
    ],
  },
  {
    title: 'AI / ML',
    color: '#F7931E',
    skills: [
      { name: 'Scikit-learn',  icon: <SiScikitlearn />, color: '#F7931E', context: 'production' },
      { name: 'Pandas',        icon: <SiPandas />,      color: '#150458', context: 'production' },
      { name: 'NumPy',         icon: <SiNumpy />,       color: '#4DABCF', context: 'production' },
      { name: 'Time-Series',   icon: <FaBrain />,       color: '#9b4886', context: 'production' },
      { name: 'Regression',    icon: <FaBrain />,       color: '#c08497', context: 'production' },
      { name: 'OpenAI API',    icon: <SiOpenai />,      color: '#412991', context: 'project'    },
      { name: 'Feature Eng.',  icon: <FaBrain />,       color: '#9b4886', context: 'production' },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#F05032',
    skills: [
      { name: 'Git',      icon: <FaGitAlt />,   color: '#F05032', context: 'production' },
      { name: 'Docker',   icon: <FaDocker />,   color: '#2496ED', context: 'production' },
      { name: 'CI/CD',    icon: <FaGithub />,   color: '#ffffff', context: 'production' },
      { name: 'Postman',  icon: <FaDatabase />, color: '#FF6C37', context: 'production' },
      { name: 'Swagger',  icon: <FaDatabase />, color: '#85EA2D', context: 'production' },
      { name: 'Vercel',   icon: <FaDatabase />, color: '#ffffff', context: 'project'    },
      { name: 'Figma',    icon: <FaDatabase />, color: '#F24E1E', context: 'project'    },
    ],
  },
];

const SkillChip = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const isProd = skill.context === 'production';

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        title={isProd ? 'Used in production' : 'Used in personal projects'}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.7,
          px: 1.5, py: 0.55,
          borderRadius: '20px',
          fontSize: '0.78rem',
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          cursor: 'default',
          userSelect: 'none',
          transition: 'all 0.25s',
          ...(isProd
            ? {
                bgcolor: 'rgba(155,72,134,0.18)',
                border:  '1px solid rgba(155,72,134,0.5)',
                color:   '#c08497',
                ...(hovered && {
                  bgcolor:   'rgba(155,72,134,0.28)',
                  borderColor: '#9b4886',
                  boxShadow: `0 0 12px rgba(155,72,134,0.35)`,
                }),
              }
            : {
                bgcolor: 'rgba(255,255,255,0.04)',
                border:  '1px solid rgba(255,255,255,0.1)',
                color:   'text.secondary',
                ...(hovered && {
                  bgcolor:   'rgba(255,255,255,0.07)',
                  borderColor: 'rgba(255,255,255,0.2)',
                }),
              }
          ),
        }}
      >
        <Box sx={{
          fontSize: 13, display: 'flex', alignItems: 'center',
          color: isProd ? skill.color : 'inherit',
          filter: hovered ? `drop-shadow(0 0 4px ${skill.color}88)` : 'none',
          transition: 'filter 0.25s',
        }}>
          {skill.icon}
        </Box>
        {skill.name}
      </Box>
    </motion.div>
  );
};

const Skills = forwardRef((props, ref) => (
  <Box
    component="section"
    id="skel"
    ref={ref}
    sx={{
      scrollSnapAlign: 'start',
      scrollMarginTop: 64,
      bgcolor: '#06060f',
      py: { xs: 8, sm: 14 },
    }}
  >
    <Container maxWidth="lg">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" align="center" sx={{
          fontWeight: 700, mb: 1,
          background: 'linear-gradient(90deg, #9b4886, #c08497)',
          WebkitBackgroundClip: 'text', color: 'transparent',
        }}>
          Tech Stack
        </Typography>

        {/* Legend */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 7 }}>
          {[
            { dot: true,  label: 'Production Use' },
            { dot: false, label: 'Personal Projects' },
          ].map((item) => (
            <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 10, height: 10, borderRadius: '50%',
                ...(item.dot
                  ? { bgcolor: 'rgba(155,72,134,0.7)', border: '1px solid #9b4886', boxShadow: '0 0 6px rgba(155,72,134,0.5)' }
                  : { border: '1px solid rgba(255,255,255,0.2)', bgcolor: 'transparent' }
                ),
              }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.75rem' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </motion.div>

      {/* Category rows */}
      {skillCategories.map((cat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.07 }}
        >
          <Box sx={{
            mb: 3,
            p: { xs: 2.5, sm: 3.5 },
            borderRadius: 3,
            bgcolor: 'background.paper',
            border: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.3s',
            '&:hover': { borderColor: `${cat.color}33` },
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 3,
              background: `linear-gradient(180deg, ${cat.color}aa, transparent)`,
              borderRadius: '3px 0 0 3px',
            },
          }}>
            <Typography variant="overline" sx={{
              color: cat.color,
              fontWeight: 700,
              letterSpacing: '2px',
              fontSize: '0.68rem',
              display: 'block',
              mb: 2,
              opacity: 0.85,
            }}>
              {cat.title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cat.skills.map((skill, si) => (
                <SkillChip key={si} skill={skill} />
              ))}
            </Box>
          </Box>
        </motion.div>
      ))}
    </Container>
  </Box>
));

export default Skills;
