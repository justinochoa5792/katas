// Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// Not a big deal, your friend says. He writes the following code:

// Fix this incorrect code!
function checkAllEven(arr) {
  return arr.every(x % 2 === 0);
}

// After
function checkAllEven(arr) {
  return arr.every((x) => x % 2 === 0);
}
