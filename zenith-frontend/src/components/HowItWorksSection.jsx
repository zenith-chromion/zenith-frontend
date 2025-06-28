// src/components/HowItWorksSection/HowItWorksSection.jsx
import React, { forwardRef } from "react"; // Import forwardRef
import "./HowItWorksSection.css"; // Import its corresponding CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faChartLine,
  faExchangeAlt,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

// HowItWorksSection now uses forwardRef to receive the ref from App.jsx
const HowItWorksSection = forwardRef((props, ref) => {
  // Receive ref as the second argument
  return (
    <div className="poolAndAside">
      <section
        className="how-it-works-section poolAndAside"
        id="how-it-works"
        ref={ref}
      >
        {" "}
        {/* Attach the ref here */}
        <div className="section-container">
          <h2 className="section-title">HOW IT WORKS</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Create or Choose</h3>
              <p>
                Skilled traders create managed pools, while investors browse and
                select fund managers based on performance and strategy.
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Invest & Trade</h3>
              <p>
                Investors deposit funds and receive LP tokens. Managers execute
                strategies across multiple chains with automated oversight.
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Earn & Grow</h3>
              <p>
                Profits are automatically distributed. Managers earn royalties,
                investors earn returns, all verified through ZK proofs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}); // End of forwardRef

export default HowItWorksSection;
