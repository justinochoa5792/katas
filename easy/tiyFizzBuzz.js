// TIY-FizzBuzz
// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:
// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".

function tiyFizzBuzz(sentence) {
  let result = [];

  for (let char of sentence) {
    if (/[AEIOU]/.test(char)) {
      result.push("Iron Yard");
    } else if (/[A-Z]/.test(char)) {
      result.push("Iron");
    } else if (/[aeiou]/.test(char)) {
      result.push("Yard");
    } else {
      result.push(char);
    }
  }

  return result.join("");
}
