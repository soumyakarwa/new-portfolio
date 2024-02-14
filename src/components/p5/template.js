import Matter from "matter-js";

export class Template {
  constructor(path, fontScale) {
    // Add fontScale as a parameter
    this.path = path;
    this.fontScale = fontScale; // Store fontScale
    this.vertices = this.letterOutline();
    this.options = {
      friction: 0.4,
      restitution: 0.1,
    };
  }

  letterOutline() {
    let points = {};
    let uniquePointsStr = "";

    for (let j = 0; j < this.path.length; j++) {
      let pointKey = `x${this.path[j].x}y${this.path[j].y}`;

      if (!points[pointKey]) {
        points[pointKey] = true;
        uniquePointsStr += `${this.path[j].x * this.fontScale} ${
          this.path[j].y * this.fontScale
        } `;
      }
    }

    return Matter.Vertices.fromPath(uniquePointsStr);
  }
}
