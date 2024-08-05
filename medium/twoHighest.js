// Return Two Highest Values in List
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

function twoHighest(arr) {
  let max = Math.max(...arr.sort((a, b) => b - a));
  let sorted = Array.from(new Set(arr.sort((a, b) => b - a)));
  if (max < 0) {
    return [];
  } else if (sorted.length == 1) {
    return [sorted[0]];
  } else {
    return [sorted[0], sorted[1]];
  }
}
