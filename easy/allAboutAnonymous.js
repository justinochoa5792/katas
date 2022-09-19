// All About Anonymous Functions: Adding
// Write a function that returns an anonymous function, which adds n to its input

function addsNum(n) {
  return function (i) {
    return i + n;
  };
}
