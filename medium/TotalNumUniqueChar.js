// Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(s1, s2) {
  let s3 = s1.concat(s2);
  return new Set(s3).size;
}
