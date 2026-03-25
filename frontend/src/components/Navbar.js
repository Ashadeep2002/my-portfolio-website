import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-icon">👨‍💻</span>
          <span>Portfolio</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button 
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
