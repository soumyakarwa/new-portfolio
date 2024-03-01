// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = ({ onSectionChange }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div
          className="navbar-component"
          onClick={() => onSectionChange("home")}
        >
          SOUMYA KARWA
        </div>
      </div>
      <div className="navbar-right">
        <div
          className="navbar-component"
          onClick={() => onSectionChange("work")}
        >
          WORK
        </div>
        <div
          className="navbar-component"
          onClick={() => onSectionChange("about")}
        >
          ABOUT
        </div>
      </div>
    </div>
  );
};

export default Navbar;
