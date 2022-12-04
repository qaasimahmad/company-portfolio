import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
import { useNavigate } from "react-router-dom";

const Possibility = () => {
  const navigate = useNavigate();
  return (
    <div id="possibility" className="possibility section-padding">
      <div className="possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Request a demo and see what possibilities exist</p>
        <h4 style={{ cursor: "pointer" }} onClick={() => navigate("/contact")}>
          Request a demo
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
