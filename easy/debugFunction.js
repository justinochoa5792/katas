// Debug the functions EASY
// Should be easy, begin by looking at the code. Debug the code and the functions should work.
//Original
// function multi(arr) {
//     return arr * arr;
//   }
//   function add(arr) {
//     return arr + arr;
//   }
//   function reverse(str) {
//     return str.reverse();
//   }

// Fix
function multi(arr) {
  return arr.reduce((a, b) => a * b);
}
function add(arr) {
  return arr.reduce((a, b) => a + b);
}
function reverse(str) {
  return str.split("").reverse().join("");
}
