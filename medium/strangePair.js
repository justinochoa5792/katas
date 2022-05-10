// Strange Pair
// A pair of strings form a strange pair if both of the following are true:
// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
  return str1.charAt(str1.length - 1) === str2.charAt(0) &&
    str2.charAt(str2.length - 1) === str1.charAt(0)
    ? true
    : false;
}
