// src/components/NavDots/NavDots.jsx
import React from "react";
import "./NavDots.css"; // Import its corresponding CSS file

const NavDots = ({ sections, currentSection, onDotClick }) => {
  return (
    <div className="nav-dots-container">
      {sections.map((sectionName, index) => (
        <button
          key={index}
          className={`nav-dot ${index === currentSection ? "active" : ""}`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to ${sectionName} section`}
        >
          {/* The dot itself is styled by CSS; text is for accessibility */}
        </button>
      ))}
    </div>
  );
};

export default NavDots;
