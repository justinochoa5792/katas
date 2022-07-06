// Return the Factorial
// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

function factorial(int) {
  for (let i = int - 1; i >= 1; i--) {
    int = int * i;
  }
  return int;
}
