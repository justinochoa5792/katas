// Basic Math (Add or Subtract)
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

function calculate(str) {
  //your code here...
  let num = eval(str.replaceAll("plus", "+").replaceAll("minus", "-"));
  return num.toString();
}
