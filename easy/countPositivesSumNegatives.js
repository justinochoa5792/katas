// Count of positives / sum of negatives
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(input) {
  // your code here
  if (input === null) {
    return [];
  } else {
    let pos = input.filter((el) => el > 0).length;
    let neg = input.filter((el) => el < 0).reduce((a, b) => a + b, 0);
    return (pos === 0 && neg === 0) || input === null ? [] : [pos, neg];
  }
}
