// RegEx: Special Characters
// Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.

function asterisk(string) {
  const regex = new RegExp(/^a\w+c/g);
  return regex.test(string);
}
