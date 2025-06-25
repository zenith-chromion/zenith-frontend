import { useEffect, useState } from "react";
import { getPoolsByManager, deletePool } from "../utils/api";
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
import "./YourPools.css";
export default function YourPools({ walletAddress, onNavigate, currentPage }) {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    console.log("YourPools mounted.");
    if (!walletAddress) {
      alert("No wallet address provided! Please connect your wallet.");
      console.warn("walletAddress is undefined or empty.");
      return;
    }

    const fetchPools = async () => {
      try {
        console.log("Calling getPoolsByManager...");
        const res = await getPoolsByManager(walletAddress);
        console.log("Response received:", res);
        setPools(res.data);
      } catch (err) {
        alert("Error fetching your pools.");
        console.error("Error fetching pools:", err);
      }
    };

    fetchPools();
  }, [walletAddress]);

  const handleDelete = async (poolId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this pool?"
    );
    if (!confirmDelete) return;

    try {
      console.log("Deleting pool with ID:", poolId);
      await deletePool(poolId);
      alert("Pool deleted!");
      setPools((prev) => prev.filter((pool) => pool.poolId !== poolId));
    } catch (err) {
      alert("Error deleting pool.");
      console.error("Error deleting pool:", err);
    }
  };

  // if (!walletAddress) {
  //   return (
  //     <div style={{ padding: "1rem", marginTop: "7rem" }}>
  //       <h2>Your Pools</h2>
  //       <p style={{ color: "red" }}>
  //         Please connect your wallet to view your pools.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="poolAndAside">
      <aside className="sidebar yourPools">
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
                <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
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


      <div style={{ padding: "1rem" }} className=" yourPools">
        <h2>Your Pools</h2>
        {pools.length === 0 ? (
          <p>No pools found for this wallet.</p>
        ) : (
          <ul>
            {pools.map((pool) => (
              <li key={pool.poolfId}>
                <strong>{pool.tokenName}</strong> | {pool.poolId}
                <button
                  onClick={() => handleDelete(pool.poolId)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
