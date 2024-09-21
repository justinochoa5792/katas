// Help Bob count letters and digits.
// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

function countLettersAndDigits(input) {
  let filtered = input.match(/[\da-z]/gi);
  return !filtered ? 0 : filtered.length;
}
