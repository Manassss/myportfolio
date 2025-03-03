import React, { useRef } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import gifImage from '../assests/about.jpg'; 
import myImage from '../assests/profile.jpeg'; 
import { FaCode, FaGamepad, FaMusic, FaPlane, FaRocket, FaQuoteLeft } from "react-icons/fa";
import Projects from './Projects'; 
import Skills from './Skills';
import Experience from './ExperienceEducation';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to any section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Global Background GIF */}
      <div
        style={{
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: `url(${gifImage}) no-repeat center center`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          zIndex: -1, // Ensures it stays behind all content
        }}
      ></div>
      <Header />

      {/* Home Section */}
      {/* Home Section */}
<section id='home'
  className="hero d-flex align-items-center"
  style={{
    height: '100vh',
    position: 'relative', 
    zIndex: 1, // Content stays above the background
  }}
>
  <div className="container text-center" style={{ color: '#fff' }}>
    <motion.h1
      className="display-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontWeight: 'bold',
        fontSize: 'rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        color: 'black',
        fontFamily: "'Pacifico', Verdana", // Applying the cursive font
      }}
    >
Welcome!!!
      </motion.h1>
    <motion.p
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      style={{
        fontSize: '1.3rem',
        lineHeight: '1.6',
        marginBottom: '20px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        color: 'black',
        fontFamily: "'Verdana', cursive", // Applying the cursive font
      }}
    >
      I'm a full-stack developer with a passion for crafting elegant and impactful software solutions. My toolkit includes modern web technologies like React, Node.js, and Firebase, which I leverage to build innovative applications that tackle real-world challenges. I'm currently on an exciting journey into the realms of machine learning and cloud computing, eager to unlock their potential and weave them into my projects. Always learning and exploring, I'm particularly thrilled about the future of AI and mobile development, and I'm actively pursuing opportunities to expand my expertise in these areas. I believe technology has the power to shape our world, and I'm driven to be a part of that positive change.
    </motion.p>

          <motion.div
            className="my-image mt-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={myImage}
              alt="My Image"
              className="img-fluid rounded-circle shadow"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                border: '4px solid #fff',
              }}
            />
          </motion.div>

          <motion.button
            className="btn btn-primary mt-3"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundColor: '#007bff',
              borderColor: '#007bff',
              fontSize: '1.1rem',
              padding: '12px 30px',
              borderRadius: '30px',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              fontFamily: "'Pacifico', Verdana",
            }}
            onClick={() => scrollToSection(aboutRef)}
          >
            Explore My Work
          </motion.button>
        </div>
      </section>

      {/* Other Sections */}
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Blog ref={blogRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;
