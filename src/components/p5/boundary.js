import Matter from "matter-js";

export class Boundary {
  constructor(p, world, x, y, w, h) {
    // Add p and world as parameters
    let options = {
      friction: 0.3,
      restitution: 0.6,
      isStatic: true,
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options); // Use Matter.Bodies
    this.w = w;
    this.h = h;
    Matter.Composite.add(world, this.body); // Use Matter.Composite
    this.p = p; // Store the p5 instance
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    let p = this.p; // Use the stored p5 instance

    p.push(); // Use p5 instance methods
    p.translate(pos.x, pos.y);
    p.rotate(angle);
    p.rectMode(p.CENTER); // Use p.CENTER
    p.fill(0);
    p.rect(0, 0, this.w, this.h);
    p.pop();
  }
}
