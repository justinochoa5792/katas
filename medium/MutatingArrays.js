// Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

// Fix this incorrect code, so that all tests pass!
function minusOne(arr) {
  arr.pop();
  return arr;
}

// Fixed Solution
function minusOne(arr) {
  let newArr = [...arr];
  newArr.pop();
  return newArr;
}
