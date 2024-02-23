// Content.jsx
import React from "react";
import "./Content.css"; // Ensure you import the CSS file

const Content = ({ study }) => {
  return (
    <div className="content-container">
      <div className="content">
        <img
          src={study.imageUrl}
          alt={`${study.title} cover`}
          className="content-image"
        />
        <div className="content-details">
          <div className="description">
            <div className="content-title">{study.title}</div>
            <div className="content-subtitle">{study.subtitle}</div>
          </div>
          <ul className="content-tags">
            {study.tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
