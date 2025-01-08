// Ones' Complement
// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

function onesComplement(n) {
  // your code here
  return n
    .split("")
    .map((el) => (el == "1" ? el.replace("1", "0") : el.replace("0", "1")))
    .join("");
}
