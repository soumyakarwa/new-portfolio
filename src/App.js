import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation.jsx";
import Background from "./components/Background/Background.jsx";
import Work from "./components/Work/Work.jsx";
import "./App.css";

function App() {
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!messageSent && window.scrollY > (1 / 100) * window.innerHeight) {
        const iframe = document.querySelector(".sketch");
        iframe.contentWindow.postMessage(
          "startSketch",
          "http://localhost:3000"
        );
        setMessageSent(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [messageSent]);
  return (
    <div className="App">
      {/* <Background /> */}
      <LoadingAnimation />
      <div className="intro">
        <Navbar />
        <iframe
          src="/p5/sketch.html"
          className="sketch"
          title="p5 Sketch"
        ></iframe>
        <Navbar />
      </div>
      <Work />
    </div>
  );
}

export default App;
