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
            <div className="section">
              <div className="section-text">
                <div className="section-heading">OVERVIEW</div>
                <div dangerouslySetInnerHTML={{ __html: study.overview }} />
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.introductionTitle}</div>
                <div dangerouslySetInnerHTML={{ __html: study.introduction }} />
              </div>
              <div className="images-container">
                {study.introUrl &&
                  study.introUrl.length > 0 &&
                  study.introUrl.map((url, index) =>
                    study.introType[index] === "iframe" ? (
                      <div key={index} className="iframe-container">
                        <iframe
                          src={url}
                          className="responsive-iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${study.introductionTitle} cover ${
                            index + 1
                          }`}
                        ></iframe>
                      </div>
                    ) : (
                      <img
                        key={index}
                        src={url}
                        alt={`${study.introductionTitle} cover ${index + 1}`}
                        className="content-image"
                      />
                    )
                  )}
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.paragraph1Title}</div>
                <div dangerouslySetInnerHTML={{ __html: study.paragraph1 }} />
              </div>
              <div className="images-container">
                {study.para1Url &&
                  study.para1Url.length > 0 &&
                  study.para1Url.map((url, index) =>
                    study.para1Type[index] === "iframe" ? (
                      <div key={index} className="iframe-container">
                        <iframe
                          src={url}
                          className="responsive-iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${study.paragraph1Title} cover ${index + 1}`}
                        ></iframe>
                      </div>
                    ) : (
                      <img
                        key={index}
                        src={url}
                        alt={`${study.paragraph1Title} cover ${index + 1}`}
                        className="content-image"
                      />
                    )
                  )}
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.paragraph2Title}</div>
                <div dangerouslySetInnerHTML={{ __html: study.paragraph2 }} />
              </div>
              <div className="images-container">
                {study.para2Url &&
                  study.para2Url.length > 0 &&
                  study.para2Url.map((url, index) =>
                    study.para2Type[index] === "iframe" ? (
                      <div key={index} className="iframe-container">
                        <iframe
                          src={url}
                          className="responsive-iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${study.introductionTitle} cover ${
                            index + 1
                          }`}
                        ></iframe>
                      </div>
                    ) : (
                      <img
                        key={index}
                        src={url}
                        alt={`${study.paragraph2Title} cover ${index + 1}`}
                        className="content-image"
                      />
                    )
                  )}
              </div>
            </div>
            <div className="section">
              <div className="section-text">
                <div className="section-heading">{study.designHeading}</div>
              </div>
              <div className="images-container">
                {study.designsUrl &&
                  study.designsUrl.length > 0 &&
                  study.designsUrl.map((url, index) =>
                    study.designsType[index] === "iframe" ? (
                      <div key={index} className="iframe-container">
                        <iframe
                          src={url}
                          className="responsive-iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${study.designHeading} cover ${index + 1}`}
                        ></iframe>
                      </div>
                    ) : (
                      <img
                        key={index}
                        src={url}
                        alt={`${study.designHeading} cover ${index + 1}`}
                        className="content-image"
                      />
                    )
                  )}
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
