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

const poolComparisonData = [
  {
    name: "AlphaWolf Pool",
    roi: "6.4%",
    volatility: "Low",
    lockPeriod: "30 days",
    fees: "5%",
    zkVerified: true,
  },
  {
    name: "DeFiWhale Pool",
    roi: "9.2%",
    volatility: "Moderate",
    lockPeriod: "45 days",
    fees: "10%",
    zkVerified: false,
  },
  {
    name: "CrossChainX Pool",
    roi: "12.1%",
    volatility: "High",
    lockPeriod: "60 days",
    fees: "15%",
    zkVerified: true,
  },
];

import "./ComparePools.css";
const ComparePools = ({ onNavigate, currentPage }) => {
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

      <section className="compare-section">
        <div className="compare-container">
          <div className="compare-header">
            <h1 className="compare-title gradient-text">Compare Pools</h1>
            <p className="compare-subtitle">
              Analyze performance, risk, and terms of each pool before
              investing.
            </p>
          </div>

          <div className="compare-table">
            <div className="compare-row compare-header-row">
              <div className="compare-col heading">Metric</div>
              {poolComparisonData.map((pool, i) => (
                <div className="compare-col" key={i}>
                  {pool.name}
                </div>
              ))}
            </div>

            <div className="compare-row">
              <div className="compare-col heading">ROI</div>
              {poolComparisonData.map((pool, i) => (
                <div className="compare-col" key={i}>
                  {pool.roi}
                </div>
              ))}
            </div>

            <div className="compare-row">
              <div className="compare-col heading">Volatility</div>
              {poolComparisonData.map((pool, i) => (
                <div className="compare-col" key={i}>
                  {pool.volatility}
                </div>
              ))}
            </div>

            <div className="compare-row">
              <div className="compare-col heading">Lock Period</div>
              {poolComparisonData.map((pool, i) => (
                <div className="compare-col" key={i}>
                  {pool.lockPeriod}
                </div>
              ))}
            </div>

            <div className="compare-row">
              <div className="compare-col heading">Fees</div>
              {poolComparisonData.map((pool, i) => (
                <div className="compare-col" key={i}>
                  {pool.fees}
                </div>
              ))}
            </div>

            <div className="compare-row">
              <div className="compare-col heading">ZK Verified</div>
              {poolComparisonData.map((pool, i) => (
                <div className="compare-col" key={i}>
                  <span className={pool.zkVerified ? "yes" : "no"}>
                    {pool.zkVerified ? "Yes" : "No"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparePools;
