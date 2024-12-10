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
