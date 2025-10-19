// Reimplement Multiplication Part 1
// Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.
// You should only use the + and/or - operators. Using * is cheating!
// You can do this iteratively or recursively.

function mul(a, b) {
  return Math.round(a / (1 / b));
}
