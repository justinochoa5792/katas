// Sum Strings as Numbers
// Given the string representations of two integers, return the string representation of the sum of those integers.

function sumStrings(a, b) {
  if (a === "") {
    return b;
  } else if (b == "") {
    return a;
  } else {
    return (BigInt(a) + BigInt(b)).toString();
  }
}
