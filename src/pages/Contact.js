import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <div style={cardStyle}>
        <h1>Contact Me</h1>
        <p style={emailStyle}>Email: <a href="mailto:manas.mandlecha.career@gmail.com">manas.mandlecha.career@gmail.com</a></p>
        
        {/* Resume Download Section */}
        <div style={resumeSectionStyle}>
          <a 
            href="/Manas-Resume.pdf"  // This is the path to your PDF file in the public folder
            download 
            style={downloadLinkStyle}
          >
            📥 Download My Resume
          </a>
        </div>
        
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '600px',
  textAlign: 'center',
};

const emailStyle = {
  marginBottom: '20px',
  fontSize: '1rem',
  color: '#333',
  fontFamily: "'Verdana', sans-serif",
  fontWeight: "bold",
};

const resumeSectionStyle = {
  marginBottom: '20px',
};

const downloadLinkStyle = {
  fontSize: '1.2rem',
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontFamily: "'Verdana', sans-serif",

};


export default Contact;
