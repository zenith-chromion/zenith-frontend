// src/components/DocumentationPage/DocumentationPage.jsx
import React from "react";
import "./DocumentationPage.css"; // Import its corresponding CSS file

// Import global Header and Footer components
import Header from "./Header"; // Assuming Header is in src/components/Header/Header.jsx
import Footer from "./Footer"; // Assuming Footer is in src/components/Footer/Footer.jsx

const DocumentationPage = ({ onNavigate, currentPage }) => {
  return (
    <div className="documentation-page-wrapper">
      {/* The global Header component */}
      {/* Header handles its own fixed positioning, so no specific wrapper needed here */}
      <Header onNavigate={onNavigate} currentPage={currentPage} />

      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero">
            <span className="version-badge">Version 1.0 Alpha</span>
            <h1>Comprehensive Documentation</h1>
            <p>
              Dive deep into how FundForge works, from technical specifications
              to user guides and best practices. Explore our protocols, smart
              contracts, and integration options.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="toc">
            <h2>Table of Contents</h2>
            <div className="toc-grid">
              <div className="toc-item">
                <h3>Getting Started</h3>
                <p>
                  Learn how to set up your account and make your first
                  investment.
                </p>
              </div>
              <div className="toc-item">
                <h3>Core Concepts</h3>
                <p>
                  Understand the fundamental principles behind decentralized
                  fund management.
                </p>
              </div>
              <div className="toc-item">
                <h3>Smart Contracts</h3>
                <p>
                  Detailed overview of our audited smart contracts and their
                  functionalities.
                </p>
              </div>
              <div className="toc-item">
                <h3>Integration Guide</h3>
                <p>
                  Instructions for developers to integrate with FundForge APIs
                  and protocols.
                </p>
              </div>
              <div className="toc-item">
                <h3>Security & Audits</h3>
                <p>
                  Information on our security measures and third-party audit
                  reports.
                </p>
              </div>
              <div className="toc-item">
                <h3>Governance & DAO</h3>
                <p>
                  Learn about community governance, voting, and proposal
                  submission.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Core Concepts */}
          <section className="section" id="core-concepts">
            <h2>Core Concepts</h2>
            <p>
              FundForge operates on a decentralized architecture, enabling
              transparent and trustless fund management. Our platform utilizes a
              combination of cutting-edge blockchain technologies to connect
              skilled fund managers with passive investors globally.
            </p>
            <h3>Decentralized Pools</h3>
            <p>
              At the heart of FundForge are decentralized investment pools.
              These pools are smart contracts that hold assets and execute
              trading strategies defined by fund managers. Investors contribute
              to these pools and receive LP tokens representing their share.
            </p>
            <h3>Cross-Chain Interoperability</h3>
            <p>
              Powered by Chainlink CCIP, FundForge facilitates seamless asset
              transfers and strategy execution across multiple blockchain
              networks. This eliminates the need for wrapped assets or complex
              bridging solutions, offering true cross-chain liquidity.
            </p>
          </section>

          {/* Section: For Investors */}
          <section className="section" id="for-investors">
            <h2>For Investors</h2>
            <p>
              FundForge provides a user-friendly interface for investors to
              discover, evaluate, and invest in decentralized fund pools. Your
              assets remain under the control of smart contracts, ensuring
              security and transparency.
            </p>
            <div className="cards-grid">
              <div className="card">
                <h4>Browse & Discover</h4>
                <p>
                  Explore a diverse range of fund pools, filtered by
                  performance, risk, and strategy.
                </p>
              </div>
              <div className="card">
                <h4>Transparent Performance</h4>
                <p>
                  All trading activities and performance metrics are verifiable
                  on-chain using ZK proofs.
                </p>
              </div>
              <div className="card">
                <h4>Flexible Withdrawals</h4>
                <p>
                  Withdraw your funds and accumulated profits according to the
                  pool's predefined terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section: For Fund Managers */}
          <section className="section" id="for-managers">
            <h2>For Fund Managers</h2>
            <p>
              FundForge empowers skilled traders to manage capital from a global
              investor base without custodial risks. Create your own pools,
              define strategies, and earn performance fees.
            </p>
            <div className="cards-grid">
              <div className="card">
                <h4>Create Custom Pools</h4>
                <p>
                  Define your investment thesis, fee structure, and risk
                  parameters.
                </p>
              </div>
              <div className="card">
                <h4>Automated Execution</h4>
                <p>
                  Utilize Chainlink Automation for scheduled rebalancing and
                  profit distribution.
                </p>
              </div>
              <div className="card">
                <h4>Prove Performance</h4>
                <p>
                  Leverage zero-knowledge proofs to verify your trading success
                  privately.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Protocol Roadmap (Timeline) */}
          <section className="section" id="roadmap">
            <h2>Protocol Roadmap</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Q1 2024: Alpha Launch</h4>
                <p>
                  Initial release with core fund management features and basic
                  cross-chain support (Ethereum, Polygon).
                </p>
              </div>
              <div className="timeline-item">
                <h4>Q2 2024: Advanced Analytics & ZK Integration</h4>
                <p>
                  Introduction of comprehensive analytics dashboards and initial
                  zero-knowledge proof integration for performance verification.
                </p>
              </div>
              <div className="timeline-item">
                <h4>Q3 2024: Multi-Chain Expansion</h4>
                <p>
                  Integration with additional EVM-compatible chains and enhanced
                  Chainlink CCIP functionalities.
                </p>
              </div>
              <div className="timeline-item">
                <h4>Q4 2024: DAO Governance & Community Treasury</h4>
                <p>
                  Rollout of decentralized autonomous organization (DAO) for
                  community-led protocol upgrades and treasury management.
                </p>
              </div>
            </div>
          </section>

          {/* Section: FAQ */}
          <section className="section" id="faq">
            <h2>Frequently Asked Questions</h2>
            <h3>What is FundForge?</h3>
            <p>
              FundForge is a decentralized fund management protocol that
              connects investors with skilled crypto traders using blockchain
              technology, smart contracts, and zero-knowledge proofs for
              transparency and security.
            </p>
            <h3>How do I invest?</h3>
            <p>
              You can connect your web3 wallet, browse available fund pools,
              review their performance and risk profiles, and deposit your
              assets directly into the smart contract.
            </p>
            <h3>Are my funds safe?</h3>
            <p>
              Your funds are held in audited smart contracts. Fund managers can
              only execute trades within predefined parameters and cannot
              withdraw funds directly. We prioritize security and regularly
              conduct audits.
            </p>
          </section>
        </div>
      </main>

      {/* The global Footer component */}
      <Footer />
    </div>
  );
};

export default DocumentationPage;
