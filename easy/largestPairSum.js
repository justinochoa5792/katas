// Largest pair sum in array
//  Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum(numbers) {
  //TODO: Write your Code here
  let sorted = numbers.sort((a, b) => b - a);
  return sorted[0] + sorted[1];
}
