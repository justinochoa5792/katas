// Basic Sequence Practice
// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

function sumOfN(n) {
  // insert here your code
  let total = [0];
  for (let i = 1; i <= Math.abs(n); i++) {
    total.push(total[i - 1] + i * Math.sign(n));
  }
  return total;
}
