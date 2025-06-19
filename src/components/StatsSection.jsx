// src/components/StatsSection/StatsSection.jsx
import React from "react";
import "./StatsSection.css"; // Import its corresponding CSS file

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <h3 className="stat-number">$50M+</h3>
          <p className="stat-label">Total Value Locked</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">150+</h3>
          <p className="stat-label">Active Managers</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">5+</h3>
          <p className="stat-label">Supported Chains</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">10K+</h3>
          <p className="stat-label">Investors</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
