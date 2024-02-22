let Engine, Composite, World, Vertices, Body, Bodies, Runner, Events;
let font;
var fontScale = 3;
var fontSize = 23;
var letterSpacing = fontSize * 4;
let grounds = [];
let bounds;
let engine, world, runner;
let titleStartingX;
let titleStartingY = 80;
var titleTxtWidth = 0;
var collidedLetters = new Set();
var generationCount = 0;

var fps = 30;

var letterTemplates = {};
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&";
let txt = "DESIGNER AND CREATIVE DEVELOPER";
// var letters = "abcdefghijklmnoqprstuvwxyz&";
// let txt = "designer & creative developer";
var totalChars = 1;
var instructionText = "scroll";
var script = [];
var startSketch = false;
var showText = true;

window.addEventListener("message", (event) => {
  if (event.origin === "http://localhost:3000") {
    if (event.data === "startSketch") {
      Runner.run(runner, engine);
      showText = false;
    }
  }
});

function preload() {
  (Engine = Matter.Engine),
    (Composite = Matter.Composite),
    (Vertices = Matter.Vertices),
    (Runner = Matter.Runner),
    (Bodies = Matter.Bodies),
    (Body = Matter.Body),
    (Events = Matter.Events);
  font = loadFont("./assets/fonts/Geist/Geist-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  textHelper();
  engine = Engine.create();
  engine.positionIterations = 10;
  world = engine.world;
  runner = Runner.create();
  createTitle();
  createBoundary();
  world.gravity.y = 1.75;
}

function textHelper() {
  textFont(font);
  textSize(fontSize * fontScale);
  var splitTxt = txt.split("");

  splitTxt.forEach((item) => {
    if (item === " ") {
      titleTxtWidth += 25;
    } else {
      titleTxtWidth += textWidth(item);
    }
  });
  titleStartingX = 50;
}

function createTitle() {
  if (generationCount === 0) {
    [...letters].forEach((letter) => {
      letterTemplates[letter] = new Template(
        font.textToPoints(letter, 0, 0, fontSize, {
          sampleFactor: 20,
          simplifyThreshold: 0,
        })
      );
    });
  }
  [...txt].forEach((char) => {
    console.log(generationCount, char, titleStartingX);
    if (char === " ") {
      titleStartingX = 50;
      titleStartingY += fontScale * fontSize + 10;
      return;
    }
    script.push(
      new Letter(
        world,
        titleStartingX,
        titleStartingY,
        letterTemplates[`${char}`],
        totalChars
      )
    );
    totalChars++;
    titleStartingX += textWidth(char);
  });
  generationCount++;
}

function createBoundary() {
  grounds.push(new Boundary(0, height / 2, 10, height, "barrier"));
  grounds.push(new Boundary(width, height / 2, 10, height, "barrier"));
  grounds.push(new Boundary(width / 2, height, width, 10, "barrier"));

  Composite.add(world, grounds);
}

function applyAirResistance() {
  let airDensity = 0.000000005; // Adjust this value to control the effect of air resistance

  Composite.allBodies(world).forEach((body) => {
    let velocity = body.velocity;
    let speed = Matter.Vector.magnitude(velocity);
    let dragCoefficient = random(0, airDensity) * speed * speed; // Calculate the drag force magnitude

    // Calculate the drag force vector
    let dragForce = Matter.Vector.mult(velocity, -dragCoefficient);

    Body.applyForce(body, body.position, dragForce);
  });
}

function checkCollision() {
  Events.on(engine, "collisionStart", function (event) {
    var pairs = event.pairs;

    pairs.forEach(function (pair) {
      var bodyA = pair.bodyA;
      var bodyB = pair.bodyB;

      if (bodyA.label === "barrier" && bodyB.label === "letter") {
        adjustBodyProperties(bodyB);
      } else if (bodyB.label === "barrier" && bodyA.label === "letter") {
        adjustBodyProperties(bodyA);
      }

      var letterID =
        pair.bodyA.label === "letter" ? pair.bodyA.id : pair.bodyB.id;
      var barrierBody =
        pair.bodyA.label === "barrier" ? pair.bodyA : pair.bodyB;

      collidedLetters.add(letterID);

      // Check if all letters have collided
      if (collidedLetters.size === totalChars - 1 && generationCount === 1) {
        // Stop the runner
        // titleStartingX = (width - titleTxtWidth) / 2 + textWidth(txt[0]) / 2;
        // createTitle();
        // grounds.push(new Boundary(width / 2, 95, width, 10, "temp"));
        barrierBody.restitution = 0;
        barrierBody.friction = 1;
      }
    });
  });
}

function adjustBodyProperties(body) {
  body.restitution = 0.1;
  body.friction = 0.9;
}

function draw() {
  background(0);
  applyAirResistance();
  script.forEach((char) => {
    char.show();
  });
  grounds[2].show();
  checkCollision();
  yoffset = sin(frameCount * 0.15) * 5;

  // textSize(fontSize * fontScale);
  // text(txt, width / 2 - textWidth(txt) / 2, 200);

  if (showText) {
    textSize(12);
    text(
      instructionText,
      width / 2 - textWidth(instructionText) / 2,
      height - 150 + yoffset
    );
  }
  ellipse((width - titleTxtWidth) / 2, 100, 5, 5);
  fill(255);
}
