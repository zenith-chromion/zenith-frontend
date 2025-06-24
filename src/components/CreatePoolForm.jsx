import { useState } from "react";
import { uploadToIPFS } from "../utils/pinata";
import { ethers } from "ethers";
import factoryABI from "../abi/Factory.json";

const FACTORY_ADDRESS = "0xYourFactoryAddressHere";
import "./CreatePoolForm.css"; // Import its corresponding CSS file

export default function CreatePoolForm() {
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
      console.error("err is ", err);
    //   alert("Failed to create pool.");
    }
  };

  return (
    <div className="createPool" >
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
  );
}
