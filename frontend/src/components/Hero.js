import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ashadeep Pan</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | MERN | AI/ML Enthusiast
          </p>
          <p className="hero-description">
            I build modern full-stack web applications, REST APIs, and AI/ML solutions.
            Passionate about problem solving, scalable systems, and clean UI design.
            <p>Always learning, always building.</p>
            <p>Available for: Full-time / Internship / Freelance</p>
            <p>📍 Kolkata, India</p>
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="hero-buttons"
        >
          <button className="btn btn-primary" onClick={scrollToContact}>
            📩 Get In Touch
          </button>
          <a
            className="btn btn-secondary"
            href="/Ashadeep_Pan_CV.pdf"
            download="Ashadeep_Pan_CV.pdf"
            target="_self"
            rel="noopener noreferrer"
          >
            📄 Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-decoration"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <div className="decoration-cube">
          <img 
            src="/Portfolio_photo.jpeg" // Update this path to your actual photo file
            alt="Ashadeep Pan" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '18px' // slightly less than 20px to account for border
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
