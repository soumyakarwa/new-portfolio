import React, { useState, useEffect } from "react";
import MySketch from "./components/p5/MySketch";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const threshold = screenHeight / 10;

      // Trigger animation when user scrolls past 1/4th of the screen height
      setAnimationTrigger(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MySketch />
    </div>
  );
}

export default App;
