// src/components/PageCounter/PageCounter.jsx
import React from "react";
import "./PageCounter.css"; // Import its corresponding CSS file

const PageCounter = ({ currentSection }) => {
  // Assuming 4 sections indexed 0 to 3 for Hero, Features, Process, CTA
  const totalSections = 4; // This should match the number of sections in your `sections` array in App.jsx

  // Increment currentSection by 1 for 1-based display
  return (
    <div className="page-counter-container">
      <span className="current-page-number">
        {String(currentSection + 1).padStart(2, "0")}
      </span>
      <span className="separator">/</span>
      <span className="total-pages-number">
        {String(totalSections).padStart(2, "0")}
      </span>
    </div>
  );
};

export default PageCounter;
