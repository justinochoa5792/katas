// esrever esreveR!
// In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.
// But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

function esrever(str) {
  let punc = str.slice(-1);
  let trimmed = str.slice(0, -1);
  return (
    trimmed
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .reverse()
      .join(" ") + punc
  );
}
