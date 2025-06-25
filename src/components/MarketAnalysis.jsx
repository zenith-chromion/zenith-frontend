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
import './MarketAnalysis.css';

const marketStats = [
  {
    title: "Total Value Locked (TVL)",
    value: "$21.6M",
    change: "+3.4%",
  },
  {
    title: "Top Performing Token",
    value: "ETH",
    change: "+6.1%",
  },
  {
    title: "Most Traded Pool",
    value: "AlphaWolf Pool",
    change: "+12.7%",
  },
  {
    title: "Volatility Index",
    value: "Low",
    change: "-8.2%",
  },
];
const MarketAnalysis = ({onNavigate, currentPage}) => {
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

        <section className="market-analysis-section">
      <div className="market-container">
        <div className="market-header">
          <h1 className="market-title gradient-text">Market Analysis</h1>
          <p className="market-subtitle">
            Stay ahead with real-time insights into pool trends, DeFi activity, and token movements.
          </p>
        </div>

        <div className="market-grid">
          {marketStats.map((stat, index) => (
            <div className="market-card" key={index}>
              <h2 className="stat-title">{stat.title}</h2>
              <p className="stat-value">{stat.value}</p>
              <p
                className={`stat-change ${
                  stat.change.startsWith("-") ? "negative" : "positive"
                }`}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>



    </div>
  )
}

export default MarketAnalysis;