// Alphabetical Sequence
// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

function alphaSeq(str) {
  //your code here
  return str
    .toLowerCase()
    .split("")
    .sort()
    .map((el) =>
      el
        .substring(0, 1)
        .toUpperCase()
        .concat(el.repeat(el.charCodeAt() - 96 - 1))
    )
    .join(",");
}
