// Content.jsx
import React from "react";
import "./Content.css"; // Ensure you import the CSS file

const Content = ({ study }) => {
  const getBackgroundColor = (tag) => {
    const rootStyle = getComputedStyle(document.body);
    const defaultColor = rootStyle.getPropertyValue("--tag-color-1").trim();

    switch (tag) {
      case "Creative Coding":
        return (
          rootStyle.getPropertyValue("--tag-color-2").trim() || defaultColor
        );
      case "Digital Media":
        return (
          rootStyle.getPropertyValue("--tag-color-3").trim() || defaultColor
        );
      // Handle other cases
      default:
        return defaultColor;
    }
  };
  return (
    <div className="content-container">
      <div className="content">
        {/* <img
          src={study.imageUrl}
          alt={`${study.title} cover`}
          className="content-image"
        /> */}
        <div className="content-details">
          <div className="content-description">
            <ul className="content-tags">
              {study.tags.map((tag, idx) => (
                <li
                  key={idx}
                  style={{ backgroundColor: getBackgroundColor(tag) }}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="content-title">{study.title}</div>
            <div className="content-subtitle">{study.subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
