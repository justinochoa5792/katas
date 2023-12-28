// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x
    .split("")
    .map((el) => (el < 5 ? el.replace(el, 0) : el.replace(el, 1)))
    .join("");
}
