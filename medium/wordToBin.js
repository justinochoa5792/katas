// Word to binary
// Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

function wordToBin(str) {
  //code away!!!
  return str
    .split("")
    .map((el) => el.charCodeAt(0).toString(2).padStart(8, "0"));
}
