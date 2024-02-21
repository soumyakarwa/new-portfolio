import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation.jsx";
import "./App.css";

function App() {
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!messageSent && window.scrollY > (1 / 12) * window.innerHeight) {
        const iframe = document.querySelector(".sketch");
        iframe.contentWindow.postMessage(
          "startSketch",
          "http://localhost:3000"
        );
        setMessageSent(true); // Update the flag
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [messageSent]);
  return (
    <div className="App">
      {/* <LoadingAnimation /> */}
      <Navbar />
      <iframe
        src="/p5/sketch.html"
        className="sketch"
        title="p5 Sketch"
      ></iframe>
    </div>
  );
}

export default App;
