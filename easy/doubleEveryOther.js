// Double Every Other
// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
  return a.map((el, i) => (i % 2 !== 0 ? el * 2 : el));
}
