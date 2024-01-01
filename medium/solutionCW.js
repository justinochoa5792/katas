// Substituting Variables Into Strings: Padded Numbers
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

function solution(value) {
  //...
  let strVal = value.toString().length;
  return `Value is ${
    strVal < 5 ? "0".repeat(5 - strVal).concat(value) : value
  }`;
}
