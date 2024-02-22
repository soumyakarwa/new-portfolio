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
        Instagram
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("play")}
      >
        GitHub
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("about")}
      >
        Email
      </div>
      <div
        className="social-component"
        // onClick={() => onSectionChange("about")}
      >
        LinkedIn
      </div>
    </div>
    // </div>
  );
};

export default Socials;
