import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Get the iframe element
      const iframe = document.querySelector(".sketch");

      // Check if the iframe is in view or at the desired scroll position
      if (window.scrollY > (1 / 10) * window.innerHeight) {
        // Post a message to the iframe to trigger the sketch
        iframe.contentWindow.postMessage(
          "startSketch",
          "http://localhost:3000"
        );
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
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
