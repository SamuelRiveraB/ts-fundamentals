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

// Interfaces

interface Area {
  area(): number;
}

interface Perimeter {
  perimeter(): number;
}

class Rectangle implements Area, Perimeter {
  length: number = 1;
  width: number = 1;

  area(): number {
    return this.length * this.width;
  }

  perimeter(): number {
    return 2 * (this.length + this.width);
  }
}

type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
  radius: number = 4;

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const rect = new Rectangle();
const circ = new Circle();

const objectsWithArea: Area[] = [rect, circ];
for (let i = 0; i < objectsWithArea.length; i++) {
  console.log(objectsWithArea[i].area());
}
