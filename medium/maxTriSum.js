// Maximum Triplet Sum (Array Series #7)
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers) {
  //your code here
  let arr = new Set(numbers);
  arr = [...arr].sort((a, b) => b - a).filter((el, i) => i < 3);
  return arr.reduce((a, b) => a + b);
}
