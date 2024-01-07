// Char Code Calculation
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

function calc(x) {
  let total1 = x
    .split("")
    .map((char, i) => char.charCodeAt().toString())
    .join("");
  total1 = total1.split("").reduce((a, b) => Number(a) + Number(b));
  let total2 = x
    .split("")
    .map((char, i) => char.charCodeAt().toString().replaceAll(7, 1))
    .join("");
  total2 = total2.split("").reduce((a, b) => Number(a) + Number(b));
  return total1 - total2;
}
