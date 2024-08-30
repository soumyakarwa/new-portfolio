// Content.jsx
import React from "react";
import "./Content.css"; // Ensure you import the CSS file

const Content = ({ study }) => {
  // const getBackgroundColor = (tag) => {
  //   const rootStyle = getComputedStyle(document.body);
  //   const defaultColor = rootStyle.getPropertyValue("--tag-color-1").trim();

  //   switch (tag) {
  //     case "Data Visualization":
  //       return (
  //         rootStyle.getPropertyValue("--tag-color-2").trim() || defaultColor
  //       );
  //     case "Digital Media":
  //       return (
  //         rootStyle.getPropertyValue("--tag-color-3").trim() || defaultColor
  //       );
  //     // Handle other cases
  //     default:
  //       return defaultColor;
  //   }
  // };
  return (
    <div className="content-container">
      <div className="content">
        <div className="content-details">
          <div className="content-description">
            {/* <ul className="content-tags">
              {study.tags.map((tag, idx) => (
                <li
                  key={idx}
                  style={{ backgroundColor: getBackgroundColor(tag) }}
                >
                  {tag}
                </li>
              ))}
            </ul> */}
            <div className="content-title">
              <div>{study.title}</div>
              <div className="myButton" id="casestudy-button">
                <a href={study.link} target="_blank" rel="noopener noreferrer">
                  DEMO
                </a>
              </div>
            </div>
            <div className="section" id="role">
              <div className="section-text">
                <div className="section-heading">ROLE</div>
                <div>{study.role}</div>
              </div>
            </div>
            <div className="section" id="tech">
              <div className="section-text">
                <div className="section-heading">TOOLS & TECH</div>
                <div>{study.tech}</div>
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">OVERVIEW</div>
                <div dangerouslySetInnerHTML={{ __html: study.overview }} />
              </div>
            </div>
            {Object.values(study.paragraphs).map((paragraph, index) => (
              <div key={index} className="section">
                <div className="section-text">
                  {paragraph.title && (
                    <div className="section-heading">{paragraph.title}</div>
                  )}
                  {paragraph.content && (
                    <div
                      dangerouslySetInnerHTML={{ __html: paragraph.content }}
                    />
                  )}
                </div>
                <div className="images-container">
                  {paragraph.imageSource &&
                    paragraph.imageSource.length > 0 &&
                    paragraph.imageSource.map((url, index) =>
                      paragraph.imageType[index] === "iframe" ? (
                        <div key={index} className="iframe-container">
                          <iframe
                            src={url}
                            className="responsive-iframe"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={`${paragraph.title} cover ${index + 1}`}
                          ></iframe>
                        </div>
                      ) : (
                        <img
                          key={index}
                          src={url}
                          alt={`${paragraph.title} cover ${index + 1}`}
                          className="content-image"
                        />
                      )
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
