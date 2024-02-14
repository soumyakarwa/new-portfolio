import React, { useRef, useEffect, useState } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import { Boundary } from "./boundary.js";
import { Template } from "./template.js";
import { Letter } from "./letter.js";
import "./MySketch.css";

function MySketch() {
  let Engine, Composite, World, Vertices, Body, Bodies, Runner;
  let font;
  let fontScale = 3;
  let fontSize = 19;
  let letterSpacing = fontSize * 4;
  let grounds = [];
  let bounds;
  let engine, world, runner;
  let titleStartingX;
  let fps = 30;
  let letterTemplates = {};
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&";
  let txt = "DESIGNER AND CREATIVE DEVELOPER";
  let script = [];
  var navbarHeight;

  const sketchRef = useRef(null);

  useEffect(() => {
    // Ensure this runs only when the component mounts
    const updateSketchHeight = () => {
      navbarHeight =
        document.querySelector(".navbar-container")?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      const sketchHeight = windowHeight - navbarHeight;

      if (sketchRef.current) {
        sketchRef.current.style.height = `${sketchHeight}px`;
      } else {
        console.error("Sketch container ref is not available.");
      }
    };

    updateSketchHeight();
  }, []);

  let preload = (p5) => {
    ({ Engine, Composite, Vertices, Runner, Bodies, Body, Runner } = Matter);
    font = p5.loadFont("/CLT-Sprat/desktop/SpratVF.ttf");
  };

  let setup = (p5, canvasParentRef) => {
    let availableWidth = p5.windowWidth; // This should ideally come from your dynamic calculations
    let availableHeight = p5.windowHeight - navbarHeight; // Calculate this in your React component

    let sketchCanvas = p5
      .createCanvas(availableWidth, availableHeight)
      .parent(canvasParentRef);

    //Calculation to center the canvas
    let x = 0;
    let y = availableHeight;
    sketchCanvas.position(x, y);

    p5.frameRate(fps);

    textHelper(p5);

    engine = Engine.create();
    world = engine.world;
    runner = Runner.create();

    createTitle(p5);
    createBoundary(p5);
  };

  function textHelper(p5) {
    p5.textFont(font);
    p5.textSize(fontSize * fontScale);
    titleStartingX = p5.width / 2 - p5.textWidth(txt) / 2;
  }

  function createTitle(p5) {
    [...letters].forEach((letter) => {
      console.log(letter);
      letterTemplates[letter] = new Template(
        font.textToPoints(letter, 0, 0, fontSize, {
          sampleFactor: 10,
          simplifyThreshold: 0,
        }),
        fontScale
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
          world,
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
    grounds.push(new Boundary(p5, world, 0, p5.height / 2, 10, p5.height));
    grounds.push(
      new Boundary(p5, world, p5.width, p5.height / 2, 10, p5.height)
    );
    grounds.push(
      new Boundary(p5, world, p5.width / 2, p5.height - 20, p5.width, 10)
    );

    Composite.add(world, grounds);
  }

  function applyAirResistance() {
    let airDensity = 0.0000005; // Adjust this value to control the effect of air resistance

    Composite.allBodies(world).forEach((body) => {
      let velocity = body.velocity;
      let speed = Matter.Vector.magnitude(velocity);
      let dragCoefficient = airDensity * speed * speed; // Calculate the drag force magnitude

      // Calculate the drag force vector
      let dragForce = Matter.Vector.mult(velocity, -dragCoefficient);

      Body.applyForce(body, body.position, dragForce);
    });
  }

  let keyPressed = (p5) => {
    if (p5.keyCode === p5.ENTER) {
      Runner.run(runner, engine);
    }
  };

  let draw = (p5) => {
    p5.background(255);
    // text(txt, 100, 50);
    applyAirResistance(p5);
    script.forEach((char) => {
      char.show();
    });
    grounds.forEach((g) => {
      g.show();
    });
    p5.fill(0);
  };

  // if (!isReady) {
  //   return <div>Loading...</div>; // Or any other placeholder content
  // }

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
