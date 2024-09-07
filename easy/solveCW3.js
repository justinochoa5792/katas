// Simple remove duplicates
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

function solve(arr) {
  let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i);
  for (let i = 0; i < newArr.length; i++) {
    arr.splice(arr.indexOf(newArr[i]), 1);
  }
  return arr;
}
