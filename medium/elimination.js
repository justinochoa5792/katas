// Find twins
// Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.
// If there are no twins in the city - return None or the equivalent in the language that you are using.

function elimination(arr) {
  //write your code here
  let sorted = arr.sort((a, b) => a - b);
  let test = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      test.push(sorted[i]);
    }
  }
  return test.length == 0 ? null : test[0];
}
