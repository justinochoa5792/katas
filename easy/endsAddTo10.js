// Adding Both Ends Together
// Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:
//The first and last digits of a number must add to 10.

function endsAddTo10(nums) {
  return nums
    .map((el) => Math.abs(Math.floor(el / 10) + (el % 10)))
    .filter((el) => el >= 10).length;
}
