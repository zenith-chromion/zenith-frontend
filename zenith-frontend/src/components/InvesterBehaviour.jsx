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
import './InvesterBehaviour.css';

const investorData = [
  {
    address: "0xA1...D3F",
    favPool: "AlphaWolf Pool",
    totalInvested: "$5,200",
    activeSince: "2024-11-10",
    holdingDuration: "7.2 months",
    actions: "Mostly Holding",
  },
  {
    address: "0x9B...7E2",
    favPool: "DeFiWhale Pool",
    totalInvested: "$3,400",
    activeSince: "2025-01-18",
    holdingDuration: "5.1 months",
    actions: "Frequent Withdrawals",
  },
  {
    address: "0xF2...CC9",
    favPool: "CrossChainX Pool",
    totalInvested: "$2,750",
    activeSince: "2025-02-07",
    holdingDuration: "4.6 months",
    actions: "Regular Top-Ups",
  },
];
const InvesterBehaviour = ({ onNavigate, currentPage }) => {
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

      <section className="investor-section">
        <div className="investor-container">
          <div className="investor-header">
            <h1 className="investor-title gradient-text">Investor Behaviour</h1>
            <p className="investor-subtitle">
              Track how investors interact with pools — insights into habits,
              preferences, and behavior trends.
            </p>
          </div>

          <div className="investor-table">
            <table>
              <thead>
                <tr>
                  <th>Wallet Address</th>
                  <th>Favorite Pool</th>
                  <th>Total Invested</th>
                  <th>Active Since</th>
                  <th>Holding Duration</th>
                  <th>Behaviour</th>
                </tr>
              </thead>
              <tbody>
                {investorData.map((inv, index) => (
                  <tr key={index}>
                    <td>{inv.address}</td>
                    <td>{inv.favPool}</td>
                    <td>{inv.totalInvested}</td>
                    <td>{inv.activeSince}</td>
                    <td>{inv.holdingDuration}</td>
                    <td>{inv.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvesterBehaviour;
