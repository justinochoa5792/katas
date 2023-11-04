// Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.

function divCon(x) {
  let num = x.filter((el) => typeof el === "number");
  num = num.reduce((a, b) => a + b, 0);
  let letters = x.filter((el) => typeof el === "string");
  letters = letters.reduce((a, b) => Number(a) + Number(b), 0);
  return num - letters;
}
