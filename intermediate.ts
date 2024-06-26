class Color {
  r: number = 0;
  g: number = 0;
  b: number = 0;
}

const red = new Color();

class Dimension {
  length: number;
  width: number;
  //   height: number;

  constructor(length: number, public height: number) {
    this.length = length;
    this.width = 1;
    // this.height = 1
  }
}
const one = new Dimension(10, 50);
console.log(one.height);

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

const p = new Point(5, 5);
p.translate(-5, -5);

const d = new Point(10, 10);
d.translate(-5, -5);
