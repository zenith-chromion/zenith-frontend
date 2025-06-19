// src/components/Header/Header.jsx
import React from "react";
import "./Header.css"; // Import its corresponding CSS file

// Header component now accepts onNavigate and currentPage as props
const Header = ({ onNavigate, currentPage }) => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <span
            className="logo-text"
            onClick={() => onNavigate("landing")}
            style={{ cursor: "pointer" }}
          >
            ZENITHVAULT
          </span>
        </div>
        <nav className="nav-menu">
          {/* Dashboard link */}
          <a
            href="#dashboard"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("dashboard");
            }}
            className={currentPage === "dashboard" ? "active" : ""}
          >
            Dashboard
          </a>
          {/* Pools link */}
          <a
            href="#pools"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("pools");
            }}
            className={currentPage === "pools" ? "active" : ""}
          >
            Pools
          </a>
          {/* Analytics link */}
          <a
            href="#analytics"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("analytics");
            }}
            className={currentPage === "analytics" ? "active" : ""}
          >
            Analytics
          </a>
          {/* Governance link */}
          <a
            href="#governance"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("governance");
            }}
            className={currentPage === "governance" ? "active" : ""}
          >
            Governance
          </a>
          <button className="connect-wallet-btn">Connect Wallet</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
