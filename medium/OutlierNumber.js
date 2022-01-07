// Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

function outlierNumber(arr) {
  let odd = arr.filter((el) => Math.abs(el) % 2 === 1);
  let even = arr.filter((el) => Math.abs(el) % 2 === 0);
  if (odd.length < even.length) {
    return odd[0];
  } else {
    return even[0];
  }
}
