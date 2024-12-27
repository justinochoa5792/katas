// String Reversing, Changing case, etc.
// Given 2 string parameters, show a concatenation of:
// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

function reverseAndMirror(s1, s2) {
  s2 = s2
    .split("")
    .map((el) => (el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()))
    .reverse()
    .join("");
  let reverseS1 = s1
    .split("")
    .map((el) => (el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()))
    .reverse()
    .join("");
  s1 = s1
    .split("")
    .map((el) =>
      el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()
    );
  return s2.concat("@@@").concat(reverseS1.concat(s1.join("")));
}
