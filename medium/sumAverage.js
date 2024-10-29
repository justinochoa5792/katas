// Sum of Array Averages
// First, determine the average of each array. Then, return the sum of all the averages.
// After calculating all the averages, add them all together, then round down, as shown in the example below:

const sumAverage = (arr) => {
  let result;
  // Your code here
  let total = arr
    .map((el) => el.reduce((a, b) => a + b) / el.length)
    .reduce((a, b) => a + b);
  return Math.floor(total);
};
