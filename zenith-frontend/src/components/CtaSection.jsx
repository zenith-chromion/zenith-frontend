// src/components/CtaSection/CtaSection.jsx
import React, { forwardRef } from "react"; // Import forwardRef
import "./CtaSection.css"; // Import its corresponding CSS file

// CtaSection now uses forwardRef to receive the ref from App.jsx
// It also accepts onNavigate from its parent (App.jsx)
const CtaSection = forwardRef((props, ref) => {
  // Destructure onNavigate from props
  const { onNavigate } = props;

  return (
    <section className="cta-section" ref={ref}>
      {" "}
      {/* Attach the ref here */}
      <div className="cta-container">
        <h2 className="cta-title">READY TO TRANSFORM YOUR TRADING?</h2>
        <p className="cta-description">
          Join the future of decentralized fund management today
        </p>
        <div className="cta-actions">
          <button className="primary-btn large">
            LAUNCH APP
            <span className="btn-arrow">→</span>
          </button>
          <button
            className="secondary-btn large"
            onClick={() => onNavigate("documentation")} // This line is changed to navigate to the 'documentation' page
          >
            READ DOCUMENTATION
          </button>
        </div>
      </div>
    </section>
  );
}); // End of forwardRef

export default CtaSection;
