import React, { forwardRef } from "react";
import { FaCode, FaGamepad, FaMusic, FaPlane, FaRocket, FaQuoteLeft } from "react-icons/fa";
import backgroundImage from "../assests/about.jpg"; // Import your image here

const About = forwardRef((props, ref) => {
  return (
    <div style={styles.pageWrapper}>
      <section id="about" ref={ref} style={styles.section}>
        {/* About Me */}
        <div style={{ ...styles.card, ...styles.aboutCard }}>
          <h2 style={styles.title}>🚀 About Me</h2>
          <p style={styles.text}>
            Hey there! I’m a full-stack developer passionate about building scalable and
            impactful applications. My journey started in Pune, India, where my fascination
            with technology turned into a career. After moving to the USA for my Master's, I’ve
            been on a mission to create next-gen software solutions that make a difference.
          </p>
          <p style={styles.highlight}>
            <FaQuoteLeft /> Code is more than syntax—it's a gateway to innovation and problem-solving.
          </p>
        </div>

        {/* What Drives Me */}
        <div style={{ ...styles.card, ...styles.driveCard }}>
          <h2 style={styles.title}>🔥 What Drives Me</h2>
          <p style={styles.text}>
            I thrive on problem-solving. Whether it’s optimizing an algorithm, designing
            a seamless UI/UX, or diving deep into cloud computing, I’m always excited about
            the next big challenge. Technology is a game-changer, and I love being part of it!
          </p>
          <p style={styles.point}><FaRocket /> Building systems that scale and perform</p>
          <p style={styles.point}><FaRocket /> Leveraging AI/ML for smarter applications</p>
          <p style={styles.point}><FaRocket /> Contributing to open-source & dev communities</p>
        </div>

        {/* Fun Facts */}
        <div style={{ ...styles.card, ...styles.funFactsCard }}>
          <h2 style={styles.title}>🎯 Fun Facts</h2>
          <p style={styles.point}><FaGamepad /> Gaming Enthusiast – Love strategy & RPGs!</p>
          <p style={styles.point}><FaMusic /> Music Lover – Coding with beats = productivity!</p>
          <p style={styles.point}><FaPlane /> Globetrotter – Exploring cultures & tech trends worldwide.</p>
          <p style={styles.point}><FaRocket /> AI Explorer – Experimenting with neural networks for fun.</p>
        </div>

        {/* Hobbies & Interests */}
        <div style={{ ...styles.card, ...styles.hobbiesCard }}>
          <h2 style={styles.title}>💡 Hobbies & Interests</h2>
          <p style={styles.text}>
            Beyond coding, I’m an avid learner. Whether it’s designing sleek UI components,
            brainstorming startup ideas, or attending hackathons, I keep my curiosity alive.
          </p>
          <p style={styles.point}><FaGamepad /> Competitive gaming (because strategy matters!)</p>
          <p style={styles.point}><FaMusic /> Music & sound design (for creativity & focus)</p>
          <p style={styles.point}><FaPlane /> Tech meetups & conferences</p>
          <p style={styles.point}><FaRocket /> Experimenting with **machine learning models</p>
        </div>
      </section>
    </div>
  );
});

// Styling
const styles = {
  pageWrapper: {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image here
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    color: "#e2e8f0",
    fontFamily: "'Verdana', sans-serif",
  },
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "50px",
    zIndex: 1,
  },
  card: {
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Added transparency for contrast
  },
  aboutCard: {
    background: "linear-gradient(135deg, #1e293b, #334155)",
    borderLeft: "4px solid #eab308",
  },
  driveCard: {
    background: "linear-gradient(135deg, #1e293b, #4c51bf)",
    borderLeft: "4px solid #6366f1",
  },
  funFactsCard: {
    background: "linear-gradient(135deg, #1e293b, #dc2626)",
    borderLeft: "4px solid #f87171",
  },
  hobbiesCard: {
    background: "linear-gradient(135deg, #1e293b, #0ea5e9)",
    borderLeft: "4px solid #38bdf8",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "15px",
    fontFamily: "'Verdana', sans-serif",

  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    fontFamily: "'Verdana', sans-serif",

  },
  highlight: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: "15px",
    color: "#facc15",
    fontFamily: "'Verdana', sans-serif",

  },
  point: {
    fontSize: "1.1rem",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default About;
