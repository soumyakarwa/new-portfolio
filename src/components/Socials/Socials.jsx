// Navbar.jsx
import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="social-container">
      <div className="social-component">
        <a
          href="https://www.instagram.com/sk.arwaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>
      </div>
      <div className="social-component">
        <a
          href="https://github.com/soumyakarwa"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
      </div>
      <div className="social-component">
        <a href="mailto:karws352@newschool.edu">EMAIL</a>
      </div>
      <div className="social-component">
        <a
          href="https://www.linkedin.com/in/soumyakarwa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Socials;
