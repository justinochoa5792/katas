// Basic Arithmetic Operations
// The numbers and operation are given as strings and should result in an integer value.

function operation(a, b, op) {
  let A = Number(a);
  let B = Number(b);

  switch ((A, B, op)) {
    case "add":
      return A + B;
      break;
    case "subtract":
      return A - B;
      break;
    case "multiply":
      return A * B;
      break;
    case "divide":
      return A / B === Infinity ? "undefined" : A / B;
      break;
  }
}
