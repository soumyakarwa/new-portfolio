import React from "react";
import "./Work.css";
import fibonacciGif from "../../assets/fibonacci-copy.gif";

const caseStudies = [
  {
    id: 1,
    title: "Case Study 1",
    subtitle: "An overview of case study 1",
    tags: ["Design", "UI/UX"],
    imageUrl: fibonacciGif,
  },
  {
    id: 2,
    title: "Case Study 2",
    subtitle: "An overview of case study 2",
    tags: ["Development", "React"],
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
  },
  // Add more case studies as needed
];

// The Work component
const Work = () => {
  return (
    <div className="work-container">
      {/* <div className="row"> */}
      {caseStudies.map((study) => (
        <div key={study.id} className="case-study">
          <img
            src={study.imageUrl}
            alt={`${study.title} cover`}
            className="case-study-image"
          />
          <div className="content">
            <div className="description">
              {" "}
              <div className="title">{study.title}</div>
              <div className="subtitle">{study.subtitle}</div>
            </div>

            <ul className="tags">
              {study.tags.map((tag, idx) => (
                <li key={idx}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Work;
