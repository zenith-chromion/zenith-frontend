// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Header.css"; // Make sure you have your CSS file

export default function Header({ onNavigate, currentPage }) {
  const [account, setAccount] = useState(null);
  const [currentNetwork, setCurrentNetwork] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Network configurations
  const networks = {
    "0x1": { name: "Ethereum", icon: "⟠", color: "#627EEA" },
    "0x2105": { name: "Base", icon: "🔵", color: "#0052FF" },
    "0xa4b1": { name: "Arbitrum", icon: "🔷", color: "#28A0F0" },
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get current network info
  const getCurrentNetwork = async () => {
    if (window.ethereum) {
      try {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        setCurrentNetwork(chainId);
      } catch (error) {
        console.error("Error getting network:", error);
      }
    }
  };

  // Listen for network changes
  useEffect(() => {
    if (window.ethereum) {
      const handleChainChanged = (chainId) => {
        setCurrentNetwork(chainId);
      };

      window.ethereum.on("chainChanged", handleChainChanged);
      
      // Get initial network if wallet is connected
      if (account) {
        getCurrentNetwork();
      }

      return () => {
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, [account]);

  // 1️⃣ Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      getCurrentNetwork();
    } catch (err) {
      console.error(err);
    }
  };

  // 2️⃣ Switch network
  const switchNetwork = async (chainId) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
      setCurrentNetwork(chainId);
      setIsDropdownOpen(false);
    } catch (switchError) {
      if (switchError.code === 4902) {
        alert(
          "This network is not added to your MetaMask. Please add it manually."
        );
      } else {
        console.error(switchError);
      }
    }
  };

  // 3️⃣ Handle user selecting a network
  const handleNetworkSelect = (network) => {
    let chainId = "";
    switch (network) {
      case "ethereum":
        chainId = "0x1";
        break;
      case "base":
        chainId = "0x2105";
        break;
      case "arbitrum":
        chainId = "0xa4b1";
        break;
      default:
        return;
    }
    switchNetwork(chainId);
  };

  // Get display info for current network
  const getCurrentNetworkInfo = () => {
    return networks[currentNetwork] || { name: "Unknown", icon: "❓", color: "#666" };
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <span
            className="logo-text"
            onClick={() => onNavigate("landing")}
            style={{ cursor: "pointer" }}
          >
            ZENITHVAULT
          </span>
        </div>
        <nav className="nav-menu">
          <a
            href="#dashboard"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("dashboard");
            }}
            className={currentPage === "dashboard" ? "active" : ""}
          >
            Dashboard
          </a>
          <a
            href="#pools"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("pools");
            }}
            className={currentPage === "pools" ? "active" : ""}
          >
            Pools
          </a>
          <a
            href="#analytics"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("analytics");
            }}
            className={currentPage === "analytics" ? "active" : ""}
          >
            Analytics
          </a>
          <a
            href="#governance"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("governance");
            }}
            className={currentPage === "governance" ? "active" : ""}
          >
            Governance
          </a>

          <div className="wallet-connection">
            {!account ? (
              <button className="connect-wallet-btn" onClick={connectWallet}>
                Connect Wallet
              </button>
            ) : (
              <div className="connected-wallet">
                <div className="wallet-info">
                  <span className="wallet-address">
                    {account.slice(0, 6)}...{account.slice(-4)}
                  </span>
                </div>
                
                <div className="network-dropdown" ref={dropdownRef}>
                  <button
                    className="network-selector-btn"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{
                      borderColor: getCurrentNetworkInfo().color,
                    }}
                  >
                    <span className="network-icon">
                      {getCurrentNetworkInfo().icon}
                    </span>
                    <span className="network-name">
                      {getCurrentNetworkInfo().name}
                    </span>
                    <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="network-dropdown-menu">
                      {Object.entries(networks).map(([chainId, network]) => (
                        <button
                          key={chainId}
                          className={`network-option ${currentNetwork === chainId ? 'active' : ''}`}
                          onClick={() => switchNetwork(chainId)}
                          style={{
                            borderLeft: `3px solid ${network.color}`,
                          }}
                        >
                          <span className="network-icon">{network.icon}</span>
                          <span className="network-name">{network.name}</span>
                          {currentNetwork === chainId && (
                            <span className="network-status">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      <style jsx>{`
        .connected-wallet {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .wallet-info {
          display: flex;
          align-items: center;
        }

        .wallet-address {
          font-size: 14px;
          color: #b0b0b0;
          font-weight: 500;
        }

        .network-dropdown {
          position: relative;
        }

        .network-selector-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #2a2a2a;
          border: 2px solid #404040;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          transition: all 0.2s ease;
          min-width: 120px;
        }

        .network-selector-btn:hover {
          background: #353535;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          border-color: #555555;
        }

        .network-icon {
          font-size: 16px;
        }

        .network-name {
          flex-grow: 1;
          text-align: left;
          color: #ffffff;
        }

        .dropdown-arrow {
          font-size: 10px;
          transition: transform 0.2s ease;
          color: #b0b0b0;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .network-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #2a2a2a;
          border: 1px solid #404040;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          z-index: 1000;
          margin-top: 4px;
          overflow: hidden;
        }

        .network-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 16px;
          background: #2a2a2a;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          transition: background-color 0.2s ease;
          text-align: left;
        }

        .network-option:hover {
          background: #353535;
        }

        .network-option.active {
          background: #1a2332;
          color: #4da6ff;
        }

        .network-option .network-icon {
          font-size: 16px;
        }

        .network-option .network-name {
          flex-grow: 1;
          color: inherit;
        }

        .network-status {
          color: #4ade80;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .connected-wallet {
            flex-direction: column;
            gap: 8px;
          }
          
          .network-selector-btn {
            min-width: 100px;
            font-size: 12px;
            padding: 6px 10px;
          }
          
          .wallet-address {
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
}