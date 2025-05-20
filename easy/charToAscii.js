//char_to_ascii
//Take a string and return a hash with all the ascii values of the characters in the string. Returns nil (Ruby), None (Python) or null (JavaScript) if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string) {
  //your code here
  let obj = {};
  let removeRepeats = new Set();

  if (string.length == 0) {
    return null;
  } else {
    for (let char of string) {
      if (/[a-zA-Z]/.test(char) && !removeRepeats.has(char)) {
        removeRepeats.add(char);
        obj[char] = char.charCodeAt(0);
      }
    }
  }
  return obj;
}
