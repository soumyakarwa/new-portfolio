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
    role: `Designer, Developer`,
    overview: `I created a pair of posters and an accompanying dynamic digital media interaction to illustrate the Fibonacci sequence, showcasing the interdependence of square sizes and their relation to the golden ratio.`,
    introductionTitle: `So, what is Fibonacci?`,
    introduction: `The Fibonacci sequence is a series of numbers in which each number (Fibonacci number) is the sum of the two preceding ones, usually starting with 0 and 1. The sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on. Interestingly, this sequence appears in many different areas of mathematics and science. It's also known for its occurrence in biological settings; for example, in branching in trees, the arrangement of leaves on a stem, the flowering of artichokes, and the arrangement of a pine cone's bracts. Apple also used the Golden Spiral to design its logo.`,
    paragraph1Title: `Significance`,
    paragraph1: `As someone who loves math, I find the Fibonacci sequence fascinating. It's amazing how it shows up in so many places, connecting things we wouldn't think are related. It's like finding a secret code in nature that links everything together.`,
    paragraph2Title: `Initial Sketches`,
    paragraph2: `I wanted to focus on the recursive nature of the sequence and decided to focus on the squares.`,
    designHeading: `Final Designs`,
    reflectionHeading: `Reflection`,
    reflectionContent: ``,
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
