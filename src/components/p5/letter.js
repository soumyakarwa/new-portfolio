// letter.js

export class Letter {
  constructor(p, x, y, template, fontScale) {
    this.p = p;
    this.points = template.path;
    this.x = x;
    this.y = y;
    this.fontScale = fontScale;

    // Physics properties
    this.velY = 0; // Initial vertical velocity
    this.gravity = 0.5; // Gravity effect on the letter
    this.elasticity = 0.7; // Bounce factor (0 = no bounce, 1 = perfect bounce)
    this.ground = p.height - 50; // Adjust ground position based on your canvas
  }

  update() {
    // Apply gravity
    this.velY += this.gravity;
    this.y += this.velY;

    // Ground collision
    if (this.y > this.ground) {
      this.y = this.ground;
      this.velY = -this.velY * this.elasticity;
    }
  }

  show() {
    var p = this.p;
    p.push();
    p.translate(this.x, this.y);
    p.beginShape();
    for (let i = 0; i < this.points.length; i++) {
      let point = this.points[i];
      p.vertex(point.x * this.fontScale, point.y * this.fontScale);
    }
    p.endShape(p.CLOSE);
    p.pop();
  }
}
