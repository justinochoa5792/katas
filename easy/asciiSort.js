// Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

function asciiSort(arr) {
  let str1 = arr[0]
    .split("")
    .map((i) => i.charCodeAt())
    .reduce((a, b) => a + b);
  let str2 = arr[1]
    .split("")
    .map((i) => i.charCodeAt())
    .reduce((a, b) => a + b);
  return str1 < str2 ? arr[0] : arr[1];
}
