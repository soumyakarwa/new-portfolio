import React from "react";
import "./Work.css";
import fibonacciGif from "../../assets/fibonacci-copy.gif";
import lightAndTimeGif from "../../assets/lightAndTime.gif";
import typographicFormGif from "../../assets/typographicForm.gif";
import nuclearDawnCover from "../../assets/nuclearDawn/mockup-spread2.png";

const caseStudies = [
  {
    id: 1,
    title: "Fibonacci",
    subtitle: "An overview of case study 1",
    tags: ["Digital Media", "Poster Design"],
    imageUrl: fibonacciGif,
  },
  {
    id: 2,
    title: "Typographic Form",
    subtitle: "An overview of case study 2",
    tags: ["Digital Media"],
    imageUrl: typographicFormGif,
  },
  {
    id: 3,
    title: "Nuclear Dawn",
    subtitle: "An overview of case study 2",
    tags: ["Editorial Design"],
    imageUrl: nuclearDawnCover,
  },
  {
    id: 4,
    title: "Light & Time",
    subtitle: "An overview of case study 2",
    tags: ["Digital Media"],
    imageUrl: lightAndTimeGif,
  },
  // Add more case studies as needed
];

const Work = ({ onStudyClick }) => {
  return (
    <div className="work-container">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="case-study"
          onClick={() => onStudyClick(study)}
        >
          <img
            src={study.imageUrl}
            alt={`${study.title} cover`}
            className="case-study-image"
          />
          <div className="work">
            <div className="description">
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
    </div>
  );
};

export default Work;
