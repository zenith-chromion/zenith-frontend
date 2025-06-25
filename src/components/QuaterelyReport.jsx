import React from 'react'

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
import './QuaterelyReport.css';

const quarterlyData = {
  quarter: "Q2 2025",
  cumulativeVolume: "$54.2M",
  avgQuarterlyROI: "15.8%",
  newFundManagers: 6,
  newInvestors: 128,
  topPerformingPool: "DeFiWhale Pool",
  chainActivity: {
    ethereum: "$22M",
    arbitrum: "$17.5M",
    optimism: "$14.7M",
  },
  zkProofsVerified: 21,
};

const QuaterelyReport = ({onNavigate, currentPage}) => {
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

        <section className="quarterly-report-section">
      <div className="quarterly-container">
        <div className="quarterly-header">
          <h1 className="quarterly-title gradient-text">Quarterly Report</h1>
          <p className="quarterly-subtitle">
            A protocol-wide summary for <strong>{quarterlyData.quarter}</strong>, highlighting performance, adoption, and impact.
          </p>
        </div>

        <div className="quarterly-grid">
          <div className="quarterly-card">
            <h2>Cumulative Volume</h2>
            <p>{quarterlyData.cumulativeVolume}</p>
          </div>
          <div className="quarterly-card">
            <h2>Average ROI</h2>
            <p>{quarterlyData.avgQuarterlyROI}</p>
          </div>
          <div className="quarterly-card">
            <h2>New Fund Managers</h2>
            <p>{quarterlyData.newFundManagers}</p>
          </div>
          <div className="quarterly-card">
            <h2>New Investors</h2>
            <p>{quarterlyData.newInvestors}</p>
          </div>
          <div className="quarterly-card">
            <h2>Top Pool</h2>
            <p>{quarterlyData.topPerformingPool}</p>
          </div>
          <div className="quarterly-card">
            <h2>ZK Proofs Verified</h2>
            <p>{quarterlyData.zkProofsVerified}</p>
          </div>
          <div className="quarterly-card wide">
            <h2>Chain Activity</h2>
            <ul className="chain-list">
              <li><strong>Ethereum:</strong> {quarterlyData.chainActivity.ethereum}</li>
              <li><strong>Arbitrum:</strong> {quarterlyData.chainActivity.arbitrum}</li>
              <li><strong>Optimism:</strong> {quarterlyData.chainActivity.optimism}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


              
    </div>
  )
}

export default QuaterelyReport