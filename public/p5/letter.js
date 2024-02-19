class Letter {
  constructor(world, x, y, template) {
    this.points = template.path;
    this.vertices = JSON.parse(JSON.stringify(template.vertices));
    this.body = Bodies.fromVertices(x, y, this.vertices);

    if (this.body) {
      Composite.add(world, this.body);
    }
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    beginShape();
    translate(-25, 25);
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      vertex(p.x * fontScale, p.y * fontScale);
    }
    endShape(CLOSE);
    pop();
  }
}
