// Minimal II: Boolean Redundancy
// Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.

// original solution
function parity(n) {
  let remander = Boolean(n % 2);
  if (remainder === false) {
    return "even";
  }
  if (remainder === true) {
    return "odd";
  }
}

// fixed solution
function parity(n) {
  let remainder = Boolean(n % 2);
  return remainder ? "odd" : "even";
}
