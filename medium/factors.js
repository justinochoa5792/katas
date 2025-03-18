// Find factors of a number
// Create a function that takes a number and finds the factors of it, listing them in descending order in an array.
// If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

function factors(x) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      factors.push(i);
      if (x / i !== i) {
        factors.push(x / i);
      }
    }
  }
  return factors.length == 0 ? -1 : factors.sort((a, b) => b - a);
}
