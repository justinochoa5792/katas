// Flip the Boolean
// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given

function reverse(bool) {
  return bool === false ? true : bool === true ? false : "boolean expected";
}
