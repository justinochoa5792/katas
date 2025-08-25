// Binary to string
// Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

function binaryToString(binary) {
  return binary
    .split("0b")
    .map((el) => String.fromCharCode(parseInt(el, 2)))
    .filter((el) => el !== "\u0000")
    .join("");
}
