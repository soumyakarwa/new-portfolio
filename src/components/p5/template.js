export class Template {
  constructor(path, fontScale, p) {
    this.path = path; // Array of points defining the path
    this.fontScale = fontScale;
    this.p = p; // p5 instance
  }

  // Draw the letter outline based on the path
  show(x, y) {
    let p = this.p;
    p.push();
    p.beginShape();
    for (let i = 0; i < this.path.length; i++) {
      const pt = this.path[i];
      p.vertex(x + pt.x * this.fontScale, y + pt.y * this.fontScale);
    }
    p.endShape(p.CLOSE);
    p.pop();
  }
}
