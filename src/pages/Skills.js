import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaCss3Alt, FaHtml5, FaJsSquare, 
         FaAngular, FaBootstrap, FaGithub, FaWindows, FaApple, FaUbuntu, FaAws,
         FaDatabase, FaDocker, FaCodeBranch, FaGitAlt, FaCogs, FaBrain, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiGraphql, SiMongodb, SiKubernetes, SiTailwindcss, SiFirebase } from "react-icons/si";
import { forwardRef } from 'react';

// Main Skills Component
const Skills = forwardRef((props, ref) => {
  return (
      <section id="skel"   style={sectionStyle}>
        <h2 style={headingStyle}>🚀 My Skills</h2>

        {/* Programming Languages Section */}
        <div style={categoryStyle}>
          <h3 style={subHeadingStyle}>🖥️ Programming Languages</h3>
          <div style={skillsContainerStyle}>
            <SkillItem icon={<FaPython style={{ color: "#306998" }} />} text="Python" rating={8} />
            <SkillItem icon={<FaJava style={{ color: "#ff4c4c" }} />} text="Java" rating={7} />
            <SkillItem icon={<FaJsSquare style={{ color: "#f0db4f" }} />} text="JavaScript" rating={9} />
            <SkillItem icon={<FaJsSquare style={{ color: "#3178c6" }} />} text="TypeScript" rating={8} />
            <SkillItem icon={<FaJava style={{ color: "#00a6d6" }} />} text="C++" rating={7} />
            <SkillItem icon={<FaJsSquare style={{ color: "#2b7489" }} />} text="C#" rating={7} />
          </div>
        </div>

        {/* Web Development Section */}
        <div style={categoryStyle}>
          <h3 style={subHeadingStyle}>🌐 Web Development</h3>
          <div style={skillsContainerStyle}>
            <SkillItem icon={<FaReact style={{ color: "#61dbfb" }} />} text="React.js" rating={9} />
            <SkillItem icon={<SiNextdotjs style={{ color: "#000000" }} />} text="Next.js" rating={6} />
            <SkillItem icon={<FaAngular style={{ color: "#dd1b16" }} />} text="Angular.js" rating={8} />
            <SkillItem icon={<FaHtml5 style={{ color: "#e34f26" }} />} text="HTML" rating={10} />
            <SkillItem icon={<FaCss3Alt style={{ color: "#2965f1" }} />} text="CSS" rating={9} />
            <SkillItem icon={<SiTailwindcss style={{ color: "#38b2ac" }} />} text="Tailwind CSS" rating={8} />
            <SkillItem icon={<FaBootstrap style={{ color: "#563d7c" }} />} text="Bootstrap" rating={9} />
          </div>
        </div>

        {/* Database Management Section */}
        <div style={categoryStyle}>
          <h3 style={subHeadingStyle}>💾 Database Management</h3>
          <div style={skillsContainerStyle}>
            <SkillItem icon={<FaDatabase style={{ color: "#f9cb2e" }} />} text="SQL" rating={8} />
            <SkillItem icon={<FaDatabase style={{ color: "#4e2a84" }} />} text="PostgreSQL" rating={8} />
            <SkillItem icon={<SiMongodb style={{ color: "#47a248" }} />} text="MongoDB" rating={7} />
            <SkillItem icon={<SiFirebase style={{ color: "#ffcb2f" }} />} text="Firebase" rating={8} />
            <SkillItem icon={<SiGraphql style={{ color: "#e10098" }} />} text="GraphQL" rating={7} />
          </div>
        </div>

        {/* DevOps & Cloud Section */}
        <div style={categoryStyle}>
          <h3 style={subHeadingStyle}>☁️ DevOps & Cloud</h3>
          <div style={skillsContainerStyle}>
            <SkillItem icon={<FaAws style={{ color: "#ff9900" }} />} text="AWS" rating={8} />
            <SkillItem icon={<FaCloud style={{ color: "#009cde" }} />} text="Google Cloud" rating={7} />
            <SkillItem icon={<FaDocker style={{ color: "#2496ed" }} />} text="Docker" rating={8} />
            <SkillItem icon={<SiKubernetes style={{ color: "#326ce5" }} />} text="Kubernetes" rating={7} />
            <SkillItem icon={<FaCogs style={{ color: "#6c757d" }} />} text="CI/CD Pipelines" rating={8} />
          </div>
        </div>

        {/* Version Control & OS Section */}
        <div style={categoryStyle}>
          <h3 style={subHeadingStyle}>⚙️ Version Control & OS</h3>
          <div style={skillsContainerStyle}>
            <SkillItem icon={<FaGitAlt style={{ color: "#f14e32" }} />} text="Git" rating={9} />
            <SkillItem icon={<FaGithub style={{ color: "#24292f" }} />} text="GitHub" rating={9} />
            <SkillItem icon={<FaCodeBranch style={{ color: "#1d3f67" }} />} text="GitLab" rating={7} />
            <SkillItem icon={<FaWindows style={{ color: "#00a4ef" }} />} text="Windows" rating={8} />
            <SkillItem icon={<FaApple style={{ color: "#000000" }} />} text="macOS" rating={8} />
            <SkillItem icon={<FaUbuntu style={{ color: "#e95420" }} />} text="Ubuntu" rating={7} />
          </div>
        </div>

        {/* AI/ML & Certifications Section */}
        <div style={categoryStyle}>
          <h3 style={subHeadingStyle}>🤖 AI/ML & Certifications</h3>
          <div style={skillsContainerStyle}>
            <SkillItem icon={<FaBrain style={{ color: "#ff9800" }} />} text="Machine Learning Basics" rating={6} />
            <SkillItem icon={<FaBrain style={{ color: "#673ab7" }} />} text="TensorFlow" rating={6} />
            <SkillItem icon={<FaAws style={{ color: "#ff9900" }} />} text="AWS Cloud Practitioner (In Progress)" rating={7} />
          </div>
        </div>
      </section>
  );
});

// Reusable Skill Item Component
const SkillItem = ({ icon, text, rating }) => {
  return (
    <div style={skillItemStyle}>
      <div style={iconWrapperStyle}>{icon}</div>
      <span>{text}</span>
      <span style={ratingStyle}>{rating}/10</span>
    </div>
  );
};

// 🌟 STYLES

const overlayStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "0",
  margin: 0,
  position: "relative",
  overflow: "hidden",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
};

const sectionStyle = {
  background: "rgba(255, 255, 255, 0.3)",
  padding: "40px",
  borderRadius: "15px",
  width: "80%", // Adjust the width to a percentage for better responsiveness
  maxWidth: "1200px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(10px)",
  textAlign: "center",
  color: "#000", // Changed text color to black
  overflow: "auto",
  marginTop: "80px",
  fontFamily: "'Arial', sans-serif", // Added a sans-serif font for sharpness
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // Ensures the content is centered horizontally
  marginLeft: "auto", // Centers the content horizontally
  marginRight: "auto", // Centers the content horizontally
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};


const categoryStyle = {
  marginBottom: "40px",
};

const skillItemStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  padding: "15px",
  fontSize: "1.1rem",
  color: "#000", // Set text color to black for skill items
  textAlign: "center",
  fontWeight: "bold", // Make the text bold
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease-in-out, background 0.3s",
  width: "160px",
  height: "auto",
  cursor: "pointer",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",};

const headingStyle = {
  fontSize: "3rem",
  fontWeight: "bold", // Ensure the heading is bold
  marginBottom: "30px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#000", // Black color for the heading
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

const subHeadingStyle = {
  fontSize: "2rem",
  fontWeight: "bold", // Make subheading bold
  marginBottom: "15px",
  color: "#000", // Black color for subheading
};

const skillsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const iconWrapperStyle = {
  fontSize: "2rem", // Increased size
  marginBottom: "8px",
  transition: "color 0.3s",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

const ratingStyle = {
  display: "block",
  marginTop: "10px",
  color: "#000",
};

export default Skills;
