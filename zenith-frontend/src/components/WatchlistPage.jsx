// src/components/WatchlistPage/WatchlistPage.jsx
import React from "react";
import "./WatchlistPage.css"; // Import its corresponding CSS file
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
  faComments, // Sidebar Icons
  faSearch,
  faFilter,
  faPlus,
  faEye,
  faEyeSlash,
  faMinus, // Page Content Icons
} from "@fortawesome/free-solid-svg-icons";

const WatchlistPage = ({ onNavigate, currentPage }) => {
  // Receive onNavigate and currentPage props
  const [pools, setPools] = React.useState([
    {
      name: "Ethereum Yield Pro",
      manager: "ETH Master",
      tvl: "$2.8M",
      performance: "+34.2%",
      risk: "Medium",
      category: "DeFi",
      watching: true,
    },
    {
      name: "Cross-Chain Arbitrage",
      manager: "Arbitrage King",
      tvl: "$1.5M",
      performance: "+28.7%",
      risk: "High",
      category: "Arbitrage",
      watching: true,
    },
    {
      name: "Stable Yield Generator",
      manager: "Safe Yields",
      tvl: "$5.2M",
      performance: "+12.4%",
      risk: "Low",
      category: "Yield",
      watching: true,
    },
    {
      name: "GameFi Token Basket",
      manager: "GameMaster",
      tvl: "$890K",
      performance: "+45.8%",
      risk: "High",
      category: "Gaming",
      watching: true,
    },
    {
      name: "Real Estate Tokens",
      manager: "PropertyPro",
      tvl: "$3.1M",
      performance: "+16.9%",
      risk: "Medium",
      category: "RWA",
      watching: true,
    },
    {
      name: "AI & Tech Focused",
      manager: "TechInnovator",
      tvl: "$1.2M",
      performance: "+52.3%",
      risk: "High",
      category: "Tech",
      watching: true,
    },
  ]);

  const toggleWatch = (index) => {
    const newPools = [...pools];
    newPools[index].watching = !newPools[index].watching;
    setPools(newPools);
  };

  const watchedPoolCount = pools.filter((pool) => pool.watching).length;

  return (
    <div className="watchlist-page-container">
      <div className="page-content-area">
        {" "}
        {/* Container for sidebar and main content */}
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
                <a href="#performance" className="sidebar-link">
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
                  <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
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
          <div className="page-header">
            <div>
              <h1 className="page-title">Watchlist</h1>
              <p className="page-description">
                Keep track of pools you're interested in
              </p>
            </div>
          </div>

          {/* Watchlist Controls */}
          <div className="watchlist-controls">
            <div className="search-filter-group">
              <div className="search-input-wrapper">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search pools..."
                  className="search-input"
                />
              </div>
              <select className="filter-select">
                <option>All Categories</option>
                <option>DeFi</option>
                <option>NFT</option>
                <option>Yield Farming</option>
                <option>Arbitrage</option>
              </select>
            </div>
            <div className="action-group">
              <span className="pools-watched-info">
                {watchedPoolCount} pools watched
              </span>
              <button className="add-pool-btn">
                <FontAwesomeIcon icon={faPlus} className="icon-mr" />
                Add Pool
              </button>
            </div>
          </div>

          {/* Watchlist Grid */}
          <div className="watchlist-grid">
            {pools.map((pool, index) => (
              <div key={index} className="watchlist-card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{pool.name}</h3>
                    <p className="card-manager">by {pool.manager}</p>
                  </div>
                  <button
                    onClick={() => toggleWatch(index)}
                    className="watch-toggle-btn"
                    title={
                      pool.watching
                        ? "Remove from Watchlist"
                        : "Add to Watchlist"
                    }
                  >
                    <FontAwesomeIcon
                      icon={pool.watching ? faEye : faEyeSlash}
                    />
                  </button>
                </div>

                <div className="card-stats">
                  <div className="stat-item">
                    <span className="stat-label">TVL</span>
                    <span className="stat-value">{pool.tvl}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">7D Performance</span>
                    <span className="stat-value text-positive">
                      {pool.performance}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Risk Level</span>
                    <span
                      className={`stat-value ${
                        pool.risk === "Low"
                          ? "risk-low"
                          : pool.risk === "Medium"
                          ? "risk-medium"
                          : "risk-high"
                      }`}
                    >
                      {pool.risk}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Category</span>
                    <span className="category-tag">{pool.category}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button className="invest-now-btn">Invest Now</button>
                  <button
                    onClick={() => toggleWatch(index)}
                    className="remove-btn"
                  >
                    <FontAwesomeIcon icon={pool.watching ? faMinus : faPlus} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WatchlistPage;
