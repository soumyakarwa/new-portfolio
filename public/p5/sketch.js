let Engine, Composite, World, Vertices, Body, Bodies, Runner;
let font;
var fontScale = 3;
var fontSize = 23;
var letterSpacing = fontSize * 4;
let grounds = [];
let bounds;
let engine, world, runner;
let titleStartingX;

var fps = 30;

var letterTemplates = {};
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&";
let txt = "DESIGNER AND CREATIVE DEVELOPER";
var script = [];

function preload() {
  (Engine = Matter.Engine),
    (Composite = Matter.Composite),
    (Vertices = Matter.Vertices),
    (Runner = Matter.Runner),
    (Bodies = Matter.Bodies),
    (Body = Matter.Body);
  // font = loadFont(
  //   "./assets/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf"
  // );
  font = loadFont("./assets/fonts/News_Gothic/NewsGothicStd.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  textHelper();
  engine = Engine.create();
  world = engine.world;
  runner = Runner.create();

  // create letter templates
  createTitle();
  createBoundary();
}

function textHelper() {
  textFont(font);
  textSize(fontSize * fontScale);
  titleStartingX = width / 2 - textWidth(txt) / 2;
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

function keyPressed() {
  if (keyCode === 13) {
    Runner.run(runner, engine);
  }
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

function draw() {
  background(255);
  // text(txt, 100, 50);
  applyAirResistance();
  script.forEach((char) => {
    char.show();
  });
  grounds.forEach((g) => {
    g.show();
  });
  fill(0);
}
