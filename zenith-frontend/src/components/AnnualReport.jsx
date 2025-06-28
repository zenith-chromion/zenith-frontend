import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faWallet,
  faListAlt,
  faExchangeAlt,
  faCog,
  faUsers,
  faBook,
  //   faQuestionCircle,
  //   faComments,
  faChevronDown,
  //   faUpload,
  faFileExport,
  faPlus,
  faMinus,
  faSquare,
  faBolt,
  //   faFire,
  faArrowUp,
  faArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./AnnualReport.css";

const annualData = {
  year: "2024–2025",
  totalVolume: "$192.7M",
  avgAnnualROI: "24.3%",
  newFundManagers: 28,
  newInvestors: 920,
  topFundManager: "0xAlphaWolf",
  topPool: "CrossChainX Pool",
  daoProposalsPassed: 12,
  chainsExpandedTo: ["Ethereum", "Arbitrum", "Optimism", "Base"],
  zkProofsSubmitted: 87,
};

const AnnualReport = ({ onNavigate, currentPage }) => {
  return (
    <div className="poolAndAside">
      <aside className="sidebar">
                <div className="sidebar-section">
                  <h4 className="sidebar-title">ANALYTICS</h4>
                  <ul>
                    <li  >
                      <a
                        href="#overview"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("overview");
                        }}
                        className={
                          currentPage === "overview"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                        Overview
                      </a>
      
                    </li>
                    <li >
      
                        <a
                        href="#performance"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("performance");
                        }}
                        className={
                          currentPage === "performance"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                      >
                        <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
                        Performance
                      </a>
      
      
                    </li>
                    <li>
                      <a
                        href="#riskAnalysis"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("riskAnalysis");
                        }}
                        className={
                          currentPage === "riskAnalysis"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
                        Risk Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#marketAnalysis"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("marketAnalysis");
                        }}
                        className={
                          currentPage === "marketAnalysis"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
                        Market Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investerBehaviour"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("investerBehaviour");
                        }}
                        className={
                          currentPage === "investerBehaviour"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Invester Behaviour
                      </a>
                    </li>
                  </ul>
                </div>
      
                <div className="sidebar-section">
                  <h4 className="sidebar-title">REPORTS</h4>
                  <ul>
                    <li>
                      <a
                        href="#monthlyReport"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("monthlyReport");
                        }}
                        className={
                          currentPage === "monthlyReport"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Monthly Report
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quaterelyReport"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("quaterelyReport");
                        }}
                        className={
                          currentPage === "quaterelyReport"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Quaterely Report
                      </a>
                    </li>
                    <li>
                      <a
                        href="#annualReport"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("annualReport");
                        }}
                        className={
                          currentPage === "annualReport"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Annual Report
                      </a>
                    </li>
                  </ul>
                </div>
      
                <div className="sidebar-section">
                  <h4 className="sidebar-title">TOOLS</h4>
                  <ul>
                    <li>
                      <a
                        href="#comparePools"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("comparePools");
                        }}
                        className={
                          currentPage === "comparePools"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faListAlt} className="sidebar-icon" />
                        Compare Pools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#portfolioBuilder"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("portfolioBuilder");
                        }}
                        className={
                          currentPage === "portfolioBuilder"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faWallet} className="sidebar-icon" />
                        Portfolio Builder
                      </a>
                    </li>
                    <li>
                      <a
                        href="#taxCalculator"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("taxCalculator");
                        }}
                        className={
                          currentPage === "taxCalculator"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faExchangeAlt} className="sidebar-icon" />
                        Tax Calculator
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

      <section className="annual-report-section">
        <div className="annual-container">
          <div className="annual-header">
            <h1 className="annual-title gradient-text">Annual Report</h1>
            <p className="annual-subtitle">
              FundForge protocol performance, growth, and community milestones
              across <strong>{annualData.year}</strong>.
            </p>
          </div>

          <div className="annual-grid">
            <div className="annual-card">
              <h2>Total Volume</h2>
              <p>{annualData.totalVolume}</p>
            </div>
            <div className="annual-card">
              <h2>Average ROI</h2>
              <p>{annualData.avgAnnualROI}</p>
            </div>
            <div className="annual-card">
              <h2>New Fund Managers</h2>
              <p>{annualData.newFundManagers}</p>
            </div>
            <div className="annual-card">
              <h2>New Investors</h2>
              <p>{annualData.newInvestors}</p>
            </div>
            <div className="annual-card">
              <h2>Top Fund Manager</h2>
              <p>{annualData.topFundManager}</p>
            </div>
            <div className="annual-card">
              <h2>Top Performing Pool</h2>
              <p>{annualData.topPool}</p>
            </div>
            <div className="annual-card">
              <h2>DAO Proposals Passed</h2>
              <p>{annualData.daoProposalsPassed}</p>
            </div>
            <div className="annual-card wide">
              <h2>Chains Expanded To</h2>
              <ul className="chain-list">
                {annualData.chainsExpandedTo.map((chain, index) => (
                  <li key={index}>{chain}</li>
                ))}
              </ul>
            </div>
            <div className="annual-card">
              <h2>ZK Proofs Submitted</h2>
              <p>{annualData.zkProofsSubmitted}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualReport;
