import React from "react";
import "./Work.css";
import fibonacciGif from "../../assets/fibonacci/fibonacci-copy.gif";
import lightAndTimeGif from "../../assets/lightAndTime.gif";
import typographicFormGif from "../../assets/typographicForm.gif";
import nuclearDawnCover from "../../assets/nuclearDawn/mockup-spread2.png";

const caseStudies = [
  {
    id: 1,
    title: "FIBONACCI",
    subtitle: `I created a two posters and a dynamic digital media interaction to illustrate the Fibonacci sequence, showcasing the interdependence of square sizes and their relation to the golden ratio.`,
    tags: ["Digital Media", "Poster Design"],
    imageUrl: fibonacciGif,
  },
  {
    id: 2,
    title: "TYPOGRAPHIC FORM",
    subtitle: `I designed a dynamic typographic animation to explore the anatomy of the word "curiosity," using p5.js to create three interactive experiences: tracking mouse movement, breaking down the word into its constituent letters, and exploring each letter individually`,
    tags: ["Digital Media"],
    imageUrl: typographicFormGif,
  },
  {
    id: 3,
    title: "NUCLEAR DAWN",
    subtitle: `I designed and curated content for a 120-page, 5x8" trade book on the nuclear age, covering key historical events from the Pacific War to current disarmament efforts.`,
    tags: ["Editorial Design"],
    imageUrl: nuclearDawnCover,
  },
  {
    id: 4,
    title: "LIGHT, SPACE & TIME",
    subtitle: `I've always been fascinated with the relationship between light & time. And how sometimes, the stars we see in the night sky might have already died, because they might be so far away that their light has taken years to reach us. I designed a p5.js program to demonstrate this difference.`,
    tags: ["Digital Media"],
    imageUrl: lightAndTimeGif,
  },
  // Add more case studies as needed
];

const Work = ({ onStudyClick }) => {
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
                <li
                  key={idx}
                  style={{ backgroundColor: getBackgroundColor(tag) }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
