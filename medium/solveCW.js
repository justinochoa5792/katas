// Even odd disparity
// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

function solve(a) {
  let regex = /[a-zA-Z]/;
  let num = a.filter((el) => !regex.test(el));
  let even = num.filter((el) => el % 2 == 0).length;
  let odd = num.filter((el) => el % 2 !== 0).length;
  return even - odd;
}
