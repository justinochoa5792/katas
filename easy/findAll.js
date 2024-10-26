// Find all occurrences of an element in an array
// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

const findAll = (array, n) => {
  // your code here
  return array.map((el, i) => (el == n ? i : "")).filter((el) => el !== "");
};
