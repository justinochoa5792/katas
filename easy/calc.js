// Character Code
// Turn each character in a string str into its ASCII character code and join them together to create a number.

function calc(str) {
  str = str
    .split("")
    .map((el, i) => el.charCodeAt())
    .join("");
  let str1 = str
    .split("")
    .map((el) => +el)
    .reduce((a, b) => a + b);
  let str2 = str
    .split("")
    .map((el) => +el.replace("7", "1"))
    .reduce((a, b) => a + b);
  return str1 - str2;
}
