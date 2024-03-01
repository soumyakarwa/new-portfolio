// Content.jsx
import React from "react";
import "./Content.css"; // Ensure you import the CSS file

const Content = ({ study }) => {
  const getBackgroundColor = (tag) => {
    const rootStyle = getComputedStyle(document.body);
    const defaultColor = rootStyle.getPropertyValue("--tag-color-1").trim();

    switch (tag) {
      case "Data Visualization":
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
            <div className="section">
              <div className="section-text">
                <div className="section-heading">ROLE</div>
                <div>{study.role}</div>
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">OVERVIEW</div>
                <div>{study.overview}</div>
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.introductionTitle}</div>
                <div>{study.introduction}</div>
              </div>
              <div className="images-container">
                {study.introUrl &&
                  study.introUrl.length > 0 &&
                  study.introUrl.map((url, index) => (
                    <img
                      key={index} // Use index as a key for simplicity; consider using a unique identifier if available
                      src={url}
                      alt={`${study.introductionTitle} cover ${index + 1}`}
                      className="content-image"
                    />
                  ))}
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.paragraph1Title}</div>
                <div>{study.paragraph1}</div>
              </div>
              <div className="images-container">
                {study.para1Url &&
                  study.para1Url.length > 0 &&
                  study.para1Url.map((url, index) => (
                    <img
                      key={index} // Use index as a key for simplicity; consider using a unique identifier if available
                      src={url}
                      alt={`${study.pararaph1Title} cover ${index + 1}`}
                      className="content-image"
                    />
                  ))}
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.paragraph2Title}</div>
                <div>{study.paragraph2}</div>
              </div>
              <div className="images-container">
                {study.para2Url &&
                  study.para2Url.length > 0 &&
                  study.para2Url.map((url, index) => (
                    <img
                      key={index} // Use index as a key for simplicity; consider using a unique identifier if available
                      src={url}
                      alt={`${study.pararaph2Title} cover ${index + 1}`}
                      className="content-image"
                    />
                  ))}
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.designHeading}</div>
              </div>
              <div className="images-container">
                {study.designsUrl &&
                  study.designsUrl.length > 0 &&
                  study.designsUrl.map((url, index) => (
                    <img
                      key={index} // Use index as a key for simplicity; consider using a unique identifier if available
                      src={url}
                      alt={`${study.designHeading} cover ${index + 1}`}
                      className="content-image"
                    />
                  ))}
              </div>
            </div>
            {/* <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.reflectionHeading}</div>
              </div>
              <div className="images-container">
                {study.reflectionUrl &&
                  study.reflectionUrl.length > 0 &&
                  study.reflectionUrl.map((url, index) => (
                    <img
                      key={index} // Use index as a key for simplicity; consider using a unique identifier if available
                      src={url}
                      alt={`${study.reflectionHeading} cover ${index + 1}`}
                      className="content-image"
                    />
                  ))}
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
