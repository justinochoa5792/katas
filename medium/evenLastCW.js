// Evens times last
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0

function evenLast(numbers) {
  // Good luck
  let filtered = numbers.filter((el, i) => i % 2 === 0);
  let total = filtered.reduce((a, b) => a + b, 0) * numbers[numbers.length - 1];
  return isNaN(total) ? 0 : total;
}
