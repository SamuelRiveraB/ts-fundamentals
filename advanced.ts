// Discriminated unions

type numbers = 1 | 2 | string | number;

type AccountCreationMessage =
  | { kind: "ok"; greeting: string }
  | { kind: "passwordComplexityFailure"; message: string }
  | { kind: "usernameExists" };

const ok: AccountCreationMessage = {
  kind: "ok",
  greeting: "Welcome to the platform!",
};

function showMessage(msg: AccountCreationMessage) {
  switch (msg.kind) {
    case "ok":
      console.log(`${msg.greeting}`);
      break;
    case "passwordComplexityFailure":
      console.log(msg.message);
      break;
    case "usernameExists":
      console.log(msg.kind);
      break;
  }
}

// Const assert

type Rgb = "red" | "green" | "blue";
const red: Rgb = "red";

{
  const Color = ["red", "green", "blue"] as const; // Read only
  type Color = (typeof Color)[number];
  const blue: Color = "blue";

  for (const c of Color) {
    console.log(c);
  }
}

{
  const Department = {
    Executive: "Top floor",
    Sales: "Middle floor",
    Warehouse: "Bottom floor",
  } as const;
  type Department = (typeof Department)[keyof typeof Department];

  let k: keyof typeof Department;
  for (k in Department) [console.log(`key = ${k}, floor = ${Department[k]}`)];
}

// Generic functions

function getFirstNumber(arr: number[]): number | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

function getFirstStringOrNumber(
  arr: (string | number)[]
): string | number | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

function getFirst<T>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

console.log(getFirst([1, "a"]));

// Generic classes

class Stack<T> {
  private elements: T[] = [];
  public push(element: T) {
    this.elements.push(element);
  }
  public pop(): T | undefined {
    return this.elements.pop();
  }
  public peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }
  public isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

const strings = new Stack<string>();

// Iterators

function* genValues(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

const values = genValues();

console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

class RangeIter implements Iterable<number> {
  private readonly start: number;
  private readonly end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  *[Symbol.iterator](): Generator<number> {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}

const range = new RangeIter(1, 5);
for (const num of range) {
  console.log(num);
}

type CaseKinds = "lowercase" | "uppercase";
function setCase(message: string, kind: "lowercase" | "uppercase"): string {
  return "";
}
