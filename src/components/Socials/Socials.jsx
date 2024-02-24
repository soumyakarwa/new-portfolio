// Navbar.jsx
import React from "react";
import "./Socials.css";

const Socials = ({ onSectionChange }) => {
  return (
    // <div className="nav">
    <div className="social-container">
      <div
        className="social-component"
        // onClick={() => onSectionChange("inst")}
      >
        INSTAGRAM
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("play")}
      >
        GITHUB
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("about")}
      >
        EMAIL
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("about")}
      >
        LINKEDIN
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("about")}
      >
        RESUME
      </div>
    </div>
    // </div>
  );
};

export default Socials;
