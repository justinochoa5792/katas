// Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

function nextInLine(arr, num) {
  if (arr.length === undefined) {
    return "No array has been selected";
  } else {
    arr.shift();
    return arr.concat(num);
  }
}
