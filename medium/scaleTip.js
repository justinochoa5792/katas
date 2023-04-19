// Balancing Scales
// Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

function scaleTip(arr) {
  let index = arr.indexOf("I");
  let left = arr.slice(0, index).reduce((a, b) => a + b);
  let right = arr.slice(index + 1, arr.length).reduce((a, b) => a + b);
  return left > right ? "left" : left === right ? "balanced" : "right";
}
