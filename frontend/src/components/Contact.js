import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const API_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API_URL}/api/contact`, formData);

      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title gradient-text">Get In Touch</h2>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>Have a project idea in mind or want to discuss opportunities? Feel free to reach out!</p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <p className="label">Email</p>
                  <a href="mailto:ashadeeppan18@gmail.com">ashadeeppan18@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <span className="icon">💼</span>
                <div>
                  <p className="label">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/ashadeep-pan" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/ashadeep-pan
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <span className="icon">🐙</span>
                <div>
                  <p className="label">GitHub</p>
                  <a href="https://github.com/Ashadeep2002" target="_blank" rel="noopener noreferrer">
                    github.com/Ashadeep2002
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message Subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`status-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;