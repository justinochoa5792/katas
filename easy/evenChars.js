// Return a string's even characters.
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

function evenChars(string) {
  //keep coding!
  let splitStr = string.split("");
  return splitStr.length < 2 || splitStr.length > 100
    ? "invalid string"
    : splitStr.filter((el, i) => (i + 1) % 2 == 0);
}
