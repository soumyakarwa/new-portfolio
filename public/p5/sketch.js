let Engine, Composite, World, Vertices, Body, Bodies, Runner;
let font;
var fontScale = 3;
var fontSize = 24;
var letterSpacing = fontSize * 4;
let grounds = [];
let bounds;
let engine, world, runner;
let titleStartingX;
var titleTxtWidth = 0;

var fps = 30;

var letterTemplates = {};
// var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&";
// let txt = "DESIGNER AND CREATIVE DEVELOPER";
var letters = "abcdefghijklmnoqprstuvwxyz&";
let txt = "designer and creative developer";
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
    (Body = Matter.Body);
  font = loadFont("./assets/fonts/Geist/Geist-Medium.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  textHelper();
  engine = Engine.create();
  world = engine.world;
  runner = Runner.create();
  createTitle();
  createBoundary();
}

function textHelper() {
  textFont(font);
  textSize(fontSize * fontScale);
  var splitTxt = txt.split("");

  splitTxt.forEach((item) => {
    console.log(item);
    if (item === " ") {
      titleTxtWidth += 25;
    } else {
      titleTxtWidth += textWidth(item);
    }
  });
  titleStartingX = width - titleTxtWidth;
}

function createTitle() {
  [...letters].forEach((letter) => {
    letterTemplates[letter] = new Template(
      font.textToPoints(letter, 0, 0, fontSize, {
        sampleFactor: 20,
        simplifyThreshold: 0,
      })
    );
  });
  [...txt].forEach((char) => {
    if (char === " ") {
      titleStartingX += 25;
      return;
    }
    script.push(
      new Letter(world, titleStartingX, 60, letterTemplates[`${char}`])
    );
    titleStartingX += textWidth(char);
  });
}

function createBoundary() {
  grounds.push(new Boundary(0, height / 2, 10, height));
  grounds.push(new Boundary(width, height / 2, 10, height));
  grounds.push(new Boundary(width / 2, height - 20, width, 10));

  Composite.add(world, grounds);
}

function applyAirResistance() {
  let airDensity = 0.0000005; // Adjust this value to control the effect of air resistance

  Composite.allBodies(world).forEach((body) => {
    let velocity = body.velocity;
    let speed = Matter.Vector.magnitude(velocity);
    let dragCoefficient = random(0, airDensity) * speed * speed; // Calculate the drag force magnitude

    // Calculate the drag force vector
    let dragForce = Matter.Vector.mult(velocity, -dragCoefficient);

    Body.applyForce(body, body.position, dragForce);
  });
}

function draw() {
  background("#F9F3EE");
  applyAirResistance();
  script.forEach((char) => {
    char.show();
  });
  grounds[2].show();

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
  // ellipse((width - titleTxtWidth) / 2, 100, 5, 5);
  fill("#262525");
}
