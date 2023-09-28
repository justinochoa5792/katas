// Sum of a sequence
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let total = [];
  for (let i = begin; i <= end; i += step) {
    total.push(i);
  }
  return total.reduce((a, b) => a + b, 0);
};
