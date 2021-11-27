// The Modulus Operator Function
// Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.

function mod(a, b) {
  let t = a - b * parseInt(a / b);
  return t;
}
