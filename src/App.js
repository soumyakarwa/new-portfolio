import React from "react";
import MySketch from "./components/p5/MySketch";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MySketch />
    </div>
  );
}

export default App;
