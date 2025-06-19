import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import "./index.css"; // Import global styles (though minimal with Tailwind CDN)
import "./App.css"; // Import App-specific styles (likely minimal with Tailwind CDN)

// Get the root element from index.html where the React app will be mounted
const rootElement = document.getElementById("root");

// Create a React root and render the App component
// This is the entry point that bootstraps your React application.
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
