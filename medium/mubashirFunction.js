// Mubashir's Mystery Challenge
// Mubashir has written a mysterious function that takes two numbers a and b and returns multiplication?. Solve the riddle of what Mubashir's function is by having a look at some of the examples below.

function mubashirFunction(a, b) {
  let first = ("" + a).split("").reduce((curr, prev) => curr + +prev, 0);
  let second = ("" + b).split("").reduce((curr, prev) => curr + +prev, 0);
  return first * second;
}
