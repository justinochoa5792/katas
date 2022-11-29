// Sum of Evenly Divisible Numbers from a Range
// Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

function evenlyDivisible(a, b, c) {
  let total = [];
  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      total.push(i);
    }
  }
  return total.length === 0 ? 0 : total.reduce((a, b) => a + b);
}
