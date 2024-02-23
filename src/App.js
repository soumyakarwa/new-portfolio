import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation.jsx";
import Work from "./components/Work/Work.jsx";
import Socials from "./components/Socials/Socials.jsx";
import Content from "./components/Content/Content.jsx";
import About from "./components/About/About.jsx";
import "./App.css";

function App() {
  const [messageSent, setMessageSent] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (!messageSent && window.scrollY > (1 / 100) * window.innerHeight) {
        const iframe = document.querySelector(".sketch");
        if (iframe) {
          iframe.contentWindow.postMessage(
            "startSketch",
            "http://localhost:3000"
          );
          setMessageSent(true);
        }
      }
    };

    // Consider when to add/remove this listener more broadly
    if (currentSection === "home" || currentSection === "work") {
      window.addEventListener("scroll", handleScroll);
    } else {
      // Optionally ensure the listener is removed if not in "home" or "work" sections
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [messageSent, currentSection, selectedStudy]); // Adjusted dependencies

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [currentSection, selectedStudy]);

  const handleStudyClick = (study) => {
    setSelectedStudy(study);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setSelectedStudy(null);
    setMessageSent(false);
  };

  // const handleNavbarWorkClick = () => {
  //   // If not already on the homepage or if a specific study is selected, reset to homepage view
  //   if (currentSection !== "home" || selectedStudy !== null) {
  //     setCurrentSection("home");
  //     setSelectedStudy(null);
  //   } else {
  //     // If already on the homepage, just scroll to the Work component
  //     workRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const contentToRender = () => {
    switch (currentSection) {
      case "work":
        return !selectedStudy ? (
          <>
            <iframe
              src="/p5/sketch.html"
              className="sketch"
              title="p5 Sketch"
            ></iframe>
            <Work onStudyClick={handleStudyClick} />
          </>
        ) : (
          <Content study={selectedStudy} />
        );
      case "about":
        return <About />;
      case "home":
      default:
        return !selectedStudy ? (
          <>
            <iframe
              src="/p5/sketch.html"
              className="sketch"
              title="p5 Sketch"
              key={currentSection + (selectedStudy ? "-study" : "")}
            ></iframe>
            <Work onStudyClick={handleStudyClick} />
          </>
        ) : (
          <Content study={selectedStudy} />
        );
    }
  };

  return (
    <div className="App">
      <LoadingAnimation />
      <div className="intro">
        <Navbar onSectionChange={handleSectionChange} />
        <Socials />
      </div>
      {contentToRender()}
    </div>
  );
}

export default App;
