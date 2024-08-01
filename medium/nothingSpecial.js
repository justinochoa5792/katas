// Nothing special
// Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.

function nothingSpecial(str) {
  //your code here
  if (typeof str != "string") {
    return "Not a string!";
  } else {
    return str.replace(/[^a-z0-9\s]/gi, "");
  }
}
