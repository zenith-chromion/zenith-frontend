// // src/components/MyInvestmentsPage/MyInvestmentsPage.jsx
// import React from "react";
// import "./MyInvestmentsPage.css"; // Import its corresponding CSS file
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDollarSign,
//   faArrowUp,
//   // faArrowDown,
//   faWallet,
//   faChartLine,
//   faUsers,
//   faFilter,
//   // faSearch,
// } from "@fortawesome/free-solid-svg-icons";

// const MyInvestmentsPage = () => {
//   return (
//     <div className="my-investments-page-container">
//       <main className="main-content">
//         <div className="page-header">
//           <div>
//             <h1 className="page-title">My Investments</h1>
//             <p className="page-description">
//               Track and manage your investment portfolio
//             </p>
//           </div>
//         </div>

//         {/* Portfolio Summary */}
//         <div className="summary-cards-grid">
//           <div className="summary-card">
//             <div className="card-icon-wrapper primary-icon">
//               <FontAwesomeIcon icon={faDollarSign} />
//             </div>
//             <p className="card-label">Total Portfolio Value</p>
//             <h3 className="card-value">
//               $127,450{" "}
//               <span className="percentage-positive">
//                 <FontAwesomeIcon icon={faArrowUp} /> 12.5%
//               </span>
//             </h3>
//           </div>

//           <div className="summary-card">
//             <div className="card-icon-wrapper secondary-icon">
//               <FontAwesomeIcon icon={faWallet} />
//             </div>
//             <p className="card-label">Total Invested</p>
//             <h3 className="card-value">
//               $98,200 <span className="sub-info">Across 8 pools</span>
//             </h3>
//           </div>

//           <div className="summary-card">
//             <div className="card-icon-wrapper tertiary-icon">
//               <FontAwesomeIcon icon={faChartLine} />
//             </div>
//             <p className="card-label">Total Gains</p>
//             <h3 className="card-value positive">
//               +$29,250 <span className="sub-info">29.8% return</span>
//             </h3>
//           </div>

//           <div className="summary-card">
//             <div className="card-icon-wrapper quaternary-icon">
//               <FontAwesomeIcon icon={faUsers} />
//             </div>
//             <p className="card-label">Active Pools</p>
//             <h3 className="card-value">
//               8 <span className="sub-info">2 new this month</span>
//             </h3>
//           </div>
//         </div>

//         {/* Active Investments Table */}
//         <div className="dashboard-section active-investments-section">
//           <div className="section-header">
//             <h2 className="section-title">Active Investments</h2>
//             <div className="section-actions">
//               <button className="action-button">
//                 <FontAwesomeIcon icon={faFilter} className="icon-mr" /> Filter
//               </button>
//               <button className="action-button primary">View All</button>
//             </div>
//           </div>

//           <div className="table-responsive">
//             <table className="investments-table">
//               <thead>
//                 <tr>
//                   <th>Pool</th>
//                   <th>Invested</th>
//                   <th>Current Value</th>
//                   <th>Gain/Loss</th>
//                   <th>Performance</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="table-row-hover">
//                   <td>
//                     <div className="pool-details-table">
//                       <span className="pool-name">Alpha DeFi Strategy</span>
//                       <span className="pool-manager">by CryptoWhale</span>
//                     </div>
//                   </td>
//                   <td>$25,000</td>
//                   <td>$32,450</td>
//                   <td>
//                     <span className="text-positive">+$7,450</span>
//                   </td>
//                   <td>
//                     <span className="text-positive">+29.8%</span>
//                   </td>
//                   <td>
//                     <button className="table-action-btn view">View</button>
//                     <button className="table-action-btn withdraw">
//                       Withdraw
//                     </button>
//                   </td>
//                 </tr>
//                 <tr className="table-row-hover">
//                   <td>
//                     <div className="pool-details-table">
//                       <span className="pool-name">Blue Chip Collector</span>
//                       <span className="pool-manager">by Token Master</span>
//                     </div>
//                   </td>
//                   <td>$15,000</td>
//                   <td>$18,200</td>
//                   <td>
//                     <span className="text-positive">+$3,200</span>
//                   </td>
//                   <td>
//                     <span className="text-positive">+21.3%</span>
//                   </td>
//                   <td>
//                     <button className="table-action-btn view">View</button>
//                     <button className="table-action-btn withdraw">
//                       Withdraw
//                     </button>
//                   </td>
//                 </tr>
//                 <tr className="table-row-hover">
//                   <td>
//                     <div className="pool-details-table">
//                       <span className="pool-name">Yield Maximizer</span>
//                       <span className="pool-manager">by Yield Hunter</span>
//                     </div>
//                   </td>
//                   <td>$20,000</td>
//                   <td>$23,800</td>
//                   <td>
//                     <span className="text-positive">+$3,800</span>
//                   </td>
//                   <td>
//                     <span className="text-positive">+19.0%</span>
//                   </td>
//                   <td>
//                     <button className="table-action-btn view">View</button>
//                     <button className="table-action-btn withdraw">
//                       Withdraw
//                     </button>
//                   </td>
//                 </tr>
//                 <tr className="table-row-hover">
//                   <td>
//                     <div className="pool-details-table">
//                       <span className="pool-name">NFT Momentum</span>
//                       <span className="pool-manager">by ArtInvestor</span>
//                     </div>
//                   </td>
//                   <td>$12,000</td>
//                   <td>$13,650</td>
//                   <td>
//                     <span className="text-positive">+$1,650</span>
//                   </td>
//                   <td>
//                     <span className="text-positive">+13.8%</span>
//                   </td>
//                   <td>
//                     <button className="table-action-btn view">View</button>
//                     <button className="table-action-btn withdraw">
//                       Withdraw
//                     </button>
//                   </td>
//                 </tr>
//                 <tr className="table-row-hover">
//                   <td>
//                     <div className="pool-details-table">
//                       <span className="pool-name">Metaverse Growth</span>
//                       <span className="pool-manager">by Virtual Realm</span>
//                     </div>
//                   </td>
//                   <td>$18,000</td>
//                   <td>$21,340</td>
//                   <td>
//                     <span className="text-positive">+$3,340</span>
//                   </td>
//                   <td>
//                     <span className="text-positive">+18.6%</span>
//                   </td>
//                   <td>
//                     <button className="table-action-btn view">View</button>
//                     <button className="table-action-btn withdraw">
//                       Withdraw
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MyInvestmentsPage;

// src/components/MyInvestmentsPage/MyInvestmentsPage.jsx
import React from "react";
import "./MyInvestmentsPage.css"; // Import its corresponding CSS file
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
  faDollarSign,
  faArrowUp,
  faArrowDown,
  faFilter,
  faSearch, // Page Content Icons
} from "@fortawesome/free-solid-svg-icons";

const MyInvestmentsPage = ({ onNavigate, currentPage }) => {
  // Receive onNavigate and currentPage props
  return (
    <div className="my-investments-page-container">
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
              <h1 className="page-title">My Investments</h1>
              <p className="page-description">
                Track and manage your investment portfolio
              </p>
            </div>
          </div>

          {/* Portfolio Summary - Grid of cards */}
          <div className="summary-cards-grid">
            {/* Card 1: Total Portfolio Value */}
            <div className="summary-card">
              <div className="card-icon-wrapper primary-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <p className="card-label">Total Portfolio Value</p>
              <h3 className="card-value">
                $127,450{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 12.5%
                </span>
              </h3>
            </div>

            {/* Card 2: Total Invested */}
            <div className="summary-card">
              <div className="card-icon-wrapper secondary-icon">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <p className="card-label">Total Invested</p>
              <h3 className="card-value">
                $98,200 <span className="sub-info">Across 8 pools</span>
              </h3>
            </div>

            {/* Card 3: Total Gains */}
            <div className="summary-card">
              <div className="card-icon-wrapper tertiary-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <p className="card-label">Total Gains</p>
              <h3 className="card-value positive">
                +$29,250 <span className="sub-info">29.8% return</span>
              </h3>
            </div>

            {/* Card 4: Active Pools */}
            <div className="summary-card">
              <div className="card-icon-wrapper quaternary-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <p className="card-label">Active Pools</p>
              <h3 className="card-value">
                8 <span className="sub-info">2 new this month</span>
              </h3>
            </div>
          </div>

          {/* Active Investments Table */}
          <div className="dashboard-section active-investments-section">
            <div className="section-header">
              <h2 className="section-title">Active Investments</h2>
              <div className="section-actions">
                <button className="action-button">
                  <FontAwesomeIcon icon={faFilter} className="icon-mr" /> Filter
                </button>
                <button className="action-button primary">View All</button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="investments-table">
                <thead>
                  <tr>
                    <th>Pool</th>
                    <th>Invested</th>
                    <th>Current Value</th>
                    <th>Gain/Loss</th>
                    <th>Performance</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row-hover">
                    <td>
                      <div className="pool-details-table">
                        <span className="pool-name">Alpha DeFi Strategy</span>
                        <span className="pool-manager">by CryptoWhale</span>
                      </div>
                    </td>
                    <td>$25,000</td>
                    <td>$32,450</td>
                    <td>
                      <span className="text-positive">+$7,450</span>
                    </td>
                    <td>
                      <span className="text-positive">+29.8%</span>
                    </td>
                    <td>
                      <button className="table-action-btn view">View</button>
                      <button className="table-action-btn withdraw">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                  <tr className="table-row-hover">
                    <td>
                      <div className="pool-details-table">
                        <span className="pool-name">Blue Chip Collector</span>
                        <span className="pool-manager">by Token Master</span>
                      </div>
                    </td>
                    <td>$15,000</td>
                    <td>$18,200</td>
                    <td>
                      <span className="text-positive">+$3,200</span>
                    </td>
                    <td>
                      <span className="text-positive">+21.3%</span>
                    </td>
                    <td>
                      <button className="table-action-btn view">View</button>
                      <button className="table-action-btn withdraw">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                  <tr className="table-row-hover">
                    <td>
                      <div className="pool-details-table">
                        <span className="pool-name">Yield Maximizer</span>
                        <span className="pool-manager">by Yield Hunter</span>
                      </div>
                    </td>
                    <td>$20,000</td>
                    <td>$23,800</td>
                    <td>
                      <span className="text-positive">+$3,800</span>
                    </td>
                    <td>
                      <span className="text-positive">+19.0%</span>
                    </td>
                    <td>
                      <button className="table-action-btn view">View</button>
                      <button className="table-action-btn withdraw">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                  <tr className="table-row-hover">
                    <td>
                      <div className="pool-details-table">
                        <span className="pool-name">NFT Momentum</span>
                        <span className="pool-manager">by ArtInvestor</span>
                      </div>
                    </td>
                    <td>$12,000</td>
                    <td>$13,650</td>
                    <td>
                      <span className="text-positive">+$1,650</span>
                    </td>
                    <td>
                      <span className="text-positive">+13.8%</span>
                    </td>
                    <td>
                      <button className="table-action-btn view">View</button>
                      <button className="table-action-btn withdraw">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                  <tr className="table-row-hover">
                    <td>
                      <div className="pool-details-table">
                        <span className="pool-name">Metaverse Growth</span>
                        <span className="pool-manager">by Virtual Realm</span>
                      </div>
                    </td>
                    <td>$18,000</td>
                    <td>$21,340</td>
                    <td>
                      <span className="text-positive">+$3,340</span>
                    </td>
                    <td>
                      <span className="text-positive">+18.6%</span>
                    </td>
                    <td>
                      <button className="table-action-btn view">View</button>
                      <button className="table-action-btn withdraw">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyInvestmentsPage;
