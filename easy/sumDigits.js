// How Many Digits?
// Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!

function sumDigits(n) {
  return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;
}
