// Apparently-Modifying Strings
// For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).
// If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.
// If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

function apparently(string) {
  // your code
  let result = [];
  let words = string.split(" ");

  if (!string) {
    return "";
  } else {
    for (let i = 0; i < words.length; i++) {
      result.push(words[i]);
      if (
        (words[i] === "and" || words[i] === "but") &&
        words[i + 1] !== "apparently"
      ) {
        result.push("apparently");
      }
    }
  }

  return result.join(" ");
}
