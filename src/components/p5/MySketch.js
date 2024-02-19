import React, { useRef, useEffect, useState } from "react";
import Sketch from "react-p5";
import { Boundary } from "./boundary.js";
import { Template } from "./template.js";
import { Letter } from "./letter.js";
import "./MySketch.css";

function MySketch({ animationTrigger }) {
  let font;
  let fontScale = 3;
  let fontSize = 25;
  let grounds = [];
  let titleStartingX;
  let fps = 30;
  let letterTemplates = {};
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&";
  let txt = "DESIGNER AND CREATIVE DEVELOPER";
  // let letters = "abcdefghijklmnopqrstuvwxyz&";
  // let txt = "designer and creative developer";
  let script = [];
  var navbarHeight;
  let bgColor;

  const sketchRef = useRef(null);

  // useEffect(() => {
  //   // Ensure this runs only when the component mounts
  //   const updateSketchHeight = () => {
  //     navbarHeight =
  //       document.querySelector(".navbar-container")?.offsetHeight || 0;

  //     const sketchHeight = window.innerHeight - navbarHeight;

  //     if (sketchRef.current) {
  //       sketchRef.current.style.height = `${sketchHeight}px`;
  //       // sketchRef.current.style.width = `${sketchWidth}px`;
  //     } else {
  //       console.error("Sketch container ref is not available.");
  //     }
  //   };

  //   updateSketchHeight();
  // }, []);

  let preload = (p5) => {
    font = p5.loadFont("/News_Gothic/NewsGothicStd.otf");
  };

  let setup = (p5, canvasParentRef) => {
    console.log("setup");
    let computedStyle = getComputedStyle(sketchRef.current);
    let sketchWidth = parseInt(computedStyle.width, 10);
    let sketchHeight = parseInt(computedStyle.height, 10);

    let sketchCanvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    p5.frameRate(fps);

    textHelper(p5);

    createTitle(p5);
    createBoundary(p5);

    let style = getComputedStyle(document.body);
    bgColor = style.getPropertyValue("--background-color").trim();

    // let goldenRatio = parseFloat(style.getPropertyValue("--golden-ratio"));
    // let bodyFontSize = parseFloat(style.getPropertyValue("--body-font-size"));
    // let rootFontSize = getComputedStyle(document.documentElement).fontSize;
    // fontScale = goldenRatio;
    // fontSize = rootFontSize * bodyFontSize;

    // fontScale = parseFloat(style.getPropertyValue("--golden-ratio"));
    // fontSize = parseFloat(style.getPropertyValue("--body-font-size"));
    // console.log("fontScale", fontScale);
    // fontSize = fontSize * fontScale;
  };

  function textHelper(p5) {
    p5.textFont(font);
    p5.textSize(fontSize * fontScale);
    titleStartingX = p5.width / 2 - p5.textWidth(txt) / 2;
  }

  function createTitle(p5) {
    [...letters].forEach((letter) => {
      letterTemplates[letter] = new Template(
        font.textToPoints(letter, 0, 0, fontSize, {
          sampleFactor: 10,
          simplifyThreshold: 0,
        }),
        fontScale,
        p5
      );
    });

    [...txt].forEach((char) => {
      if (char === " ") {
        titleStartingX += 25;
        return;
      }
      script.push(
        new Letter(
          p5,
          titleStartingX,
          60,
          letterTemplates[`${char}`],
          fontScale
        )
      );
      titleStartingX += p5.textWidth(char);
    });
  }

  function createBoundary(p5) {
    grounds.push(new Boundary(p5, 0, p5.height / 2, 10, p5.height));
    grounds.push(new Boundary(p5, p5.width, p5.height / 2, 10, p5.height));
    grounds.push(new Boundary(p5, p5.width / 2, p5.height - 20, p5.width, 15));
  }

  let keyPressed = (p5) => {
    // if (p5.keyCode === p5.ENTER) {
    //   Runner.run(runner, engine);
    // }
  };

  let draw = (p5) => {
    p5.background("#f9f6ee");
    // text to see positioning
    // p5.text(txt, p5.width / 2 - p5.textWidth(txt) / 2, 200);
    // if (animationTrigger) {
    //   Runner.run(runner, engine);
    // }

    script.forEach((letter) => {
      letter.update();
      letter.show();
    });
    p5.fill(0);
  };

  return (
    <div ref={sketchRef} className="sketch">
      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        keyPressed={keyPressed}
      />
    </div>
  );
}

export default MySketch;
