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
import './RiskAnalysis.css';
const riskData = [
  {
    pool: "AlphaWolf Pool",
    riskLevel: "Low",
    volatility: "3.2%",
    zkProofs: true,
    assetConcentration: "Balanced",
  },
  {
    pool: "DeFiWhale Pool",
    riskLevel: "Moderate",
    volatility: "7.5%",
    zkProofs: false,
    assetConcentration: "High in USDT",
  },
  {
    pool: "CrossChainX Pool",
    riskLevel: "High",
    volatility: "12.1%",
    zkProofs: true,
    assetConcentration: "80% stETH",
  },
];
const RiskAnalysis = ({onNavigate, currentPage}) => {
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

         <section className="risk-analysis-section">
      <div className="risk-container">
        <div className="risk-header">
          <h1 className="risk-title gradient-text">Risk Analysis</h1>
          <p className="risk-subtitle">
            Assess fund pool risks based on volatility, asset distribution, and privacy-proofed performance.
          </p>
        </div>

        <div className="risk-grid">
          {riskData.map((item, index) => (
            <div className="risk-card" key={index}>
              <h2 className="pool-name">{item.pool}</h2>
              <div className={`risk-badge ${item.riskLevel.toLowerCase()}`}>
                {item.riskLevel} Risk
              </div>

              <div className="risk-metrics">
                <p>
                  <span className="label">Volatility:</span>{" "}
                  <span>{item.volatility}</span>
                </p>
                <p>
                  <span className="label">ZK Proofs:</span>{" "}
                  <span className={item.zkProofs ? "yes" : "no"}>
                    {item.zkProofs ? "Verified" : "Unverified"}
                  </span>
                </p>
                <p>
                  <span className="label">Asset Mix:</span>{" "}
                  <span>{item.assetConcentration}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


          
    </div>
  )
}

export default RiskAnalysis