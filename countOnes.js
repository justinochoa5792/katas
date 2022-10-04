// Count Ones in Binary Representation of Integer
// Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.

function countOnes(i) {
  return i
    .toString(2)
    .split("")
    .filter((x) => Number(x) === 1).length;
}
