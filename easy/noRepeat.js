// All Star Code Challenge #16
// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

function noRepeat(str) {
  //code here
  let split = str.split("");

  for (let i = 0; i < split.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
}
