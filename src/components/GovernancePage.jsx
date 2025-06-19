// src/components/GovernancePage/GovernancePage.jsx
import React from "react";
import "./GovernancePage.css"; // Import its corresponding CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faVoteYea,
  faLandmark,
  faHandshake,
  faHistory,
  faPlusSquare,
  faBook,
  faQuestionCircle,
  faComments,
  faInfoCircle,
  faArrowUp,
  faArrowDown,
  faChartPie,
  faDollarSign,
  faCube,
  faSearch,
  faFilter,
  faShareAlt,
  faStar,
  faExternalLinkAlt,
  faDownload,
  faChevronDown,
  faCheckCircle,
  faTimesCircle,
  faCircleQuestion,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

// GovernancePage now accepts onNavigate and currentPage props
const GovernancePage = ({ onNavigate, currentPage }) => {
  return (
    <div className="governance-page-container">
      <div className="governance-content-area">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h4 className="sidebar-title">GOVERNANCE</h4>
            <ul>
              <li>
                <a
                  href="#dashboard"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("governance-dashboard");
                  }}
                  className={
                    currentPage === "governance-dashboard"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#proposals"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("proposals");
                  }}
                  className={
                    currentPage === "proposals"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
                  Proposals
                </a>
              </li>
              <li>
                <a
                  href="#voting"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("voting");
                  }}
                  className={
                    currentPage === "voting"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faVoteYea} className="sidebar-icon" />
                  Voting
                </a>
              </li>
              <li>
                <a
                  href="#treasury"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("treasury");
                  }}
                  className={
                    currentPage === "treasury"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faLandmark} className="sidebar-icon" />
                  Treasury
                </a>
              </li>
              <li>
                <a
                  href="#delegation"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("delegation");
                  }}
                  className={
                    currentPage === "delegation"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="sidebar-icon"
                  />
                  Delegation
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-title">PERSONAL</h4>
            <ul>
              <li>
                <a
                  href="#my-voting-history"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("my-voting-history");
                  }}
                  className={
                    currentPage === "my-voting-history"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faHistory} className="sidebar-icon" />
                  My Voting History
                </a>
              </li>
              <li>
                <a
                  href="#my-proposals"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("my-proposals");
                  }}
                  className={
                    currentPage === "my-proposals"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    className="sidebar-icon"
                  />
                  My Proposals
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
                    onNavigate("governance-documentation");
                  }}
                  className={
                    currentPage === "governance-documentation"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("faq");
                  }}
                  className={
                    currentPage === "faq"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="sidebar-icon"
                  />
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("governance-community");
                  }}
                  className={
                    currentPage === "governance-community"
                      ? "sidebar-link active"
                      : "sidebar-link"
                  }
                >
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
              <h1 className="page-title">Governance Dashboard</h1>
              <p className="page-description">
                Monitor proposals, cast votes, and track treasury activities
              </p>
            </div>
          </div>

          <div className="summary-cards-grid">
            <div className="summary-card">
              <div className="card-icon-wrapper primary-icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <p className="card-label">Total Proposals</p>
              <h3 className="card-value">87</h3>
              <div className="sub-stats">
                <span>Active: 12</span>
                <span>Passed: 58</span>
                <span>Failed: 17</span>
              </div>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper secondary-icon">
                <FontAwesomeIcon icon={faVoteYea} />
              </div>
              <p className="card-label">Total Votes Cast</p>
              <h3 className="card-value">
                1.4M{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 12.8%
                </span>
              </h3>
              <p className="sub-text">vs last month</p>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper tertiary-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <p className="card-label">Token Price</p>
              <h3 className="card-value">
                $24.86{" "}
                <span className="percentage-negative">
                  <FontAwesomeIcon icon={faArrowDown} /> 3.2%
                </span>
              </h3>
              <p className="sub-text">24h change</p>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper quaternary-icon">
                <FontAwesomeIcon icon={faCube} />{" "}
                {/* Icon for Treasury Balance */}
              </div>
              <p className="card-label">Treasury Balance</p>
              <h3 className="card-value">$42.5M</h3>
              <div className="treasury-allocation">
                <span>ETH: 52%</span>
                <span>USDC: 28%</span>
                <span>Other: 20%</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid-two-cols proposals-voting-power-grid">
            <div className="dashboard-section active-proposals">
              <div className="section-header">
                <h2 className="section-title">Active Proposals</h2>
                <div className="proposal-actions">
                  <div className="search-input-wrapper small">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search proposals..."
                      className="search-input"
                    />
                  </div>
                  <button className="filter-btn">
                    <FontAwesomeIcon icon={faFilter} /> Filter
                  </button>
                </div>
              </div>

              {/* Proposal Card 1 */}
              <div className="proposal-card">
                <h3 className="proposal-card-title">
                  FIP-32: Upgrade Liquidity Mining Program{" "}
                  <span className="proposal-status active">Active</span>
                </h3>
                <p className="proposal-description">
                  This proposal aims to adjust the liquidity mining rewards
                  distribution to incentivize deeper liquidity in stablecoin
                  pairs and reduce emissions for volatile pairs.
                </p>
                <div className="voting-progress">
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "75.4%" }}
                    ></div>
                  </div>
                  <span className="progress-text">75.4 % For</span>
                </div>
                <div className="voting-stats">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="vote-for-icon"
                    />{" "}
                    842.5k For
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="vote-against-icon"
                    />{" "}
                    274.9k Against
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="time-left-icon"
                    />{" "}
                    2d 14h left
                  </span>
                  <button className="vote-btn">Vote</button>
                </div>
              </div>

              {/* Proposal Card 2 */}
              <div className="proposal-card">
                <h3 className="proposal-card-title">
                  FIP-33: Treasury Diversification Strategy{" "}
                  <span className="proposal-status active">Active</span>
                </h3>
                <p className="proposal-description">
                  This proposal suggests allocating 15 % of the treasury to a
                  diversified portfolio of blue-chip DeFi tokens to reduce
                  volatility risk and potentially increase treasury value.
                </p>
                <div className="voting-progress">
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: "62.8%" }}
                    ></div>
                  </div>
                  <span className="progress-text">62.8 % For</span>
                </div>
                <div className="voting-stats">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="vote-for-icon"
                    />{" "}
                    619.0k For
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="vote-against-icon"
                    />{" "}
                    202.7k Against
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="time-left-icon"
                    />{" "}
                    1d 5h left
                  </span>
                  <button className="vote-btn">Vote</button>
                </div>
              </div>
              <a href="#view-all-proposals" className="view-all-proposals-link">
                View all proposals →
              </a>
            </div>

            <div className="dashboard-section voting-power-distribution">
              <div className="section-header">
                <h2 className="section-title">Voting Power</h2>
                <a href="#view-all" className="view-all-link">
                  View All
                </a>
              </div>
              <div className="your-voting-power">
                <p>
                  Your Voting Power{" "}
                  <span className="percentage-of-total">0.08% of total</span>
                </p>
                <h3>
                  12,450 FFG <button className="delegate-btn">Delegate</button>
                </h3>
              </div>
              <h3 className="sub-section-title">Voting Power Distribution</h3>
              <div className="chart-placeholder donut-chart-small">
                {/* Donut Chart: Voting Power Distribution (Hardcoded) */}
                <div className="donut-segment whale-segment"></div>
                <div className="donut-segment binance-segment"></div>
                <div className="donut-segment defimaestro-segment"></div>
                <div className="donut-segment cryptoventure-segment"></div>
                <div className="donut-segment others-segment"></div>
              </div>
              <div className="voting-power-legend">
                <p>
                  <span className="color-box whale"></span> Whale.eth
                </p>
                <p>
                  <span className="color-box binance"></span> Binance
                </p>
                <p>
                  <span className="color-box defimaestro"></span> DeFiMaestro
                </p>
                <p>
                  <span className="color-box cryptoventure"></span>{" "}
                  CryptoVenture
                </p>
                <p>
                  <span className="color-box others"></span> Others
                </p>
              </div>

              <div className="top-voters-section">
                <h3 className="sub-section-title">Top Voters</h3>
                <ul className="top-voters-list">
                  <li>
                    <span className="rank">1</span> 0x7a23...45f9{" "}
                    <span className="voter-name">Whale.eth</span>{" "}
                    <span className="vote-percentage">8.4%</span>
                  </li>
                  <li>
                    <span className="rank">2</span> 0x3f12...b7e2{" "}
                    <span className="voter-name">Binance</span>{" "}
                    <span className="vote-percentage">6.2%</span>
                  </li>
                  <li>
                    <span className="rank">3</span> 0x9d87...21c3{" "}
                    <span className="voter-name">DeFiMaestro.eth</span>{" "}
                    <span className="vote-percentage">4.7%</span>
                  </li>
                  <li>
                    <span className="rank">4</span> 0x4e56...f8a1{" "}
                    <span className="voter-name">CryptoVenture</span>{" "}
                    <span className="vote-percentage">3.9%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dashboard-section treasury-management">
            <div className="dashboard-grid-two-cols">
              <div className="dashboard-sub-section asset-allocation">
                <h2 className="section-title">Treasury Management</h2>
                <h3 className="sub-section-title">Asset Allocation</h3>
                <div className="chart-placeholder donut-chart-medium">
                  {/* Donut Chart: Treasury Asset Allocation (Hardcoded) */}
                  <div className="donut-segment eth-segment"></div>
                  <div className="donut-segment usdc-segment"></div>
                  <div className="donut-segment btc-segment"></div>
                  <div className="donut-segment other-segment"></div>
                </div>
                <div className="treasury-asset-legend">
                  <p>
                    <span className="color-box eth"></span> ETH: $30M
                  </p>
                  <p>
                    <span className="color-box usdc"></span> USDC: $10M
                  </p>
                  <p>
                    <span className="color-box btc"></span> BTC: $5M
                  </p>
                  <p>
                    <span className="color-box other"></span> Other: $2.5M
                  </p>
                </div>
              </div>

              <div className="dashboard-sub-section treasury-growth">
                <h3 className="sub-section-title">Treasury Growth</h3>
                <div className="chart-placeholder line-chart-medium">
                  {/* Hardcoded Line Chart for Treasury Growth */}
                  <div className="chart-y-axis-small">
                    <span>$50M</span>
                    <span>$40M</span>
                    <span>$30M</span>
                    <span>$20M</span>
                    <span>$10M</span>
                    <span>$0M</span>
                  </div>
                  <div className="chart-area-small">
                    <div className="treasury-growth-line"></div>
                  </div>
                  <div className="chart-x-axis-small">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
                <a href="#view-details" className="view-details-link">
                  View Details
                </a>
              </div>
            </div>

            <div className="dashboard-sub-section recent-transactions">
              <h3 className="sub-section-title">Recent Transactions</h3>
              <div className="table-responsive">
                <table className="transactions-table">
                  <thead>
                    <tr>
                      <th>TRANSACTION</th>
                      <th>AMOUNT</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        USDC Transfer{" "}
                        <p className="transaction-detail">
                          FIP-28 implementation
                        </p>
                      </td>
                      <td>$250,000</td>
                      <td>Jun 15, 2025</td>
                      <td className="status completed">Completed</td>
                    </tr>
                    <tr>
                      <td>
                        ETH to USDC Swap{" "}
                        <p className="transaction-detail">
                          Treasury Rebalancing
                        </p>
                      </td>
                      <td>$1,200,000</td>
                      <td>Jun 10, 2025</td>
                      <td className="status completed">Completed</td>
                    </tr>
                    <tr>
                      <td>
                        Protocol Fee Collection{" "}
                        <p className="transaction-detail">Weekly Revenue</p>
                      </td>
                      <td>$342,875</td>
                      <td>Jun 7, 2025</td>
                      <td className="status completed">Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="dashboard-section voting-history">
            <div className="section-header">
              <h2 className="section-title">Voting History</h2>
              <div className="history-actions">
                <button className="action-button">
                  Export CSV <FontAwesomeIcon icon={faDownload} />
                </button>
                <button className="action-button">
                  Last 30 days <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="metrics-table">
                <thead>
                  <tr>
                    <th>PROPOSAL</th>
                    <th>STATUS</th>
                    <th>VOTES</th>
                    <th>END DATE</th>
                    <th>YOUR VOTE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      FIP-31: Optimism Integration{" "}
                      <p className="proposal-sub-text">
                        Expand to Optimism L2 network
                      </p>
                    </td>
                    <td>
                      <span className="status-badge passed">Passed</span>
                    </td>
                    <td>
                      912.4k For (78.3%)<p>252.8k Against</p>
                    </td>
                    <td>Jun 5, 2025</td>
                    <td>
                      <span className="vote-badge voted-for">For</span>
                    </td>
                    <td>
                      <button className="action-link-btn">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      FIP-30: Governance Improvements{" "}
                      <p className="proposal-sub-text">
                        Reduce proposal threshold to 5,000 FFG
                      </p>
                    </td>
                    <td>
                      <span className="status-badge passed">Passed</span>
                    </td>
                    <td>
                      845.2k For (68.9%)<p>381.6k Against</p>
                    </td>
                    <td>May 28, 2025</td>
                    <td>
                      <span className="vote-badge voted-against">Against</span>
                    </td>
                    <td>
                      <button className="action-link-btn">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      FIP-29: Security Audit Budget{" "}
                      <p className="proposal-sub-text">
                        Allocate $500k for comprehensive audit
                      </p>
                    </td>
                    <td>
                      <span className="status-badge passed">Passed</span>
                    </td>
                    <td>
                      1.1M For (92.4%)<p>90.3k Against</p>
                    </td>
                    <td>May 22, 2025</td>
                    <td>
                      <span className="vote-badge voted-for">For</span>
                    </td>
                    <td>
                      <button className="action-link-btn">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      FIP-28: Marketing Budget{" "}
                      <p className="proposal-sub-text">
                        Allocate $250k for Q3 marketing
                      </p>
                    </td>
                    <td>
                      <span className="status-badge failed">Failed</span>
                    </td>
                    <td>
                      428.6k For (42.1%)<p>589.7k Against</p>
                    </td>
                    <td>May 15, 2025</td>
                    <td>
                      <span className="vote-badge voted-abstained">
                        Abstained
                      </span>
                    </td>
                    <td>
                      <button className="action-link-btn">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagination-footer">
              <p className="pagination-info">Showing 1-4 of 32 proposals</p>
              <div className="pagination">
                <button className="pagination-arrow disabled">Previous</button>
                <button className="pagination-number active">1</button>
                <button className="pagination-number">2</button>
                <button className="pagination-number">3</button>
                <button className="pagination-arrow">Next</button>
              </div>
            </div>
          </div>

          <div className="dashboard-section create-proposal-section">
            <div className="create-proposal-left">
              <h2 className="section-title">Create Proposal</h2>
              <p className="create-proposal-description">
                Have an idea to improve FundForge? Create a proposal and let the
                community decide.
              </p>
              <div className="proposal-requirements">
                <p>
                  <FontAwesomeIcon icon={faInfoCircle} /> Minimum Voting Power:
                  You need at least 10,000 FFG to create a proposal
                </p>
                <p>
                  <FontAwesomeIcon icon={faInfoCircle} /> Proposal Template: Use
                  our templates to structure your proposal
                </p>
                <p>
                  <FontAwesomeIcon icon={faInfoCircle} /> Voting Period:
                  Standard voting period is 7 days
                </p>
              </div>
              <button className="create-new-proposal-btn">
                <FontAwesomeIcon icon={faPlusSquare} /> Create New Proposal
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GovernancePage;
