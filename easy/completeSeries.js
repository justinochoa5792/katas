// Complete Series
// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.
// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

function completeSeries(arr) {
  // write your code here
  let sorted = arr.sort((a, b) => a - b);
  let total = [];

  for (let i = 0; i <= Math.max(...sorted); i++) {
    total.push(i);
  }
  return new Set(arr).size !== arr.length ? [0] : total;
}
