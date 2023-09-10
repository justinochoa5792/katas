// Printer Errors
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

function printerError(s) {
  // your code
  let regex = /[n-z]/gi;
  let num = s.match(regex) === null ? 0 : s.match(regex).length;
  return `${num}/${s.length}`;
}
