// VARIABLES

const courseName = "Typescript";
const courseName2 = "Typescript";

const courseNam3 = `Typescript`;

const amount = 10;
const fraction = 10.5;

const oneThousand = 1e3; // Exponents

const allPermissions = 0o777; // Octals

const hexByte = 0xff;

const binary = 0b0100001;

const bigInt = 9000n;

const yes = true;
const no = false;

// Completely missing
const missing = undefined;

// We know it's missing
const empty = null;

let someNum = 0;
someNum = 1;
someNum = 2;

// Variable shadowing
{
  let someNum = 5;
}

let hello; // Uninitialized

// const whoops; Const must be initialized

// BOOLEANS
const age = 18;
const canPurchase = age >= 18;
console.log(canPurchase);

const faveColor = "green";
const isFave = faveColor === "green";

// COMPOUND BOOLS

// Not
const writing = true;
const reading = !writing;

// Or
const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie;

// And
const newAge = 18;
const isTeenager = newAge >= 13 && age < 20;

const packageWeight = 30;
const packageLength = 50;
const feeExemption = false;

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);

// OPERATORS

const add = 1 + 1;
const sub = 2 - 1;
const mul = 3 * 3;
const div = 8 / 2;
const inf = 1 / 0;
const nan = 0 / 0;
const rem = 10 % 3;
const neg = -rem;
const neg2 = -neg;
const exp = 2 ** 3;

const abs = Math.abs(-5);
const pi = Math.PI;

// INCREMENTS

let n = 1;
n++; // Postfix
++n; // Prefix
n += 5;
n--;
n -= 2;

// FUNCTIONS

function sayHello() {
  console.log("hello");
}
sayHello();

function sum(lhs, rhs) {
  return lhs + rhs;
}

console.log(sum(3, 2));

// TEMPLATE STRINGS

function greet(message) {
  console.log(`Hello ${message}`);
}

greet("Typescript");

const kids = 2;
const adults = 4;
const totalPeople = `There are ${kids + adults} people`;

console.log(totalPeople);

// TYPE ANNOTATIONS

const myName = "Sam";
const amount2: number = 1;
const hello2: string = `Hello ${myName}`;
const powerLever: bigint = 9000n + 1n;
const yes2: boolean = yes;

function sum2(lhs: number, rhs: number): number {
  const total = lhs + rhs;
  return total;
}

// CONTROL FLOW

const answer = 2 + 2;

if (answer > 4) {
  console.log(">4");
}
if (answer === 4) {
  console.log("=4");
} else {
  console.log("!4");
}

if (answer < 4) {
  console.log("<4");
} else if (answer > 4) {
  console.log(">4");
} else {
  console.log("=4");
}

const age2 = 6;
const likesHavingFun = true;

if (age2 <= 12 && likesHavingFun) {
  // Play at the park
} else if (age > 12 && !likesHavingFun) {
  // Be bored
} else {
  // Work on hobbies
}

const hasTheSkills = true;
const day = "tuesday";
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;

function approveWork() {
  if (!hasTheSkills) {
    return;
  }

  if (!hasOvertimeHours(hoursWorked, totalOvertime)) {
    return;
  }

  if (!isBusyDay(day, holidaySeason)) {
    return;
  }
}

function isBusyDay(day: string, holidaySeason) {
  return holidaySeason || day === "tuesday";
}

function hasOvertimeHours(hoursWorked: number, totalOvertime: number): boolean {
  const hasHours = hoursWorked > 8 && totalOvertime < 1;
  return hasHours;
}

// SWITCH

let someNumber = 10;
const sample = "sample";
const someString = `${sample}`;

// switch (someString) {
//   case "test":
//     break;
//   case "sample":
//     break;
//   case "a":
//     break;
//   default:
//     break;
// }

switch (someNumber) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    break;
}

// TERNARY

const ageT = 18;
const msg = ageT >= 18 ? "allow" : "deny";

// TYPE ALIASES

type PersonName = string;

const myName2: PersonName = "Jayson";
const alsoMyName: string = "Jayson";

// bad
function print(thing: string) {
  console.log(`Name is ${thing}`);
}

// good
function printName(name: PersonName) {
  console.log(`name is ${name}`);
}

// OBJECTS

type Coordinate = {
  x: number;
  y: number;
};

const origin2: Coordinate = {
  x: 0,
  y: 0,
};

const xPosition = origin2.x;
const yPosition = origin2.y;

const coord: Coordinate = { x: 1, y: 1 };
coord.x = 20;
coord.y = 10;

// ARROW FUNCS

const sumNew = function (lhs: number, rhs: number): number {
  return lhs + rhs;
};

const arrowSum = (lhs: number, rhs: number): number => {
  return lhs + rhs;
};

// ARRAYS

const numbers: number[] = [1, 2, 3];
let letters: string[] = ["a", "b", "c"];

type Link = {
  title: string;
  url: string;
};

const microsoft = { title: "microsoft", url: "microsoft.com" };
const typescript = { title: "Typescript", url: "typescriptlang.org" };

const links = [microsoft, typescript];
const tsUrl = links[1].url;

links[0].title = "Microsoft";

// TUPLES

type Title = string;
type PublishYear = number;

type Book = [Title, PublishYear];

const sampleBook: Book = ["sample", 1980];

function coordT(): [number, number] {
  return [3, 5];
}

const coordinate = coordT();
const [x, y] = coordT();

const multi: [number, number][] = [coordT(), [1, 1], [0, 0], [9, 9]];

// FOR LOOPS

for (let i = 1; i <= 10000; i++) {
  console.log(`${i}`);
  if (i === 5) {
    break;
  }
  if (i === 3) {
    continue;
  }
}
