import { useEffect, useState } from "react";
import { getAllPools } from "../utils/api";
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
export default function InvestablePools({ onNavigate, currentPage }) {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    getAllPools()
      .then((res) => setPools(res.data))
      .catch((err) => console.error("Error fetching pools:", err));
  }, []);

  return (
    <div className="poolAndAside">
      <aside className="sidebar yourPools">
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
                <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
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
                <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
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
      <div >
        <div>
          <h2>All Pools</h2>
          {pools.length === 0 ? (
            <p>No investable pools available.</p>
          ) : (
            <ul>
              {pools.map((pool) => (
                <li key={pool.poolId}>
                  <strong>{pool.tokenName}</strong> — Strategies:{" "}
                  {pool.strategies}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
