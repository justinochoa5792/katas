// Test Your Knowledge Of Function Scope
// Write a function that adds from two invocations.
// All inputs will be integers.

//Write you solution here.
function add(a) {
  return function (b) {
    return a + b;
  };
}
