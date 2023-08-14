// Return the End Letters of Numbers
// Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th, etc.

function returnEndOfNumber(num) {
  num = num.toString();
  if (
    num.endsWith("11") ||
    num.endsWith("12") ||
    num.endsWith("4") ||
    num.endsWith("13")
  ) {
    return `${num}-TH`;
  } else if (num.endsWith("22")) {
    return `${num}-ND`;
  } else if (num.endsWith("3")) {
    return `${num}-RD`;
  } else {
    return `${num}-ST`;
  }
}
