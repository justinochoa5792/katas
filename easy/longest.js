// Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  // your code
  return Array.from(new Set(s1.concat(s2).split("").sort())).join("");
}
