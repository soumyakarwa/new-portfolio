import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  const [hideAnimation, setHideAnimation] = useState(false);

  return (
    <div className={`loading-overlay ${hideAnimation ? "hide" : ""}`}>
      <div className="typewriter-container">
        <span className="fixed-phrase">Soumya Karwa | </span>
        <div className="typewriter-effect">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString("Data Driven Designer")
                .pauseFor(100)
                .deleteAll()
                .typeString("Creative Coder")
                .pauseFor(100)
                .deleteAll()
                .typeString("Visual Storyteller")
                .pauseFor(110)
                .callFunction(() => {
                  setHideAnimation(true);
                })
                .start();
            }}
            options={{
              delay: 20,
              deleteSpeed: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
