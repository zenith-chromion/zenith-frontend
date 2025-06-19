// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css"; // Import its corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <span className="logo-text">ZENITHVAULT</span>
          </div>
          <p>Decentralized fund management for the next generation</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Security</a>
            <a href="#">Roadmap</a>
          </div>
          <div className="footer-column">
            <h4>Developers</h4>
            <a href="#">Documentation</a>
            <a href="#">API</a>
            <a href="#">GitHub</a>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">Forum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
