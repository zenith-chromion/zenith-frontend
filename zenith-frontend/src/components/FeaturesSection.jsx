// src/components/FeaturesSection/FeaturesSection.jsx
import React, { forwardRef } from "react"; // Import forwardRef
import "./FeaturesSection.css"; // Import its corresponding CSS file

// FeaturesSection now uses forwardRef to receive the ref from App.jsx
const FeaturesSection = forwardRef((props, ref) => {
  return (
    <section className="features-section" id="features" ref={ref}>
      {" "}
      {/* Attach the ref here */}
      <div className="section-container">
        <h2 className="section-title">
          BUILT FOR THE <span className="gradient-text">FUTURE</span>
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Cross-Chain Liquidity</h3>
            <p>
              Seamlessly move funds across multiple blockchains using Chainlink
              CCIP for maximum flexibility and opportunity.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Zero-Knowledge Privacy</h3>
            <p>
              Verify trading performance without revealing strategies. ZK proofs
              ensure trust while protecting intellectual property.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Automated Execution</h3>
            <p>
              Chainlink Automation handles rebalancing, profit distribution, and
              governance execution without manual intervention.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>DAO Governance</h3>
            <p>
              Community-driven decisions on tier structures, fee adjustments,
              and protocol upgrades through decentralized voting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}); // End of forwardRef

export default FeaturesSection;
