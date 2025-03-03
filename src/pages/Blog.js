import React from 'react';

const Blog = () => {
  return (
    <section id="blog">
      <h2>Blog</h2>

      <div className="blog-cards">
        <div className="blog-card">
          <h3>Generative AI: The Future of Creativity</h3>
          <p>
            Generative AI is transforming industries by enabling machines to create new, original content such as images, music, and even code. This technology allows for endless creative possibilities, where artificial intelligence can assist in everything from art creation to content generation. In this blog, we dive into the potential of generative AI and its impact on creativity across various fields.
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>

        <div className="blog-card">
          <h3>Innovation: Fueling the Next Wave of Tech</h3>
          <p>
            Innovation has always been the driving force behind progress in technology. From the advent of the internet to the rise of cloud computing, breakthroughs in innovation have changed the world. In this blog, we explore the importance of fostering a culture of innovation and how it leads to breakthroughs in tech, business, and society.
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>

      <style jsx>{`
        h2 {
          text-align: center;
          padding: 20px;
          font-size: 5rem; /* Increases font size */
          fontFamily: "'Verdana', sans-serif",
          fontWeight: "bold",
        }
        .blog-cards {
          display: flex;
          justify-content: center;
          gap: 500px; /* Increased gap between cards */
          flex-wrap: wrap;
          padding-top: 20px;
          fontFamily: "'Verdana', sans-serif",
          fontWeight: "bold",
          
        }
        .blog-card {
          background-color: transparent;
          border-radius: 10px;
          padding: 20px;
          width: 300px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
          font-size: 1.1rem; /* Increases font size */
          fontFamily: "'Verdana', sans-serif",
          fontWeight: "bold",
        }
        .blog-card h3 {
              font-size: 2rem; /* Makes the title bigger */
              margin-bottom: 10px;
              fontFamily: "'Verdana', sans-serif",
              fontWeight: "bold",
        }
        .blog-card p {
              font-size: 1.2rem; /* Increases the content font size */
              fontFamily: "'Verdana', sans-serif",
              fontWeight: "bold",
        }
        .blog-card:hover {
          transform: translateY(-10px);
        }
.read-more {
  color:white;
  text-decoration: none;
  font-family: 'Verdana', sans-serif; /* Corrected property name */
  font-weight: bold;  
  background-color: blue; /* Corrected background color */
  padding: 10px 20px; /* Added padding for better button appearance */
  border-radius: 5px; /* Optional: adds rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

.read-more:hover {
  text-decoration: underline;
  
}

      `}</style>
    </section>
  );
};

export default Blog;
