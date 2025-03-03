import React, { forwardRef } from 'react';
import myImage from '../assests/rest.png'; // Ensure the path is correct

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      image: myImage,
      alt: "Restaurant Website Image", 
      githubLink: "https://manassss.github.io/Restraunt_react/"
    },
    {
      id: 2,
      title: "Restaurant Website",
      image: myImage,
      alt: "Restaurant Website Image", 
      githubLink: "https://manassss.github.io/Restraunt_react/"
    },
    {
      id: 3,
      title: "Restaurant Website",
      image: myImage,
      alt: "Restaurant Website Image", 
      githubLink: "https://manassss.github.io/Restraunt_react/"
    },
  ];

  return (
    <section id="projects" className="projects" style={styles.section} ref={ref}>
      <h2 style={styles.heading}>My Projects</h2>
      <div className="row" style={styles.row}>
        {projects.map(project => (
          <div key={project.id} className="col-md-4" style={styles.col}>
            <div className="card" style={styles.card}>
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.alt || project.title} 
                  className="card-img-top" 
                  style={styles.cardImage}
                />
              )}
              <div className="card-body">
                <h5 className="card-title" style={styles.cardTitle}>{project.title}</h5>
                <a href={project.githubLink} className="btn btn-primary" style={styles.button}>
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

const styles = {
  section: {
    padding: '50px',
    color: '#fff',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    fontFamily: "'Verdana', sans-serif",

  },
  heading: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '30px',
    color: 'black',
    fontFamily: "'Verdana', sans-serif",
    fontWeight: "bold",


  },
  row: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  col: {
    flex: '1 0 30%',
    maxWidth: '30%',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: 'black',
    fontFamily: "'Verdana', sans-serif",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontSize: '1.1rem',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'none',
    fontFamily: "'Verdana', sans-serif",
    fontWeight: "bold",
  }
};

export default Projects;
