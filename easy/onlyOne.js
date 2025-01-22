// Only one
// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

function onlyOne(...a) {
  return a.filter(Boolean).length === 1;
}
