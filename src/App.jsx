// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import "./index.css"; // Import global styles

// Import all section components for Landing Page
import Header from "./components/Header";
import NavDots from "./components/NavDots";
import PageCounter from "./components/PageCounter";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CtaSection from "./components/CtaSection"; // Corrected import path for CtaSection
import Footer from "./components/Footer";

// Import all main pages
import DashboardPage from "./components/DashboardPage";
import PoolsPage from "./components/PoolsPage";
import AnalyticsPage from "./components/AnalyticsPage";
import GovernancePage from "./components/GovernancePage";
import DocumentationPage from "./components/DocumentationPage"; // Import the DocumentationPage

// Import new dashboard sub-pages
import MyInvestmentsPage from "./components/MyInvestmentsPage";
import WatchlistPage from "./components/WatchlistPage";
import TransactionsPage from "./components/TransactionsPage";

import CreatePoolForm from "./components/CreatePoolForm";

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState("landing"); // Default to landing page

  // Create refs for each landing page section
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);

  // Array of section refs in order, corresponding to the 'sections' array
  const sectionRefs = [heroRef, featuresRef, howItWorksRef, ctaRef];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Only set up IntersectionObserver if on the landing page
    if (currentPage !== "landing") {
      return;
    }

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting section
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1 && index !== currentSection) {
            setCurrentSection(index);
          }
        }
      });
    }, observerOptions);

    // Observe each section
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up observer on component unmount or when leaving landing page
    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, [currentPage, sectionRefs]); // Re-run effect if currentPage changes to/from landing

  const sections = ["Hero", "Features", "Process", "CTA"]; // Used by NavDots and PageCounter on Landing Page

  // Function to navigate between main application pages
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when navigating to a new page
  };

  // Function to scroll to a specific section on the landing page
  const handleDotClick = (index) => {
    if (sectionRefs[index] && sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index); // Manually set active dot immediately on click
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <DashboardPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );



        case "poolForm":
        return (
         <CreatePoolForm 
          onNavigate={handleNavigate}
          currentPage={currentPage}
         />
        );



      case "pools":
        // PoolsPage does not currently use onNavigate/currentPage props for internal nav,
        // but it's good practice to pass them if it might in the future.
        return (
          <PoolsPage onNavigate={handleNavigate} currentPage={currentPage} />
        );
      case "analytics":
        return (
          <AnalyticsPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );
      case "governance":
        return (
          <GovernancePage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );
      case "my-investments":
        return (
          <MyInvestmentsPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );
      case "watchlist":
        return (
          <WatchlistPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );
      case "transactions":
        return (
          <TransactionsPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );
      case "documentation": // New case to render DocumentationPage
        return (
          <DocumentationPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        );
      case "landing":
      default: // Fallback to landing page if currentPage is not recognized or explicitly 'landing'
        return (
          <React.Fragment>
            {/* Navigation Dots uses the new handleDotClick for scrolling */}
            <NavDots
              sections={sections}
              currentSection={currentSection}
              onDotClick={handleDotClick} // Pass the new click handler
            />
            <PageCounter currentSection={currentSection} />
            {/* Landing Page Sections - now with refs */}
            <HeroSection ref={heroRef} mousePosition={mousePosition} />
            <StatsSection />{" "}
            {/* StatsSection does not need a ref for scrolling directly by dots, as it's between Hero and Features */}
            <FeaturesSection ref={featuresRef} />
            <HowItWorksSection ref={howItWorksRef} />
            {/* CTA Section - Pass the handleNavigate function as onNavigate prop */}
            <CtaSection ref={ctaRef} onNavigate={handleNavigate} />
            <Footer />
          </React.Fragment>
        );
    }
  };

  return (
    <div className="app-root-container">
      {/* Header is always rendered and can trigger navigation */}
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
