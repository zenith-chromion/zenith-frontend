// src/components/HeroSection/HeroSection.jsx
import React, { forwardRef } from "react"; // Import forwardRef
import "./HeroSection.css"; // Import its corresponding CSS file
// import { Spline } from '@splinetool/react-spline'; // Uncomment and use if you are integrating Spline

// HeroSection now uses forwardRef to receive the ref from App.jsx
const HeroSection = forwardRef(({ mousePosition }, ref) => {
  // Receive ref as the second argument
  return (
    <section className="hero-section" ref={ref}>
      {" "}
      {/* Attach the ref here */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="announcement-badge">
            <span className="pulse-dot"></span>
            500+ traders joined today
            <span className="arrow">→</span>
          </div>

          <h1 className="hero-title">
            DECENTRALIZED
            <br />
            FUND
            <br />
            <span className="gradient-text">MANAGEMENT</span>
          </h1>

          <p className="hero-description">
            Connect skilled traders with passive investors through cross-chain
            liquidity pools. Powered by Chainlink CCIP, Automation, and
            zero-knowledge proofs for transparent, trustless fund management.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              START INVESTING
              <span className="btn-arrow">→</span>
            </button>
            <button className="secondary-btn">BECOME A MANAGER</button>
          </div>
        </div>

        <div className="hero-right">
          {/* Image is now static; parallax style removed from here */}
          <img
            src="bull.jpeg" // Your image URL (Ensure this path is correct relative to your public folder or build output)
            alt="Abstract Bull"
            className="hero-image"
            // Fallback for image loading error
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x500/333333/FFFFFF?text=Image+Error"; // Generic placeholder for error
            }}
          />
        </div>
      </div>
    </section>
  );
}); // End of forwardRef

export default HeroSection;
