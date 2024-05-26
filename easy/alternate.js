// Length and two values.
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue) {
  // your code
  let total = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      total.push(firstValue);
    } else {
      total.push(secondValue);
    }
  }
  return total;
}
