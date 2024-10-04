// Content.jsx
// import React, { useEffect, useState } from "react";
import "./Content.css";

const scrollWithOffset = (element) => {
  const yOffset = -110; // Set the desired offset in pixels
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

const NavigationMenu = ({ section }) => {
  if (!section || !section.paragraphs) {
    console.error("section or paragraphs is undefined");
    return null;
  }

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      scrollWithOffset(element);
    }
  };

  return (
    <nav className="content-nav">
      <ul>
        <li key={section.role}>
          <a href="#role" onClick={(e) => handleClick(e, "#role")}>
            ROLE
          </a>
        </li>
        <li key={section.tech}>
          <a href="#tech" onClick={(e) => handleClick(e, "#tech")}>
            TOOLS & TECH
          </a>
        </li>
        <li key={section.overview}>
          <a href="#overview" onClick={(e) => handleClick(e, "#overview")}>
            OVERVIEW
          </a>
        </li>
        {Object.values(section.paragraphs).map((paragraph, index) => (
          <li key={`nav-para${index + 1}`}>
            <a
              href={`#para${index + 1}`}
              onClick={(e) => handleClick(e, `#para${index + 1}`)}
            >
              {paragraph.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Content = ({ study }) => {
  return (
    <div className="content-container">
      <NavigationMenu section={study} />

      <div className="content-title">
        <div>{study.title}</div>
        <div className="myButton" id="casestudy-button">
          <a href={study.link} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>

      <div className="content">
        <div className="content-details">
          <div className="content-description">
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
                      paragraph.imageType[imgIndex] === "iframe" ? (
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
