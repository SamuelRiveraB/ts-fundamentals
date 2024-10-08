import test, { TestContext } from "node:test";

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

interface CustomerInfo {
  name: string;
}

class customer implements CustomerInfo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface Address {
  street: string;
  city: string;
}

type LocalAddress = {
  street: string;
  city: string;
};

function printAddr(address: Address) {
  console.log(`Street name: ${address.street}, City: ${address.city}`);
}

const addr = {
  street: "name",
  city: "sample",
};

printAddr(addr);

// For of

const abc = ["a", "b", "c"];

for (const letter of abc) {
  console.log(letter);
}

const nums = {
  one: 1,
  two: 2,
  three: 3,
};

let property: keyof typeof nums;

for (property in nums) {
  console.log(nums[property]);
}

// Maps

type Name = string;
type Score = number;

const testScores: Map<Name, Score> = new Map();

testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);

for (const [name, score] of testScores) {
  console.log(`${name} score is ${score}`);
}

testScores.delete("Bob");

testScores.clear();

// Exceptions

function divide(lhs: number, rhs: number): number {
  if (rhs === 0) {
    throw new Error("Cannot divide by zero");
  }
  return lhs / rhs;
}

// Type assertions

const greeting: unknown = "Hello";

const greet = greeting as string;

const numChars = (greeting as string).length;

interface Employee {
  position(): string;
}

class manager implements Employee {
  position(): string {
    return "Manager";
  }

  sayHello(): void {
    console.log("Hi");
  }
}

const alice: Employee = new manager();

// Union types

type Color2 = "red" | "green" | "blue";

const r: Color2 = "red";

// Type predicates

interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  size: number;
}

type Shape = Square | Circle;

function isSquare(shape: Shape): shape is Square {
  return shape.kind === "square";
}

// Optional fields

type Warranty = "standard" | "extended";

function warrantyInfo(warranty: Warranty): String {
  switch (warranty) {
    case "standard":
      return "90 day warranty";
    case "extended":
      return "180 day extended warranty";
  }
}

interface LineItem {
  name: string;
  quantity: number;
  warranty?: Warranty;
}

function printLine(item: LineItem): void {
  console.log(`Item ${item.name}`);
  console.log(`Quantity ${item.quantity}`);

  if (item.warranty !== undefined) {
    console.log(`Warranty ${warrantyInfo(item.warranty)}`);
  } else {
    console.log(`Warranty: None`);
  }
}

const boxFan: LineItem = {
  name: "box fan",
  quantity: 1,
};

printLine(boxFan);

const heater: LineItem = {
  name: "heater",
  quantity: 1,
  warranty: "standard",
};

printLine(heater);

// Optional Chaining

interface Pii {
  age?: number;
  address?: string;
}

interface SearchResult {
  name: string;
  pii?: Pii;
}

class Database {
  search(name: string): SearchResult | undefined {
    switch (name) {
      case "John":
        return {
          name: "John Doe",
          pii: {
            age: 22,
          },
        };
      case "Jane":
        return {
          name: "Jane Doe",
        };
      default:
        return undefined;
    }
  }
}

const database = new Database();

{
  const result = database.search("John");
  if (result?.pii?.age) {
    console.log(`${result.name} age is ${result.pii.age}`);
  }
}

export async function fetchUserData(userId: number): Promise<{ name: string }> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const data = await response.json();

  return { name: data.name };
}

(async () => {
  try {
    const userData = await fetchUserData(1);
    console.log(userData.name);
  } catch (e) {
    console.log(e);
  }
})();

fetchUserData(2)
  .then((userData) => console.log(userData.name))
  .catch((e) => console.error(e));
