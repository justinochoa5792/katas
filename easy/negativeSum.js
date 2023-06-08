// Sum of Negative Integers
// Create a function that takes a string containing integers as well as other characters and return the sum of the negative integers only.

function negativeSum(chars) {
  let regex = /-?\d+/g;
  let negative = chars.match(regex).filter((el) => el.includes("-"));
  return negative.map((el) => Number(el)).reduce((a, b) => a + b);
}
