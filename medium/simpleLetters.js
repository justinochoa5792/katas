// Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

function longestString(str1, str2) {
  let newString = str1.concat(str2);
  return newString
    .split("")
    .filter((e, i, f) => f.indexOf(e) == i)
    .sort()
    .join("");
}
