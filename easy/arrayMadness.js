// SpeedCode #2 - Array Madness
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  a = a.map((el) => el ** 2).reduce((a, b) => a + b);
  b = b.map((el) => el ** 3).reduce((a, b) => a + b);
  return a > b ? true : false;
}
