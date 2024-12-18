// Invalid Input - Error Handling #1
// The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

function getCount(words) {
  if (typeof words !== "string") {
    return { vowels: 0, consonants: 0 };
  }

  let vowel = words.match(/[aeiou]/gi) || [];
  let consonant = words.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

  return { vowels: vowel.length, consonants: consonant.length };
}
