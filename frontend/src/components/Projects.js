import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Zomasta - Food Reels Platform',
      description: 'Full-stack MERN web application where food partners upload short food videos for users to explore, like and save.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'RESTAPI', 'Authentication'],
      link: 'https://ashadeep2002.github.io/Zomasta/#/',
      color: '#667eea'
    },
    {
      id: 2,
      title: 'PassMAN - Password Manager',
      description: 'Password Manager interface for securely storing and managing user credentials with CRUD operations and secure backend integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Authentication'],
      link: 'https://ashadeep2002.github.io/PassMan-Frontend/',
      color: '#764ba2'
    },
    {
      id: 3,
      title: 'TODO List - React',
      description: 'Responsive task management application built with React and Tailwind CSS for managing daily tasks with clean UI and fast performance.',
      tech: ['React','JavaScript', 'TailwindCSS'],
      link: 'https://ashadeep2002.github.io/todo-list-forDailyLife/',
      color: '#f093fb'
    },
    {
      id: 4,
      title: 'Heart Disease Risk Prediction using ML',
      description: 'Machine learning project that predicts heart disease risk using medical data with data preprocessing, visualization, and classification models.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      link: 'https://github.com/Ashadeep2002/Heart_Disease_Prediction',
      color: '#00d4ff'
    },
    {
      id: 5,
      title: 'Spotify web Player',
      description: 'Spotify-inspired web music player built with HTML, CSS, and JavaScript with play, pause, seek bar, and dynamic song loading.',
      tech: ['HTML', 'CSS', 'Javascript'],
      link: 'https://homeofsongs.netlify.app/',
      color: '#667eea'
    },
    {
      id: 6,
      title: 'Slot Machine - Node.js',
      description: 'Command-line slot machine game built using Node.js where users can deposit, bet, spin reels, and win based on matching symbols.',
      tech: [ 'Node.js', 'JavaScript' ],
      link: 'https://github.com/Ashadeep2002/Asha-s_Slot_Machine_',
      color: '#764ba2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="projects section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title gradient-text">Featured Projects</h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ borderLeft: `4px solid ${project.color}` }}
            >
              <div className="project-header">
                <span className="project-icon">📁</span>
                <a href={project.link} className="project-link">→</a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
