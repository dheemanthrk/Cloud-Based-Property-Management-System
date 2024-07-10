// src/components/Dashboard.js
import React from "react";
import ChatComponent from "./ChatComponent"; // Make sure the path is correct based on your file structure

const Dashboard = () => {
  return (
    <div style={{ margin: "0 auto", maxWidth: 960, padding: "20px" }}>
      <h1>My Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <ChatComponent />
    </div>
  );
};

export default Dashboard;
