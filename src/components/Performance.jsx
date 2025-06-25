// src/pages/Performance.jsx
import React from "react";
import "./Performance.css";
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
const fundManagers = [
  {
    name: "AlphaWolf",
    tier: "Tier 1",
    pnl: "+23.5%",
    roi: "19.2%",
    verified: true,
    strategy: "DeFi Arbitrage",
  },
  {
    name: "DeFiWhale",
    tier: "Tier 2",
    pnl: "+12.8%",
    roi: "10.1%",
    verified: false,
    strategy: "Yield Farming",
  },
  {
    name: "CrossChainX",
    tier: "Tier 3",
    pnl: "-4.5%",
    roi: "-2.3%",
    verified: true,
    strategy: "Cross-chain Trading",
  },
];

const Performance = () => {
  return (
    <div className="performance">
        <aside className="sidebar">
                  <div className="sidebar-section">
                    <h4 className="sidebar-title">ANALYTICS</h4>
                    <ul>
                      <li>
                        <a href="#overview" className="sidebar-link active">
                          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />{" "}
                          {/* Using faHome for Overview as per image */}
                          Overview
                        </a>
                      </li>
                      <li>
                        <a href="#performance" className="sidebar-link">
                          <FontAwesomeIcon
                            icon={faChartLine}
                            className="sidebar-icon"
                          />
                          Performance
                        </a>
                      </li>
                      <li>
                        <a href="#asset-allocation" className="sidebar-link">
                          <FontAwesomeIcon icon={faWallet} className="sidebar-icon" />{" "}
                          {/* Using faWallet for Asset Allocation */}
                          Asset Allocation
                        </a>
                      </li>
                      <li>
                        <a href="#risk-analysis" className="sidebar-link">
                          <FontAwesomeIcon icon={faCog} className="sidebar-icon" />{" "}
                          {/* Using faCog for Risk Analysis */}
                          Risk Analysis
                        </a>
                      </li>
                      <li>
                        <a href="#market-analysis" className="sidebar-link">
                          <FontAwesomeIcon
                            icon={faChartLine}
                            className="sidebar-icon"
                          />{" "}
                          {/* Reusing faChartLine for Market Analysis */}
                          Market Analysis
                        </a>
                      </li>
                      <li>
                        <a href="#investor-behavior" className="sidebar-link">
                          <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />{" "}
                          {/* Using faUsers for Investor Behavior */}
                          Investor Behavior
                        </a>
                      </li>
                    </ul>
                  </div>
        
                  <div className="sidebar-section">
                    <h4 className="sidebar-title">REPORTS</h4>
                    <ul>
                      <li>
                        <a href="#monthly-report" className="sidebar-link">
                          <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                          Monthly Report
                        </a>
                      </li>
                      <li>
                        <a href="#quarterly-report" className="sidebar-link">
                          <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                          Quarterly Report
                        </a>
                      </li>
                      <li>
                        <a href="#annual-report" className="sidebar-link">
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
                        <a href="#compare-pools" className="sidebar-link">
                          <FontAwesomeIcon icon={faListAlt} className="sidebar-icon" />
                          Compare Pools
                        </a>
                      </li>
                      <li>
                        <a href="#portfolio-builder" className="sidebar-link">
                          <FontAwesomeIcon icon={faWallet} className="sidebar-icon" />{" "}
                          {/* Reusing faWallet for Portfolio Builder */}
                          Portfolio Builder
                        </a>
                      </li>
                      <li>
                        <a href="#tax-calculator" className="sidebar-link">
                          <FontAwesomeIcon
                            icon={faExchangeAlt}
                            className="sidebar-icon"
                          />{" "}
                          {/* Reusing faExchangeAlt for Tax Calculator */}
                          Tax Calculator
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
        <section className="performance-section">
      <div className="performance-container">
        <div className="performance-header">
          <h1 className="performance-title gradient-text">Fund Manager Performance</h1>
          <p className="performance-subtitle">
            Explore how top-performing managers are growing LP funds. All metrics are either public or ZK-verified.
          </p>
        </div>

        <div className="performance-grid">
          {fundManagers.map((fm, index) => (
            <div key={index} className="performance-card">
              <div className="card-header">
                <h2>{fm.name}</h2>
                <span className={`tier-badge ${fm.tier.toLowerCase().replace(" ", "-")}`}>{fm.tier}</span>
              </div>
              <p className="strategy-label">{fm.strategy}</p>

              <div className="metrics">
                <div>
                  <p className="metric-label">PnL</p>
                  <p className={`metric-value ${fm.pnl.startsWith("-") ? "negative" : "positive"}`}>
                    {fm.pnl}
                  </p>
                </div>
                <div>
                  <p className="metric-label">ROI</p>
                  <p className={`metric-value ${fm.roi.startsWith("-") ? "negative" : "positive"}`}>
                    {fm.roi}
                  </p>
                </div>
              </div>

              <div className={`zk-status ${fm.verified ? "verified" : "unverified"}`}>
                {fm.verified ? "ZK Verified" : "Unverified"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Performance;
