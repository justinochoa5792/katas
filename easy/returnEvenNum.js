// Give Me the Even Numbers
// Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

function sumEvenNumsInRange(start, stop) {
  let sum = 0;
  for (i = start; i <= stop; i++) {
    sum = sum += i % 2 == 0 ? i : 0;
  }
  return sum;
}
