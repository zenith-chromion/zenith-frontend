// src/components/TransactionsPage/TransactionsPage.jsx
import React from "react";
import "./TransactionsPage.css"; // Import its corresponding CSS file
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
  faArrowUp,
  faArrowDown,
  faCalendarAlt,
  faDownload,
  faEllipsisH, // Page Content Icons
} from "@fortawesome/free-solid-svg-icons";

const TransactionsPage = ({ onNavigate, currentPage }) => {
  // Receive onNavigate and currentPage props
  const transactions = [
    {
      date: "2024-06-18",
      type: "Investment",
      pool: "Alpha DeFi Strategy",
      amount: "+$5,000",
      status: "Completed",
      txId: "0x1234...5678",
    },
    {
      date: "2024-06-17",
      type: "Dividend",
      pool: "Blue Chip Collector",
      amount: "+$127.50",
      status: "Completed",
      txId: "0x2345...6789",
    },
    {
      date: "2024-06-15",
      type: "Withdrawal",
      pool: "Yield Maximizer",
      amount: "-$2,000",
      status: "Completed",
      txId: "0x3456...7890",
    },
    {
      date: "2024-06-14",
      type: "Investment",
      pool: "NFT Momentum",
      amount: "+$3,000",
      status: "Completed",
      txId: "0x4567...8901",
    },
    {
      date: "2024-06-12",
      type: "Investment",
      pool: "Metaverse Growth",
      amount: "+$8,000",
      status: "Completed",
      txId: "0x5678...9012",
    },
    {
      date: "2024-06-10",
      type: "Dividend",
      pool: "Alpha DeFi Strategy",
      amount: "+$245.80",
      status: "Completed",
      txId: "0x6789...0123",
    },
    {
      date: "2024-06-08",
      type: "Investment",
      pool: "Cross-Chain Arbitrage",
      amount: "+$4,500",
      status: "Pending",
      txId: "0x7890...1234",
    },
  ];

  return (
    <div className="transactions-page-container">
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
          <div className="page-header">
            <div>
              <h1 className="page-title">Transactions</h1>
              <p className="page-description">
                View your complete transaction history
              </p>
            </div>
          </div>

          {/* Transaction Summary */}
          <div className="summary-cards-grid">
            <div className="summary-card">
              <div className="card-icon-wrapper primary-icon">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <p className="card-label">Total Invested</p>
              <h3 className="card-value">
                $98,200 <span className="sub-info">15 transactions</span>
              </h3>
            </div>

            <div className="summary-card">
              <div className="card-icon-wrapper secondary-icon">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
              <p className="card-label">Total Withdrawn</p>
              <h3 className="card-value">
                $23,500 <span className="sub-info">8 transactions</span>
              </h3>
            </div>

            <div className="summary-card">
              <div className="card-icon-wrapper tertiary-icon">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <p className="card-label">Net Flow</p>
              <h3 className="card-value">
                $74,700 <span className="sub-info">This month</span>
              </h3>
            </div>
          </div>

          {/* Transaction Filters */}
          <div className="transaction-filters">
            <div className="filter-group">
              <select className="filter-select">
                <option>All Transactions</option>
                <option>Investments</option>
                <option>Withdrawals</option>
                <option>Dividends</option>
              </select>
              <select className="filter-select">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>All time</option>
              </select>
              <button className="filter-button calendar-button">
                <FontAwesomeIcon icon={faCalendarAlt} className="icon-mr" />
                Custom Range
              </button>
            </div>
            <button className="filter-button export-button">
              <FontAwesomeIcon icon={faDownload} className="icon-mr" />
              Export
            </button>
          </div>

          {/* Transaction History Table */}
          <div className="dashboard-section transaction-history-section">
            <div className="section-header">
              <h2 className="section-title">Transaction History</h2>
            </div>

            <div className="table-responsive">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Pool</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="table-row-hover">
                      <td>{transaction.date}</td>
                      <td>
                        <span
                          className={`type-badge ${
                            transaction.type === "Investment"
                              ? "type-investment"
                              : transaction.type === "Withdrawal"
                              ? "type-withdrawal"
                              : "type-dividend"
                          }`}
                        >
                          {transaction.type}
                        </span>
                      </td>
                      <td>{transaction.pool}</td>
                      <td>
                        <span
                          className={`amount-text ${
                            transaction.amount.startsWith("+")
                              ? "text-positive"
                              : "text-negative"
                          }`}
                        >
                          {transaction.amount}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`status-badge ${
                            transaction.status === "Completed"
                              ? "status-completed"
                              : transaction.status === "Pending"
                              ? "status-pending"
                              : "status-failed"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td>
                        <button className="table-action-btn view">View</button>
                        <button className="table-action-btn more-options">
                          <FontAwesomeIcon icon={faEllipsisH} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TransactionsPage;
