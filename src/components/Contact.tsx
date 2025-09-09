import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Feel free to reach out if you'd like to work together!</p>
            <div className="contact-links">
              <a href="mailto:just22wolf@gmail.com" className="contact-link">
                just22wolf@gmail.com
              </a>
              <a href="https://github.com/ThouWolfman" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">🔗</span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/justin-h-wolf/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
