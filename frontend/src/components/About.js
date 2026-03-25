import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title gradient-text">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a Computer Science graduate and Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy building modern, responsive, and scalable web applications that solve real-world problems.
              I have developed multiple projects including full-stack web applications, REST APIs, and machine learning models. My main project, Zomasta, is a food reels platform inspired by Instagram Reels, built using the MERN stack.
            </p>
            <p>
              Along with development, I also work with CMS and e-commerce platforms like WordPress and Shopify, where I design and customize websites, themes, and online stores.
              I am also interested in Artificial Intelligence, Machine Learning, and modern web technologies. I enjoy learning new tools, building projects, and continuously improving my development skills.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stat-card">
              <h3>8+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <h3>MERN</h3>
              <p>Stack Developer</p>
            </div>
            <div className="stat-card">
              <h3>AI/ML</h3>
              <p>Enthusiast</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
