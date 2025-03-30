// Negative Connotation
// You will be given a string with sets of characters, (i.e. words), seperated by between one and four spaces (inclusive).
// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").
// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

function connotation(str) {
  let split = str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((el) => (el.substring(0, 1).match(/[a-m]/) ? 1 : 0));
  return (
    split.filter((el) => el === 1).length >=
    split.filter((el) => el === 0).length
  );
}
