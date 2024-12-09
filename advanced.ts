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
