import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design', 'Framer Motion', 'Next']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'MySQL', 'REST APIs', 'Authentication']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'MongoDB Atlas', 'Vercel', 'Netlify', 'Render', 'Shopify', 'WordPress']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Quick Learner', 'Time Management', 'Adaptibility']
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
    <section id="skills" className="skills section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title gradient-text">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-category"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <motion.div className="skills-tags">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span 
                    key={skillIdx}
                    className="skill-tag"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
