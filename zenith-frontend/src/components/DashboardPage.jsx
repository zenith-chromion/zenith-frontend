// src/components/DashboardPage/DashboardPage.jsx
import React from "react";
import "./DashboardPage.css"; // Import its corresponding CSS file
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
  faQuestionCircle,
  faComments,
  faDollarSign,
  faArrowUp,
  faArrowDown,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";

// DashboardPage now accepts onNavigate and currentPage props from App.jsx
const DashboardPage = ({ onNavigate, currentPage }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content-area">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h4 className="sidebar-title">QUICK ACCESS</h4>
            <ul>
              <li>
                {/* Home link: Navigates to the main dashboard overview */}
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("dashboard");
                  }}
                  className={
                    currentPage === "dashboard"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                  Home
                </a>
              </li>
              <li>
                {/* My Investments link: Navigates to My Investments page */}
                <a
                  href="#my-investments"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("my-investments");
                  }}
                  className={
                    currentPage === "my-investments"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="sidebar-icon"
                  />
                  My Investments
                </a>
              </li>
              <li>
                {/* Watchlist link: Navigates to Watchlist page */}
                <a
                  href="#watchlist"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("watchlist");
                  }}
                  className={
                    currentPage === "watchlist"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faListAlt} className="sidebar-icon" />
                  Watchlist
                </a>
              </li>
              <li>
                {/* Transactions link: Navigates to Transactions page */}
                <a
                  href="#transactions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("transactions");
                  }}
                  className={
                    currentPage === "transactions"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    className="sidebar-icon"
                  />
                  Transactions
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-title">FUND MANAGER</h4>
            <ul>
              <li>
                <a
                  href="#poolForm"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("poolForm");
                  }}
                  className={
                    currentPage === "poolForm "
                      ? "active sidebar-link"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faWallet} className="sidebar-icon" />
                  Create Pool
                </a>
              </li>
              <li>
                <a
                  href="#yourPools"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("yourPools");
                  }}
                  className={
                    currentPage === "yourPools"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
                  Your Pools
                </a>
              </li>
              <li>
                <a
                  href="#investablePools"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("investablePools");
                  }}
                  className={
                    currentPage === "investablePools"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="sidebar-icon"
                  />
                  All available pools
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-title">RESOURCES</h4>
            <ul>
              <li>
                <a href="#documentation" className="sidebar-link">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="sidebar-icon"
                    onClick={() => onNavigate("documentation")}
                  />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#help-center" className="sidebar-link">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="sidebar-icon"
                  />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#community" className="sidebar-link">
                  <FontAwesomeIcon icon={faComments} className="sidebar-icon" />
                  Community
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          {/* Dashboard content is now always rendered */}
          <>
            <div className="summary-cards-grid">
              <div className="summary-card">
                <div className="card-icon-wrapper primary-icon">
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <p className="card-label">Total Value Locked</p>
                <h3 className="card-value">
                  $245.89M{" "}
                  <span className="percentage-positive">
                    <FontAwesomeIcon icon={faArrowUp} /> 8.2%
                  </span>
                </h3>
              </div>
              <div className="summary-card">
                <div className="card-icon-wrapper secondary-icon">
                  <FontAwesomeIcon icon={faPoundSign} />{" "}
                  {/* Using pound sign as a generic currency icon for 24h Volume */}
                </div>
                <p className="card-label">24h Volume</p>
                <h3 className="card-value">
                  $12.4M{" "}
                  <span className="percentage-negative">
                    <FontAwesomeIcon icon={faArrowDown} /> 14.5%
                  </span>
                </h3>
              </div>
              <div className="summary-card">
                <div className="card-icon-wrapper tertiary-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <p className="card-label">Active Pools</p>
                <h3 className="card-value">
                  328{" "}
                  <span className="percentage-positive">
                    <FontAwesomeIcon icon={faArrowUp} /> 12%
                  </span>
                </h3>
              </div>
              <div className="summary-card">
                <div className="card-icon-wrapper quaternary-icon">
                  <FontAwesomeIcon icon={faUsers} />{" "}
                  {/* Reusing users for managers for simplicity */}
                </div>
                <p className="card-label">Active Fund Managers</p>
                <h3 className="card-value">
                  142{" "}
                  <span className="percentage-positive">
                    <FontAwesomeIcon icon={faArrowUp} /> 5.8%
                  </span>
                </h3>
              </div>
            </div>

            <div className="dashboard-section performance-overview">
              <div className="section-header">
                <h2 className="section-title">Performance Overview</h2>
                <div className="chart-filters">
                  <button className="filter-btn active">1W</button>
                  <button className="filter-btn">1M</button>
                  <button className="filter-btn">3M</button>
                  <button className="filter-btn">1Y</button>
                </div>
              </div>
              <div className="chart-placeholder">
                {/* Hardcoded Performance Chart */}
                <div className="chart-y-axis">
                  <span>15 %</span>
                  <span>12 %</span>
                  <span>9 %</span>
                  <span>6 %</span>
                  <span>3 %</span>
                  <span>0 %</span>
                </div>
                <div className="chart-area">
                  <div className="chart-line"></div>{" "}
                  {/* This div will be styled as the line */}
                  <div className="chart-point p1"></div>
                  <div className="chart-point p2"></div>
                  <div className="chart-point p3"></div>
                  <div className="chart-point p4"></div>
                  <div className="chart-point p5"></div>
                  <div className="chart-point p6"></div>
                  <div className="chart-point p7"></div>
                  <div className="chart-point p8"></div>
                  <div className="chart-x-axis">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-grid-two-cols">
              <div className="dashboard-section top-performing-pools">
                <div className="section-header">
                  <h2 className="section-title">Top Performing Pools</h2>
                  <a href="#view-all-pools" className="view-all-link">
                    View all
                  </a>
                </div>
                <ul className="pool-list">
                  <li className="pool-item">
                    <span className="pool-rank">1</span>
                    <div className="pool-details">
                      <h4 className="pool-name">Alpha Defi Strategy</h4>
                      <p className="pool-manager">
                        by CryptoWhale{" "}
                        <span className="pool-chain">Multi-chain</span>
                      </p>
                    </div>
                    <span className="pool-tag elite">Elite</span>
                    <span className="pool-percentage positive">24.8%</span>
                  </li>
                  <li className="pool-item">
                    <span className="pool-rank">2</span>
                    <div className="pool-details">
                      <h4 className="pool-name">Blue Chip Collector</h4>
                      <p className="pool-manager">
                        by Token Master{" "}
                        <span className="pool-chain">Ethereum</span>
                      </p>
                    </div>
                    <span className="pool-tag pro">Pro</span>
                    <span className="pool-percentage positive">18.3%</span>
                  </li>
                  <li className="pool-item">
                    <span className="pool-rank">3</span>
                    <div className="pool-details">
                      <h4 className="pool-name">Yield Maximizer</h4>
                      <p className="pool-manager">
                        by Yield Hunter{" "}
                        <span className="pool-chain">Polygon</span>
                      </p>
                    </div>
                    <span className="pool-tag elite">Elite</span>
                    <span className="pool-percentage positive">16.5%</span>
                  </li>
                  <li className="pool-item">
                    <span className="pool-rank">4</span>
                    <div className="pool-details">
                      <h4 className="pool-name">NFT Momentum</h4>
                      <p className="pool-manager">
                        by Artinvestor{" "}
                        <span className="pool-chain">Ethereum</span>
                      </p>
                    </div>
                    <span className="pool-tag pro">Pro</span>
                    <span className="pool-percentage positive">15.2%</span>
                  </li>
                </ul>
              </div>

              <div className="dashboard-section latest-pool-launches">
                <div className="section-header">
                  <h2 className="section-title">Latest Pool Launches</h2>
                  <a href="#view-all-launches" className="view-all-link">
                    View all
                  </a>
                </div>
                <ul className="latest-pools-list">
                  <li className="latest-pool-item">
                    <img
                      src="https://placehold.co/60x60/333333/FFFFFF?text=NFT"
                      alt="Metaverse Growth Fund"
                      className="pool-thumbnail"
                    />
                    <div className="pool-info">
                      <h4 className="pool-name">Metaverse Growth Fund</h4>
                      <p className="pool-manager">by Virtual Realm</p>
                      <span className="pool-type">Growth</span>
                    </div>
                    <div className="pool-stats">
                      <p className="tvl-label">TVL</p>
                      <p className="tvl-value">$1.2M</p>
                      <button className="invest-now-btn">Invest Now</button>
                    </div>
                  </li>
                  <li className="latest-pool-item">
                    <img
                      src="https://placehold.co/60x60/333333/FFFFFF?text=DeFi"
                      alt="DeFi Yield Aggregator"
                      className="pool-thumbnail"
                    />
                    <div className="pool-info">
                      <h4 className="pool-name">DeFi Yield Aggregator</h4>
                      <p className="pool-manager">by PassiveIncomePro</p>
                      <span className="pool-type">Yield</span>
                    </div>
                    <div className="pool-stats">
                      <p className="tvl-label">TVL</p>
                      <p className="tvl-value">$850K</p>
                      <button className="invest-now-btn">Invest Now</button>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="dashboard-section trending-strategies">
                <div className="section-header">
                  <h2 className="section-title">Trending Strategies</h2>
                  <a href="#view-all-strategies" className="view-all-link">
                    View all
                  </a>
                </div>
                <ul className="trending-strategies-list">
                  <li className="strategy-item">
                    <img
                      src="https://placehold.co/60x60/333333/FFFFFF?text=Arbitrage"
                      alt="Cross-Chain Arbitrage"
                      className="strategy-thumbnail"
                    />
                    <div className="strategy-info">
                      <h4 className="strategy-name">Cross-Chain Arbitrage</h4>
                      <p className="strategy-description">
                        Exploit price differences across multiple blockchains
                      </p>
                    </div>
                    <div className="strategy-growth">
                      <p className="growth-label">Weekly Growth</p>
                      <p className="growth-value positive">+32%</p>
                    </div>
                  </li>
                  <li className="strategy-item">
                    <img
                      src="https://placehold.co/60x60/333333/FFFFFF?text=Liquidity"
                      alt="Liquidity Mining Pro"
                      className="strategy-thumbnail"
                    />
                    <div className="strategy-info">
                      <h4 className="strategy-name">Liquidity Mining Pro</h4>
                      <p className="strategy-description">
                        Automated liquidity provision for maximum returns
                      </p>
                    </div>
                    <div className="strategy-growth">
                      <p className="growth-label">Weekly Growth</p>
                      <p className="growth-value positive">+28%</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
