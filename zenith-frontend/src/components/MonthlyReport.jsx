import React from 'react'

import './MonthlyReport.css';
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

const reportData = {
  month: "June 2025",
  totalVolume: "$18.4M",
  avgROI: "6.2%",
  activeFundManagers: 14,
  totalInvestors: 312,
  topPool: "AlphaWolf Pool",
  newPoolsCreated: 5,
  avgHoldingTime: "4.7 months",
  zkVerifiedSubmissions: 9,
};
const MonthlyReport = ({onNavigate, currentPage}) => {
  
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

         <section className="report-section">
      <div className="report-container">
        <div className="report-header">
          <h1 className="report-title gradient-text">Monthly Report</h1>
          <p className="report-subtitle">
            A comprehensive overview of protocol activity and growth for <strong>{reportData.month}</strong>.
          </p>
        </div>

        <div className="report-grid">
          <div className="report-item">
            <h2>Total Volume</h2>
            <p>{reportData.totalVolume}</p>
          </div>
          <div className="report-item">
            <h2>Average ROI</h2>
            <p>{reportData.avgROI}</p>
          </div>
          <div className="report-item">
            <h2>Active Fund Managers</h2>
            <p>{reportData.activeFundManagers}</p>
          </div>
          <div className="report-item">
            <h2>Total Investors</h2>
            <p>{reportData.totalInvestors}</p>
          </div>
          <div className="report-item">
            <h2>Top Pool</h2>
            <p>{reportData.topPool}</p>
          </div>
          <div className="report-item">
            <h2>New Pools Created</h2>
            <p>{reportData.newPoolsCreated}</p>
          </div>
          <div className="report-item">
            <h2>Avg. Holding Time</h2>
            <p>{reportData.avgHoldingTime}</p>
          </div>
          <div className="report-item">
            <h2>ZK-Verified Proofs</h2>
            <p>{reportData.zkVerifiedSubmissions}</p>
          </div>
        </div>
      </div>
    </section>



    </div>
  )
}

export default MonthlyReport