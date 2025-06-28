import { useState } from "react";
import { uploadToIPFS } from "../utils/pinata";
import { ethers } from "ethers";
import factoryABI from "../abi/Factory.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addPoolToDb } from "../utils/api";
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
const FACTORY_ADDRESS = "0xYourFactoryAddressHere";
import "./CreatePoolForm.css"; // Import its corresponding CSS file

export default function CreatePoolForm({ onNavigate, currentPage }) {
  const [formData, setFormData] = useState({
    tokenArbitrum: "",
    tokenEth: "",
    tokenPolygon: "",
    tokenName: "",
    strategies: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatePool = async () => {
    try {
      console.log("Button clicked !");
      // 1. Prepare data to store on IPFS
      const metadata = {
        tokenName: formData.tokenName,
        tokenAddresses: {
          arbitrum: formData.tokenArbitrum,
          ethereum: formData.tokenEth,
          polygon: formData.tokenPolygon,
        },
        strategies: formData.strategies,
      };

      // 2. Upload to IPFS via Pinata
      const cid = await uploadToIPFS(metadata);
      console.log("Uploaded to IPFS, CID:", cid);

      // 3. Connect wallet
      if (!window.ethereum) throw new Error("Please install MetaMask");

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const factory = new ethers.Contract(FACTORY_ADDRESS, factoryABI, signer);

      // 4. Call createNewPool
      const tx = await factory.createNewPool(
        formData.tokenArbitrum,
        formData.tokenEth,
        formData.tokenPolygon,
        cid
      );

      await tx.wait();
      alert("Pool created successfully!");

      // Now add the pool to database .!
      await addPoolToDb({
        poolId: tx.hash,
        fundManager: await signer.getAddress(),
        tokenName: formData.tokenName,
        tokenAddresses: {
          arbitrum: formData.tokenArbitrum,
          ethereum: formData.tokenEth,
          polygon: formData.tokenPolygon,
        },
        strategies: formData.strategies,
      });
      alert("Pool saved to mongo database");
    } catch (err) {
      console.error("Detailed error:", err);
      console.error("Error message:", err?.message);
      console.error("Error stack:", err?.stack);
      console.log("Full error object:", JSON.stringify(err, null, 2));
      alert("Failed to create pool.");
    }
  };

  return (
    <div className="poolAndAside">
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
      <div className="createPool">
        <h2>Create Pool</h2>
        <input
          name="tokenArbitrum"
          placeholder="Token Address on Arbitrum"
          onChange={handleChange}
        />
        <input
          name="tokenEth"
          placeholder="Token Address on Ethereum"
          onChange={handleChange}
        />
        <input
          name="tokenPolygon"
          placeholder="Token Address on Polygon"
          onChange={handleChange}
        />
        <input
          name="tokenName"
          placeholder="Token Name"
          onChange={handleChange}
        />
        <textarea
          name="strategies"
          placeholder="Strategy Details (as JSON or text)"
          onChange={handleChange}
        />
        <button className="create-pool-btn-btn" onClick={handleCreatePool}>
          Create Pool
        </button>
      </div>
    </div>
  );
}
