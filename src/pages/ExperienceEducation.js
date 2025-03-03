import React from "react";

const timelineData = {
  education: [
    {
      year: "May 2022",
      title: "Bachelor of Engineering (BE) in Computer Engineering",
      institution: "All India Shree Shivaji Memorial Society (Institute of Information Technology), Pune, India",
      details: "GPA: 3.33",
    },
    {
      year: "September 2022 – June 2023",
      title: "Software Engineer",
      company: "Cybage Software Pvt Ltd, Pune, India",
      details: [
        "Delivered critical front-end solutions, achieving 100% on-time delivery across multiple releases.",
        "Led efforts to reduce front-end errors by 30%, troubleshooting UI/UX and performance issues.",
        "Optimized website performance, increasing user satisfaction by 15%.",
        "Developed and maintained web applications, enhancing system scalability and efficiency.",
        "Implemented best coding practices and automated testing strategies, ensuring high-quality deployment.",
      ],
    },
    {
      year: "September 2024 – Present",
      title: "Full Stack Developer Intern",
      company: "99 Yards, New York City, NY",
      details: [
        "Developed and maintained a dynamic admin dashboard, integrating Firebase API to manage client data.",
        "Designed and executed a Python-based web scraping script to extract essential client website details.",
        "Assisted in front-end and back-end development, ensuring seamless integration of React.js, Firebase, and Node.js.",
        "Conducted rigorous iOS mobile application testing, enhancing cross-device compatibility.",
        "Managed and deployed website updates, optimizing performance and user engagement.",
      ],
    },

    {
      year: "May 2025",
      title: "Master of Science (MS) in Computer Science",
      institution: "Pace University, Seidenberg School of Computer Science and Information Systems, NY, USA",
      details: "Concentration: Computer Science | GPA: 3.95",
    },

  ],
  experience: [
    
  ],
};

const Timeline = () => {
  return (
    <section id="experience">
    <div className="timeline">
      <div style={overlayStyle}>
        <h2 style={sectionHeadingStyle}>📌 My Journey</h2>
        <div style={timelineContainerStyle}>
          {timelineData.education.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
          {timelineData.experience.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

const TimelineItem = ({ item }) => {
  return (
    <div style={timelineItemStyle}>
      <div style={timelineContentStyle}>
        <h3 style={titleStyle}>{item.title}</h3>
        <h4 style={institutionStyle}>{item.institution || item.company}</h4>
        <h5 style={yearStyle}>{item.year}</h5>
        {Array.isArray(item.details) ? (
          <ul>
            {item.details.map((point, index) => (
              <li key={index} style={listItemStyle}>{point}</li>
            ))}
          </ul>
        ) : (
          <p style={detailsStyle}>{item.details}</p>
        )}
      </div>
    </div>
  );
};

// Styles
const overlayStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "40px 0",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

const sectionHeadingStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#003366", // Dark blue color
  textAlign: "center",
  marginBottom: "30px",
};

const timelineContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  width: "80%",
  maxWidth: "800px",
};

const timelineItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  width: "100%",
  marginBottom: "40px",
  paddingLeft: "20px",
  borderLeft: "4px solid #007bff",
};

const timelineContentStyle = {
  backgroundColor: "#f8f9fa",
  padding: "15px 20px",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  width: "90%",
};

const titleStyle = {
  fontSize: "1.5rem",
  color: "#007bff",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

const institutionStyle = {
  fontSize: "1.2rem",
  color: "#555",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

const yearStyle = {
  fontSize: "1.1rem",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
  color: "#777",
  marginBottom: "10px",
};

const detailsStyle = {
  fontSize: "1rem",
  color: "#333",
};

const listItemStyle = {
  fontSize: "1rem",
  color: "#333",
  marginBottom: "5px",
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

export default Timeline;
