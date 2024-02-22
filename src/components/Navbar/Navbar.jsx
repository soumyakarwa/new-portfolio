// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = ({ onSectionChange }) => {
  return (
    // <div className="nav">
    <div className="navbar-container">
      <div className="navbar-left">
        <div
          className="navbar-component"
          onClick={() => onSectionChange("work")}
        >
          SOUMYA KARWA
        </div>
      </div>
      <div className="navbar-right">
        <div
          className="navbar-component"
          onClick={() => onSectionChange("work")}
        >
          Work
        </div>
        {/* <div
          className="navbar-component"
          onClick={() => onSectionChange("play")}
        >
          play
        </div> */}
        <div
          className="navbar-component"
          onClick={() => onSectionChange("about")}
        >
          About
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
