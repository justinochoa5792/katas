// Is valid identifier?
// Given a string, determine if it's a valid identifier.
// Here is the syntax for valid identifiers:
// Each identifier must have at least one character.
// The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
// The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.

function isValid(idn) {
  // Your code here
  let regex = /^[A-Za-z$_][A-Za-z0-9_$,{1}]*$/gi;
  return regex.test(idn);
}
