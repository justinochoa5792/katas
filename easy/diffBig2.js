// Difference between biggest 2 numbers
// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

function diffBig2(arr) {
  let biggest = Math.max(...arr);
  let second = arr.splice(arr.indexOf(biggest), 1);
  second = Math.max.apply(null, arr);
  return biggest - second;
}
