// src/components/AnalyticsPage/AnalyticsPage.jsx
import React from "react";
import "./AnalyticsPage.css"; // Import its corresponding CSS file
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
  //   faQuestionCircle,
  //   faComments,
  faChevronDown,
  //   faUpload,
  faFileExport,
  faPlus,
  faMinus,
  faSquare,
  faBolt,
  //   faFire,
  faArrowUp,
  faArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const AnalyticsPage = ( {onNavigate, currentPage} ) => {
  return (
    <div className="analytics-page-container">
      <div className="analytics-content-area">
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

        <main className="main-content">
          <div className="page-header">
            <div>
              <h1 className="page-title">Investment Analytics</h1>
              <p className="page-description">
                Comprehensive data visualizations and insights for your
                investment portfolio
              </p>
            </div>
            <div className="header-actions">
              <button className="action-button">
                Last 30 Days <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <button className="action-button">
                Metrics <FontAwesomeIcon icon={faPlus} />{" "}
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="action-button">
                <FontAwesomeIcon icon={faFileExport} /> Export
              </button>
            </div>
          </div>

          <div className="summary-cards-grid">
            <div className="summary-card">
              <div className="card-icon-wrapper primary-icon">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <p className="card-label">Portfolio Value</p>
              <h3 className="card-value">
                $295,482{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 8.2%
                </span>
              </h3>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper secondary-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <p className="card-label">24h Performance</p>
              <h3 className="card-value">
                + $5,823{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 12.1%
                </span>
              </h3>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper tertiary-icon">
                <FontAwesomeIcon icon={faSquare} /> {/* Placeholder icon */}
              </div>
              <p className="card-label">Total Profit/Loss</p>
              <h3 className="card-value">
                + $48,291{" "}
                <span className="percentage-positive">
                  <FontAwesomeIcon icon={faArrowUp} /> 19.5%
                </span>
              </h3>
            </div>
            <div className="summary-card">
              <div className="card-icon-wrapper quaternary-icon">
                <FontAwesomeIcon icon={faBolt} />{" "}
                {/* Using faBolt for Risk Score */}
              </div>
              <p className="card-label">Risk Score</p>
              <h3 className="card-value">
                3.2/5{" "}
                <span className="percentage-negative">
                  <FontAwesomeIcon icon={faArrowDown} /> 0.3
                </span>
              </h3>
            </div>
          </div>

          <div className="dashboard-section portfolio-performance-chart">
            <div className="section-header">
              <h2 className="section-title">Portfolio Performance</h2>
              <div className="chart-filters">
                <span>Portfolio Value</span>{" "}
                <div className="legend-color-box green"></div>
                <span>Benchmark</span>{" "}
                <div className="legend-color-box purple"></div>
                <button className="filter-btn">24H</button>
                <button className="filter-btn">7D</button>
                <button className="filter-btn active">30D</button>
                <button className="filter-btn">90D</button>
                <button className="filter-btn">1Y</button>
                <button className="filter-btn">ALL</button>
              </div>
            </div>
            <div className="chart-area-full">
              {/* Hardcoded Chart */}
              <div className="chart-y-axis">
                <span>$500K</span>
                <span>$400K</span>
                <span>$300K</span>
                <span>$200K</span>
                <span>$100K</span>
                <span>$0K</span>
              </div>
              <div className="chart-grid-container">
                <div className="chart-line-value"></div>{" "}
                {/* This will be the actual value line */}
                <div className="chart-line-benchmark"></div>{" "}
                {/* This will be the benchmark line */}
                {/* Dots on the value line */}
                <div className="chart-dot value d1"></div>
                <div className="chart-dot value d2"></div>
                <div className="chart-dot value d3"></div>
                <div className="chart-dot value d4"></div>
                <div className="chart-dot value d5"></div>
                <div className="chart-dot value d6"></div>
                <div className="chart-dot value d7"></div>
                <div className="chart-dot value d8"></div>
                <div className="chart-dot value d9"></div>
                <div className="chart-dot value d10"></div>
                <div className="chart-dot value d11"></div>
                <div className="chart-dot value d12"></div>
                {/* Dots on the benchmark line */}
                <div className="chart-dot benchmark b1"></div>
                <div className="chart-dot benchmark b2"></div>
                <div className="chart-dot benchmark b3"></div>
                <div className="chart-dot benchmark b4"></div>
                <div className="chart-dot benchmark b5"></div>
                <div className="chart-dot benchmark b6"></div>
                <div className="chart-dot benchmark b7"></div>
                <div className="chart-dot benchmark b8"></div>
                <div className="chart-dot benchmark b9"></div>
                <div className="chart-dot benchmark b10"></div>
                <div className="chart-dot benchmark b11"></div>
                <div className="chart-dot benchmark b12"></div>
              </div>
              <div className="chart-x-axis">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
            <div className="performance-summary-values">
              <div className="value-item">
                <span className="value-label">Starting Value</span>
                <span className="value-number">$120,000</span>
              </div>
              <div className="value-item">
                <span className="value-label">Current Value</span>
                <span className="value-number">$295,482</span>
              </div>
              <div className="value-item">
                <span className="value-label">Absolute Gain/Loss</span>
                <span className="value-number positive">+ $175,482</span>
              </div>
              <div className="value-item">
                <span className="value-label">Percentage Gain/Loss</span>
                <span className="value-number positive">+ 146.2 %</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid-two-cols">
            <div className="dashboard-section asset-allocation-chart">
              <h2 className="section-title">Asset Allocation</h2>
              <div className="chart-placeholder donut-chart">
                {/* Hardcoded Donut Chart - using image for simplicity here, ideally CSS conic-gradient */}
                <img
                  src="image.png" // Replace with your actual donut chart image URL
                  alt="Asset Allocation Donut Chart"
                  style={{
                    borderRadius: "50%",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="asset-allocation-details">
                <p>
                  <span className="color-box defi"></span> DeFi: 35 %
                </p>
                <p>
                  <span className="color-box layer1"></span> Layer 1: 25 %
                </p>
                <p>
                  <span className="color-box stablecoins"></span> Stablecoins: 5
                  %
                </p>
                <p>
                  <span className="color-box nfts"></span> NFTs: 20 %
                </p>
                <p>
                  <span className="color-box layer2"></span> Layer 2: 15 %
                </p>
              </div>
            </div>

            <div className="dashboard-section risk-return-analysis-chart">
              <h2 className="section-title">Risk-Return Analysis</h2>
              <div className="chart-placeholder scatter-chart">
                {/* Hardcoded Scatter Plot/Line Chart for Risk-Return */}
                <div className="risk-return-y-axis">
                  <span>30 -</span>
                  <span>25 -</span>
                  <span>20 -</span>
                  <span>15 -</span>
                  <span>10 -</span>
                  <span>5 -</span>
                </div>
                <div className="risk-return-chart-area">
                  <div className="risk-return-line"></div>
                  {/* Hardcoded points for illustration */}
                  <div className="risk-return-point rp1"></div>
                  <div className="risk-return-point rp2"></div>
                  <div className="risk-return-point rp3"></div>
                  <div className="risk-return-point rp4"></div>
                  <div className="risk-return-point rp5"></div>
                  <div className="risk-return-point rp6"></div>
                </div>
                <div className="risk-return-x-axis">
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </div>
                <span className="risk-label-x">Risk (%)</span>
              </div>
              <p className="efficient-frontier-description">
                <span className="efficient-frontier-highlight">
                  Efficient Frontier:
                </span>{" "}
                The curved line represents the optimal portfolio combinations
                with the highest expected return for a given risk level.
              </p>
            </div>
          </div>

          <div className="dashboard-section performance-metrics-table">
            <div className="section-header">
              <h2 className="section-title">Performance Metrics</h2>
              <div className="search-input-wrapper small">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search pools..."
                  className="search-input"
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="metrics-table">
                <thead>
                  <tr>
                    <th>POOL NAME</th>
                    <th>RETURN (30D)</th>
                    <th>TVL</th>
                    <th>RISK SCORE</th>
                    <th>SHARPE RATIO</th>
                    <th>VOLATILITY</th>
                    <th>DRAWDOWN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DeFi Alpha Strategy</td>
                    <td className="positive">+24.8 %</td>
                    <td>$12.5M</td>
                    <td>4.0/5</td>
                    <td>1.8</td>
                    <td>18.2 %</td>
                    <td className="negative">-12.5 %</td>
                  </tr>
                  <tr>
                    <td>Blue Chip Collector</td>
                    <td className="positive">+18.3 %</td>
                    <td>$8.2M</td>
                    <td>3.0/5</td>
                    <td>2.1</td>
                    <td>12.5 %</td>
                    <td className="negative">-8.7 %</td>
                  </tr>
                  <tr>
                    <td>Yield Maximizer</td>
                    <td className="positive">+16.5 %</td>
                    <td>$5.7M</td>
                    <td>3.0/5</td>
                    <td>1.9</td>
                    <td>14.8 %</td>
                    <td className="negative">-10.2 %</td>
                  </tr>
                  <tr>
                    <td>NFT Momentum</td>
                    <td className="positive">+15.2 %</td>
                    <td>$3.8M</td>
                    <td>4.0/5</td>
                    <td>1.5</td>
                    <td>22.5 %</td>
                    <td className="negative">-18.3 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="dashboard-grid-two-cols">
            <div className="dashboard-section tvl-trend-chart">
              <h2 className="section-title">TVL Trend by Chain</h2>
              <div className="chart-legend">
                <span>
                  <div className="legend-color-box blue"></div> Ethereum
                </span>
                <span>
                  <div className="legend-color-box green"></div> Polygon
                </span>
                <span>
                  <div className="legend-color-box red"></div> Arbitrum
                </span>
                <span>
                  <div className="legend-color-box orange"></div> Optimism
                </span>
                <span>
                  <div className="legend-color-box purple"></div> Avalanche
                </span>
              </div>
              <div className="chart-placeholder bar-chart">
                {/* Hardcoded Bar Chart - using image for simplicity here */}
                <img
                  src="bar.png"
                  alt="TVL Trend by Chain Chart"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>

            <div className="dashboard-section chain-performance-chart">
              <h2 className="section-title">Chain Performance Comparison</h2>
              <div className="chart-legend">
                <span>
                  <div className="legend-color-box light-blue"></div> TVL
                </span>
                <span>
                  <div className="legend-color-box light-green"></div> Returns
                </span>
                <span>
                  <div className="legend-color-box light-purple"></div>{" "}
                  Transactions
                </span>
              </div>
              <div className="chart-placeholder bar-chart-horizontal">
                {/* Hardcoded Horizontal Bar Chart - using image for simplicity here */}
                <img
                  src="chain.png"
                  alt="Chain Performance Comparison Chart"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="dashboard-section risk-assessment-dashboard">
            <h2 className="section-title">Risk Assessment Dashboard</h2>
            <div className="dashboard-grid-two-cols">
              <div className="dashboard-sub-section volatility-analysis">
                <h3 className="sub-section-title">Volatility Analysis</h3>
                <div className="chart-legend">
                  <span>
                    <div className="legend-color-box blue"></div> Portfolio
                    Volatility
                  </span>
                  <span>
                    <div className="legend-color-box red-dashed"></div> Market
                    Volatility
                  </span>
                </div>
                <div className="chart-placeholder line-chart">
                  {/* Hardcoded Volatility Analysis Chart */}
                  <div className="volatility-y-axis">
                    <span>70 %</span>
                    <span>60 %</span>
                    <span>50 %</span>
                    <span>40 %</span>
                    <span>30 %</span>
                    <span>20 %</span>
                    <span>10 %</span>
                    <span>0 %</span>
                  </div>
                  <div className="volatility-chart-area">
                    <div className="volatility-line-portfolio"></div>
                    <div className="volatility-line-market"></div>
                    {/* Points could be added similarly to Portfolio Performance */}
                  </div>
                  <div className="volatility-x-axis">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-sub-section risk-factors">
                <h3 className="sub-section-title">Risk Factors</h3>
                <div className="risk-factor-item">
                  <p>Market Risk</p>
                  <div className="risk-bar high"></div>
                  <span>High</span>
                </div>
                <div className="risk-factor-item">
                  <p>Liquidity Risk</p>
                  <div className="risk-bar medium"></div>
                  <span>Medium</span>
                </div>
                <div className="risk-factor-item">
                  <p>Smart Contract Risk</p>
                  <div className="risk-bar medium"></div>
                  <span>Medium</span>
                </div>
                <div className="risk-factor-item">
                  <p>Counterparty Risk</p>
                  <div className="risk-bar low"></div>
                  <span>Low</span>
                </div>
                <div className="risk-factor-item">
                  <p>Regulatory Risk</p>
                  <div className="risk-bar medium-high"></div>
                  <span>Medium-High</span>
                </div>
              </div>
            </div>

            <div className="dashboard-grid-two-cols">
              <div className="dashboard-sub-section correlation-matrix">
                <h3 className="sub-section-title">Correlation Matrix</h3>
                <div className="table-responsive">
                  <table className="metrics-table">
                    <thead>
                      <tr>
                        <th>POOL</th>
                        <th>DEFI ALPHA</th>
                        <th>BLUE CHIP</th>
                        <th>YIELD MAX</th>
                        <th>NFT</th>
                        <th>STABLECOIN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DeFi Alpha</td>
                        <td>1.00</td>
                        <td>0.75</td>
                        <td>0.82</td>
                        <td>0.45</td>
                        <td>0.12</td>
                      </tr>
                      <tr>
                        <td>Blue Chip</td>
                        <td>0.75</td>
                        <td>1.00</td>
                        <td>0.68</td>
                        <td>0.52</td>
                        <td>0.18</td>
                      </tr>
                      <tr>
                        <td>Yield Max</td>
                        <td>0.82</td>
                        <td>0.68</td>
                        <td>1.00</td>
                        <td>0.38</td>
                        <td>0.35</td>
                      </tr>
                      <tr>
                        <td>NFT</td>
                        <td>0.45</td>
                        <td>0.52</td>
                        <td>0.38</td>
                        <td>1.00</td>
                        <td>0.08</td>
                      </tr>
                      <tr>
                        <td>Stablecoin</td>
                        <td>0.12</td>
                        <td>0.18</td>
                        <td>0.35</td>
                        <td>0.08</td>
                        <td>1.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="dashboard-sub-section risk-mitigation">
                <h3 className="sub-section-title">
                  Risk Mitigation Recommendations
                </h3>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="recommendation-icon"
                    />{" "}
                    Consider increasing stablecoin allocation to reduce overall
                    portfolio volatility
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="recommendation-icon"
                    />{" "}
                    Diversify DeFi exposure across multiple protocols to reduce
                    smart contract risk
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="recommendation-icon"
                    />{" "}
                    Implement stop-loss strategies for high-volatility assets
                    like NFTs
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="recommendation-icon"
                    />{" "}
                    Consider hedging strategies during periods of high market
                    uncertainty
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="recommendation-icon"
                    />{" "}
                    Regularly rebalance portfolio to maintain target risk levels
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="optimize-portfolio-cta">
            <div className="cta-left">
              <h2 className="cta-title">Ready to optimize your portfolio?</h2>
              <p className="cta-description">
                Use our Portfolio Builder tool to create a custom investment
                strategy based on your risk profile and investment goals.
              </p>
            </div>
            <div className="cta-right">
              <button className="cta-button primary">
                <FontAwesomeIcon icon={faWallet} /> Portfolio Builder
              </button>
              <button className="cta-button secondary">
                <FontAwesomeIcon icon={faListAlt} /> Compare Pools
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;
