// Remove duplicate words
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

function removeDuplicateWords(s) {
  // your perfect code...
  return Array.from(new Set(s.split(" "))).join(" ");
}
