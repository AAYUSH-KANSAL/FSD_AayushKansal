import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css"; // Import the CSS file

const DashBoard = ({ regDash }) => {
  // Fallback for missing regDash data
  if (!regDash) {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>User DashBoard</h1>
          <p>No user data available. Please log in.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <h1>User DashBoard</h1>
          <h2 className="logout-text">Logout</h2>
          <p>Welcome, {regDash.name}</p>
        </div>
        <p>Your Login Email: {regDash.email}</p>
        <button onClick={() => alert("Fetching Weather...")}>Fetch Weather</button>
      </div>
    </div>
  );
};

export default DashBoard;
