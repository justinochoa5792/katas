// Largest Swap
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largestSwap(num) {
  let newNum = num.toString().split("").reverse().join("");
  return Number(newNum) > num ? false : true;
}
