// Between Extremes
// Given an array of numbers, return the difference between the largest and smallest values.

function betweenExtremes(numbers) {
  //write your code here
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return max - min;
}
