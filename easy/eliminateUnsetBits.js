// Eliminate the intruders! Bit manipulation
// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

function eliminateUnsetBits(number) {
  // your code here
  return !number.match(/[1]/gi)
    ? 0
    : parseInt(number.match(/[1]/gi).join(""), 2);
}
