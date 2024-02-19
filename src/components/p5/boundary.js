// boundary.js

export class Boundary {
  constructor(p, x, y, w, h) {
    this.p = p; // p5 instance
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    let p = this.p;
    p.push();
    p.translate(this.x, this.y);
    p.rectMode(p.CENTER);
    p.fill(0);
    p.rect(0, 0, this.w, this.h);
    p.pop();
  }
}
