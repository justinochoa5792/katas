// All Star Code Challenge #13 : Pig Latin Translator
// Create a function, called translate(), that takes a string argument and returns the input string into "pig latin"
// The rules to translate into pig latin are as follows:
// Valid words are 2 or more letters long
// If a word begins with a consonant (a letter NOT 'a','e','i','o', or 'u'), then that first letter is shifted to the end of the word
// Then add "ay"

var translate = function (word) {
  //code here
  if (!word) {
    return "";
  } else if (word.length < 2) {
    return word;
  } else if (!word.slice(0, 1).match(/[aieou]/gi)) {
    return word.slice(1).concat(`${word.slice(0, 1)}ay`);
  } else {
    return word.concat(`ay`);
  }
};
