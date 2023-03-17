// Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

function probability(arr, num) {
  let prob = (arr.filter((i) => i >= num).length / arr.length) * 100;
  return Number(prob.toFixed(1));
}
