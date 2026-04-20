// Polish alphabet
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

function correctPolishLetters(string) {
  // your code
  let chars = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
  };
  return string.replace(/[ąćęłńóśźż]/g, (m) => chars[m]);
}
