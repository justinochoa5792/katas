// WeIrD StRiNg CaSe
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

function toWeirdCase(string) {
  //TODO
  return string
    .toLowerCase()
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el))
        .join("")
    )
    .join(" ");
}
