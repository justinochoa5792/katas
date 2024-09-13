// Reverse the bits in an integer
// Write a function that reverses the bits in an integer.

function reverseBits(n) {
  // your code here
  let reversed = n.toString(2).split("").reverse().join("");
  return parseInt(reversed, 2);
}
