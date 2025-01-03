// HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import "../MainPage/MainPage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Welcome to ChitChat World News</h1>
      <p className="homepage-subheading">Please LOGIN or SIGNUP</p>
      <div className="homepage-buttons">
        <button className="homepage-button" onClick={() => navigate("/login")}>
          LOGIN
        </button>
        <button className="homepage-button" onClick={() => navigate("/signup")}>
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default HomePage;
