import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

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

      {/* Carousel Section */}
      <div className="homepage-carousel">
        <Carousel>
          <div>
            
              <img src="../../assets/6.jpg" alt="Image 1" />
            
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
