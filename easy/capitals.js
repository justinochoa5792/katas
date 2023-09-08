// Find the capitals
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  // Write your code here
  return word
    .split("")
    .map((el, i) => (el === el.toUpperCase() ? i : ""))
    .filter((el) => typeof el === "number");
};
