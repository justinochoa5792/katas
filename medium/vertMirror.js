// Moves in squared strings (I)
// Write these two functions and
// high-order function oper(fct, s) where
// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

function vertMirror(strng) {
  // Your code
  return strng.map((el) => el.split("").reverse().join("")).join("\n");
}
function horMirror(strng) {
  // Your code
  return strng.reverse().join("\n");
}
function oper(fct, s) {
  // Your code
  return fct(s.split("\n"));
}
