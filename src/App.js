import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Get the iframe element
      const iframe = document.querySelector(".sketch");
      if (window.scrollY > (1 / 12) * window.innerHeight) {
        iframe.contentWindow.postMessage(
          "startSketch",
          "http://localhost:3000"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
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
