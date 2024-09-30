// From A to Z
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

function gimmeTheLetters(sp) {
  const firstLetter = sp.split("-")[0].toLowerCase().charCodeAt(0) - 96;
  const secondLetter = sp.split("-")[1].toLowerCase().charCodeAt(0) - 96;
  let alphabet = [];
  for (let i = firstLetter; i <= secondLetter; i++) {
    alphabet.push(i);
  }
  return (alphabet = alphabet
    .map((el) =>
      sp.match(/[A-Z]/g)
        ? String.fromCharCode(96 + el).toUpperCase()
        : String.fromCharCode(96 + el)
    )
    .join(""));
}
