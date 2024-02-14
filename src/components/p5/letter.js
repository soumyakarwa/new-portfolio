import Matter from "matter-js";

export class Letter {
  constructor(p, world, x, y, template, fontScale) {
    this.p = p;
    this.points = template.path;
    this.vertices = JSON.parse(JSON.stringify(template.vertices));
    this.body = Matter.Bodies.fromVertices(x, y, this.vertices);

    if (this.body) {
      Matter.Composite.add(world, this.body);
    }
    this.fontScale = fontScale;
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    var p = this.p;

    p.push();
    p.translate(pos.x, pos.y);
    p.rotate(angle);
    p.beginShape();
    p.translate(-25, 25);
    for (let i = 0; i < this.points.length; i++) {
      let point = this.points[i];
      p.vertex(point.x * this.fontScale, point.y * this.fontScale);
    }
    p.endShape(p.CLOSE);
    p.pop();
  }
}
