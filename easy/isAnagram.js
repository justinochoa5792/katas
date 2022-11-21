// Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

function isAnagram(s1, s2) {
  s1 = s1
    .split("")
    .map((i) => i.toLowerCase())
    .sort()
    .join("")
    .trim();
  s2 = s2
    .split("")
    .map((i) => i.toLowerCase())
    .sort()
    .join("")
    .trim();
  return s1 !== s2 ? false : true;
}
