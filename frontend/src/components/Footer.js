import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/Ashadeep2002' },
    { icon: '💼', label: 'LinkedIn', url: 'www.linkedin.com/in/ashadeep-pan' },
    { icon: '📷', label: 'Instagram', url: 'https://instagram.com/ashad_e_e_p' }
  ];

  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="footer-content"
      >
        <div className="footer-section">
          <h3>Let's Build Something Great 🚀</h3>
          <p>Always open to new opportunities and collaborations</p>
        </div>

        <div className="social-links">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Ashadeep Pan. All rights reserved.</p>
          <p>Designed & Built with ❤️ in INDIA </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
