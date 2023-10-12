// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

function inAscOrder(arr) {
  // Code your algorithm here :)
  let sorted = [...arr].sort((a, b) => a - b);
  return arr.every((el, i) => el === sorted[i]);
}
