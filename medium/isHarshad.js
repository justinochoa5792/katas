// Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

function isHarshad(n) {
  let split = n.toString().split("");
  split = split.map((i) => Number(i)).reduce((a, b) => a + b);
  return n % split === 0 ? true : false;
}
