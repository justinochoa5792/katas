// Logarithms - Basic
// A logarithm is kind of like reverse exponents. There is a base and a number in a logarithm. The point of a logarithm is to find out what power you have to raise the base to get the number next to the base. For example:

function logarithm(base, num) {
  let total = Math.log(num) / Math.log(base);
  return Number.isInteger(total) === false || total === 0 ? "Invalid" : total;
}
