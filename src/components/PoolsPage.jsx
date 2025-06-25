// src/components/PoolsPage/PoolsPage.jsx
import React from "react";
import "./PoolsPage.css"; // Import its corresponding CSS file
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
  faSearch,
  faFilter,
  faSortAmountDownAlt,
  faStar,
  faShareAlt,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

// PoolsPage now accepts onNavigate and currentPage props from App.jsx
const PoolsPage = ({ onNavigate, currentPage }) => {
  return (
    <div className="pools-page-container">
      <div className="pools-content-area">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h4 className="sidebar-title">QUICK ACCESS</h4>
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("dashboard");
                  }} // Make link functional
                  className={
                    currentPage === "dashboard"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
                >
                  <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#my-investments"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("my-investments");
                  }} // Make link functional
                  className={
                    currentPage === "my-investments"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
                >
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="sidebar-icon"
                  />
                  My Investments
                </a>
              </li>
              <li>
                <a
                  href="#watchlist"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("watchlist");
                  }} // Make link functional
                  className={
                    currentPage === "watchlist"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
                >
                  <FontAwesomeIcon icon={faListAlt} className="sidebar-icon" />
                  Watchlist
                </a>
              </li>
              <li>
                <a
                  href="#transactions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("transactions");
                  }} // Make link functional
                  className={
                    currentPage === "transactions"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
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
                  }} // Make link functional
                  className={
                    currentPage === "yourPools"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
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
                <a
                  href="#documentation"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("documentation");
                  }} // Make link functional
                  className={
                    currentPage === "documentation"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
                >
                  <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#help-center"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("help-center");
                  }} // Make link functional
                  className={
                    currentPage === "help-center"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
                >
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="sidebar-icon"
                  />
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("community");
                  }} // Make link functional
                  className={
                    currentPage === "community"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  } // Apply active class
                >
                  <FontAwesomeIcon icon={faComments} className="sidebar-icon" />
                  Community
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <h1 className="page-title">Investment Pools</h1>
          <p className="page-description">
            Discover and invest in a diverse range of managed investment pools
          </p>

          <div className="pools-summary-cards-grid">
            <div className="summary-card">
              <div className="card-icon-wrapper primary-icon">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <p className="card-label">Total Pools</p>
              <h3 className="card-value">
                328{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 12%
                </span>
              </h3>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper secondary-icon">
                <FontAwesomeIcon icon={faChartLine} />
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
              <div className="card-icon-wrapper tertiary-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <p className="card-label">Average ROI</p>
              <h3 className="card-value">
                16.4%{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 2.3%
                </span>
              </h3>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper quaternary-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <p className="card-label">Active Investors</p>
              <h3 className="card-value">
                8,742{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 5.8%
                </span>
              </h3>
            </div>
          </div>

          <div className="pools-search-filter-bar">
            <div className="search-input-wrapper">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search pools by name, manager, or strategy..."
                className="search-input"
              />
            </div>
            <button className="filter-btn">
              <FontAwesomeIcon icon={faFilter} /> Filters
            </button>
            <button className="sort-btn">
              Highest Returns <FontAwesomeIcon icon={faSortAmountDownAlt} />
            </button>
          </div>

          {/* New Section: TVL Trend by Chain */}
          <div className="pools-chart-section">
            <div className="section-header">
              <h2 className="section-title">TVL Trend by Chain</h2>
              <div className="chart-filters">
                <button className="filter-btn active">1W</button>
                <button className="filter-btn">1M</button>
                <button className="filter-btn">3M</button>
                <button className="filter-btn">1Y</button>
              </div>
            </div>
            <div className="chart-placeholder line-chart">
              {/* Hardcoded Line Chart for TVL Trend */}
              <div className="chart-y-axis">
                <span>$250M</span>
                <span>$200M</span>
                <span>$150M</span>
                <span>$100M</span>
                <span>$50M</span>
                <span>$0</span>
              </div>
              <div className="chart-area">
                <div className="chart-line ethereum"></div>
                <div className="chart-line polygon"></div>
                <div className="chart-line arbitrum"></div>

                {/* Data points for Ethereum */}
                <div className="chart-point ethereum p1-eth"></div>
                <div className="chart-point ethereum p2-eth"></div>
                <div className="chart-point ethereum p3-eth"></div>
                <div className="chart-point ethereum p4-eth"></div>
                <div className="chart-point ethereum p5-eth"></div>
                <div className="chart-point ethereum p6-eth"></div>
                <div className="chart-point ethereum p7-eth"></div>

                {/* Data points for Polygon */}
                <div className="chart-point polygon p1-poly"></div>
                <div className="chart-point polygon p2-poly"></div>
                <div className="chart-point polygon p3-poly"></div>
                <div className="chart-point polygon p4-poly"></div>
                <div className="chart-point polygon p5-poly"></div>
                <div className="chart-point polygon p6-poly"></div>
                <div className="chart-point polygon p7-poly"></div>

                {/* Data points for Arbitrum */}
                <div className="chart-point arbitrum p1-arb"></div>
                <div className="chart-point arbitrum p2-arb"></div>
                <div className="chart-point arbitrum p3-arb"></div>
                <div className="chart-point arbitrum p4-arb"></div>
                <div className="chart-point arbitrum p5-arb"></div>
                <div className="chart-point arbitrum p6-arb"></div>
                <div className="chart-point arbitrum p7-arb"></div>

                <div className="chart-x-axis">
                  <span>Day 1</span>
                  <span>Day 2</span>
                  <span>Day 3</span>
                  <span>Day 4</span>
                  <span>Day 5</span>
                  <span>Day 6</span>
                  <span>Day 7</span>
                </div>
              </div>
            </div>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color-box ethereum-color"></span>{" "}
                Ethereum
              </span>
              <span className="legend-item">
                <span className="legend-color-box polygon-color"></span> Polygon
              </span>
              <span className="legend-item">
                <span className="legend-color-box arbitrum-color"></span>{" "}
                Arbitrum
              </span>
            </div>
          </div>

          {/* New Section: Chain Performance Comparison & Risk Assessment */}
          <div className="pools-chart-section">
            <div className="section-header">
              <h2 className="section-title">Chain Performance & Risk</h2>
            </div>
            <div className="chain-comparison-grid">
              {/* Chain 1: Ethereum */}
              <div className="chain-card">
                <h3>Ethereum</h3>
                <div className="performance-bar-container">
                  <div
                    className="performance-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="performance-value">+8.5%</span>
                <div className="risk-indicator">
                  Risk: <span className="risk-badge risk-medium">Medium</span>
                </div>
              </div>
              {/* Chain 2: Polygon */}
              <div className="chain-card">
                <h3>Polygon</h3>
                <div className="performance-bar-container">
                  <div
                    className="performance-bar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="performance-value">+7.0%</span>
                <div className="risk-indicator">
                  Risk: <span className="risk-badge risk-low">Low</span>
                </div>
              </div>
              {/* Chain 3: Avalanche */}
              <div className="chain-card">
                <h3>Avalanche</h3>
                <div className="performance-bar-container">
                  <div
                    className="performance-bar"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span className="performance-value">+6.0%</span>
                <div className="risk-indicator">
                  Risk: <span className="risk-badge risk-medium">Medium</span>
                </div>
              </div>
              {/* Chain 4: Arbitrum */}
              <div className="chain-card">
                <h3>Arbitrum</h3>
                <div className="performance-bar-container">
                  <div
                    className="performance-bar"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <span className="performance-value">+9.2%</span>
                <div className="risk-indicator">
                  Risk: <span className="risk-badge risk-high">High</span>
                </div>
              </div>
            </div>
          </div>

          <div className="investment-pools-grid">
            {/* Pool Card 1 */}
            <div className="pool-card">
              <img
                src="pool1.png"
                alt="DeFi Alpha Strategy"
                className="pool-card-image"
              />
              <div className="pool-card-content">
                <h3 className="pool-card-name">DeFi Alpha Strategy</h3>
                <p className="pool-card-manager">
                  by CryptoWhale <span className="rating">★★★★☆ 4.9</span>
                </p>
                <div className="pool-card-stats">
                  <div>
                    <span className="stat-label">Monthly Return</span>
                    <span className="stat-value positive">24.8 %</span>
                  </div>
                  <div>
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">$12.5M</span>
                  </div>
                </div>
                <p className="risk-level">
                  Risk Level: <span className="risk-high">High</span>
                </p>
                <div className="pool-tags">
                  <span className="tag-item">Ethereum</span>
                  <span className="tag-item">Polygon</span>
                  <span className="tag-item">Arbitrum</span>
                  <span className="tag-item">DeFi</span>
                  <span className="tag-item">Yield</span>
                </div>
                <div className="pool-card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
              <span className="pool-tag-overlay elite">Elite</span>
            </div>

            {/* Pool Card 2 */}
            <div className="pool-card">
              <img
                src="pool2.png"
                alt="Blue Chip Collector"
                className="pool-card-image"
              />
              <div className="pool-card-content">
                <h3 className="pool-card-name">Blue Chip Collector</h3>
                <p className="pool-card-manager">
                  by TokenMaster <span className="rating">★★★★☆ 4.7</span>
                </p>
                <div className="pool-card-stats">
                  <div>
                    <span className="stat-label">Monthly Return</span>
                    <span className="stat-value positive">18.3 %</span>
                  </div>
                  <div>
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">$8.2M</span>
                  </div>
                </div>
                <p className="risk-level">
                  Risk Level: <span className="risk-medium">Medium</span>
                </p>
                <div className="pool-tags">
                  <span className="tag-item">Ethereum</span>
                  <span className="tag-item">Growth</span>
                </div>
                <div className="pool-card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
              <span className="pool-tag-overlay pro">Pro</span>
            </div>

            {/* Pool Card 3 */}
            <div className="pool-card">
              <img
                src="pool3.png"
                alt="Yield Maximizer"
                className="pool-card-image"
              />
              <div className="pool-card-content">
                <h3 className="pool-card-name">Yield Maximizer</h3>
                <p className="pool-card-manager">
                  by YieldHunter <span className="rating">★★★★☆ 4.8</span>
                </p>
                <div className="pool-card-stats">
                  <div>
                    <span className="stat-label">Monthly Return</span>
                    <span className="stat-value positive">16.5 %</span>
                  </div>
                  <div>
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">$5.7M</span>
                  </div>
                </div>
                <p className="risk-level">
                  Risk Level: <span className="risk-medium">Medium</span>
                </p>
                <div className="pool-tags">
                  <span className="tag-item">Polygon</span>
                  <span className="tag-item">Optimism</span>
                  <span className="tag-item">Yield</span>
                  <span className="tag-item">DeFi</span>
                </div>
                <div className="pool-card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
              <span className="pool-tag-overlay elite">Elite</span>
            </div>

            {/* Pool Card 4 */}
            <div className="pool-card">
              <img
                src="pool4.png"
                alt="Metaverse Index"
                className="pool-card-image"
              />
              <div className="pool-card-content">
                <h3 className="pool-card-name">Metaverse Index</h3>
                <p className="pool-card-manager">
                  by VirtualRealm <span className="rating">★★★★☆ 4.6</span>
                </p>
                <div className="pool-card-stats">
                  <div>
                    <span className="stat-label">Monthly Return</span>
                    <span className="stat-value positive">19.8 %</span>
                  </div>
                  <div>
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">$3.2M</span>
                  </div>
                </div>
                <p className="risk-level">
                  Risk Level: <span className="risk-very-high">Very High</span>
                </p>
                <div className="pool-tags">
                  <span className="tag-item">Ethereum</span>
                  <span className="tag-item">Polygon</span>
                  <span className="tag-item">Growth</span>
                  <span className="tag-item">NFT</span>
                </div>
                <div className="pool-card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
              <span className="pool-tag-overlay pro">Pro</span>
            </div>

            {/* Pool Card 5 */}
            <div className="pool-card">
              <img
                src="pool5.png"
                alt="DeFi Pulse"
                className="pool-card-image"
              />
              <div className="pool-card-content">
                <h3 className="pool-card-name">DeFi Pulse</h3>
                <p className="pool-card-manager">
                  by DeFiWhale <span className="rating">★★★★☆ 4.7</span>
                </p>
                <div className="pool-card-stats">
                  <div>
                    <span className="stat-label">Monthly Return</span>
                    <span className="stat-value positive">17.5 %</span>
                  </div>
                  <div>
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">$7.8M</span>
                  </div>
                </div>
                <p className="risk-level">
                  Risk Level: <span className="risk-medium">Medium</span>
                </p>
                <div className="pool-tags">
                  <span className="tag-item">Ethereum</span>
                  <span className="tag-item">Avalanche</span>
                  <span className="tag-item">Optimism</span>
                  <span className="tag-item">DeFi</span>
                  <span className="tag-item">Yield</span>
                  <span className="tag-item">Multi-Chain</span>
                </div>
                <div className="pool-card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
              <span className="pool-tag-overlay elite">Elite</span>
            </div>

            {/* Pool Card 6 */}
            <div className="pool-card">
              <img
                src="pool6.png"
                alt="Smart Beta Crypto"
                className="pool-card-image"
              />
              <div className="pool-card-content">
                <h3 className="pool-card-name">Smart Beta Crypto</h3>
                <p className="pool-card-manager">
                  by QuantTrader <span className="rating">★★★★☆ 4.4</span>
                </p>
                <div className="pool-card-stats">
                  <div>
                    <span className="stat-label">Monthly Return</span>
                    <span className="stat-value positive">13.9 %</span>
                  </div>
                  <div>
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">$5.1M</span>
                  </div>
                </div>
                <p className="risk-level">
                  Risk Level: <span className="risk-low">Low</span>
                </p>
                <div className="pool-tags">
                  <span className="tag-item">Ethereum</span>
                  <span className="tag-item">Polygon</span>
                  <span className="tag-item">Growth</span>
                </div>
                <div className="pool-card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>
              <span className="pool-tag-overlay pro">Pro</span>
            </div>
          </div>

          <div className="pagination">
            <button className="pagination-arrow disabled">&lt;</button>
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
            <button className="pagination-number">4</button>
            <button className="pagination-number">5</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-number">33</button>
            <button className="pagination-arrow">&gt;</button>
          </div>
          <p className="pagination-info">Showing 1 to 9 of 328 results</p>

          <div className="fund-manager-cta">
            <div className="cta-left">
              <h2 className="cta-title">Become a Fund Manager</h2>
              <p className="cta-description">
                Create your own investment pool and earn management fees by
                sharing your trading strategies with investors.
              </p>
            </div>
            <div className="cta-right">
              <button className="learn-more-btn">Learn More</button>

              <button className="create-pool-btn">
                <a
                  href="#poolForm"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("poolForm");
                  }}
                  className={currentPage === "poolForm" ? "active" : ""}
                >
                  Create Pool
                </a>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PoolsPage;
