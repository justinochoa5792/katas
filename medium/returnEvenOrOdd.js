// Return Odd > Even
// Given an array, return true if there are more odd numbers than even numbers, otherwise return false.

function oddeven(arr) {
  let even = arr.filter((i) => i % 2 == 0).length;
  let odd = arr.filter((i) => i % 2 != 0).length;
  return odd > even ? true : false;
}
