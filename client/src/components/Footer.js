import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-buttons">
          <Link to="/" className="footer-btn">Home</Link>
          <Link to="/current-issues" className="footer-btn">Current Issues</Link>
          <Link to="/archives" className="footer-btn">Archives</Link>
        </div>
        
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>📞 +91 79045620167</p>
          <p>✉️ kungumaraj@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
