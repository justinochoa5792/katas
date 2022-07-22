// Recursion: Factorials
// Write a function that calculates the factorial of a number recursively.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
