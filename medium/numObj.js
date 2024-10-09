// Numbers to Objects
// For each number in the array you will need to create an object.
// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

function numObj(s) {
  return s.map((el) => ({ [el]: String.fromCharCode(el) }));
}
