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
