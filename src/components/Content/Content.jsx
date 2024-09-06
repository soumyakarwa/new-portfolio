// Content.jsx
import React, { useEffect, useState } from "react";
import "./Content.css";

// Navigation Menu Component
const NavigationMenu = ({ section }) => {
  if (!section || !section.paragraphs) {
    console.error("section or paragraphs is undefined");
    return null;
  }

  return (
    <nav className="content-nav">
      <ul>
        <li key={section.role}>
          <a href={`#role`}>ROLE</a>
        </li>
        <li key={section.tech}>
          <a href={`#tech`}>TECH</a>
        </li>
        <li key={section.overview}>
          <a href={`#overview`}>OVERVIEW</a>
        </li>
        <li key={`section-${2}`}>
          <a href={`#para2`}>{section.paragraphs.para2.title}</a>
        </li>
        {Object.values(section.paragraphs).map((paragraph, index) => (
          <li key={`nav-para${index + 1}`}>
            <a href={`#para${index + 1}`}>{paragraph.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Content = ({ study }) => {
  return (
    <div className="content-container">
      {/* <NavigationMenu section={study} /> */}

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
            <div className="section" id="overview">
              <div className="section-text">
                <div className="section-heading">OVERVIEW</div>
                <div dangerouslySetInnerHTML={{ __html: study.overview }} />
              </div>
            </div>
            {Object.values(study.paragraphs).map((paragraph, index) => (
              <div
                key={`section-${index}`}
                className="section"
                id={`para${index + 1}`}
              >
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
                    paragraph.imageSource.map((url, imgIndex) =>
                      paragraph.imageType[index] === "iframe" ? (
                        <div
                          key={`iframe-${index}-${imgIndex}`}
                          className="iframe-container"
                        >
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
                          key={`img-${index}-${imgIndex}`}
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
