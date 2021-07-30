// Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
function frontThree(str) {
  let newString = str.slice(0, 3);
  return newString.repeat(3);
}
