import { useState } from "react";
import { uploadToIPFS } from "../utils/pinata";
import { ethers } from "ethers";
import factoryABI from "../abi/Factory.json";
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
    } catch (err) {
      console.error("Detailed error:", err);
      console.error("Error message:", err?.message);
      console.error("Error stack:", err?.stack);
      console.log("Full error object:", JSON.stringify(err, null, 2));
      alert("Failed to create pool.");
    }
  };

  return (
    <div className="poolAndAside" >
      <aside className="sidebar">
                <div className="sidebar-section">
                  <h4 className="sidebar-title">ANALYTICS</h4>
                  <ul>
                    <li  >
                      <a
                        href="#overview"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("overview");
                        }}
                        className={
                          currentPage === "overview"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                        Overview
                      </a>
      
                    </li>
                    <li >
      
                        <a
                        href="#performance"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("performance");
                        }}
                        className={
                          currentPage === "performance"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                      >
                        <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
                        Performance
                      </a>
      
      
                    </li>
                    <li>
                      <a
                        href="#riskAnalysis"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("riskAnalysis");
                        }}
                        className={
                          currentPage === "riskAnalysis"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
                        Risk Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#marketAnalysis"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("marketAnalysis");
                        }}
                        className={
                          currentPage === "marketAnalysis"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
                        Market Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investerBehaviour"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("investerBehaviour");
                        }}
                        className={
                          currentPage === "investerBehaviour"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Invester Behaviour
                      </a>
                    </li>
                  </ul>
                </div>
      
                <div className="sidebar-section">
                  <h4 className="sidebar-title">REPORTS</h4>
                  <ul>
                    <li>
                      <a
                        href="#monthlyReport"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("monthlyReport");
                        }}
                        className={
                          currentPage === "monthlyReport"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Monthly Report
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quaterelyReport"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("quaterelyReport");
                        }}
                        className={
                          currentPage === "quaterelyReport"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Quaterely Report
                      </a>
                    </li>
                    <li>
                      <a
                        href="#annualReport"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("annualReport");
                        }}
                        className={
                          currentPage === "annualReport"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Annual Report
                      </a>
                    </li>
                  </ul>
                </div>
      
                <div className="sidebar-section">
                  <h4 className="sidebar-title">TOOLS</h4>
                  <ul>
                    <li>
                      <a
                        href="#comparePools"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("comparePools");
                        }}
                        className={
                          currentPage === "comparePools"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faListAlt} className="sidebar-icon" />
                        Compare Pools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#portfolioBuilder"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("portfolioBuilder");
                        }}
                        className={
                          currentPage === "portfolioBuilder"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faWallet} className="sidebar-icon" />
                        Portfolio Builder
                      </a>
                    </li>
                    <li>
                      <a
                        href="#taxCalculator"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("taxCalculator");
                        }}
                        className={
                          currentPage === "taxCalculator"
                            ? "sidebar-link active"
                            : "sidebar-link"
                        }
                        
                      >
                        <FontAwesomeIcon icon={faExchangeAlt} className="sidebar-icon" />
                        Tax Calculator
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
