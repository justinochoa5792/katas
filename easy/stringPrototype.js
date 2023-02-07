// Extending the String Prototype
// Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:
// consonants(word) which returns the number of consonants in a word when called.
// vowels(word) which returns the number of vowels in a word when called.

String.prototype.consonants = function () {
  return this.replace(/[aeiou]/gi, "").length;
};

String.prototype.vowels = function () {
  return this.replace(/[bcdfghjklmnpqrstvwxys]/gi, "").length;
};
