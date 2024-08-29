// CamelCase Method
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

String.prototype.camelCase = function () {
  //your code here
  return this.split(" ")
    .map((el) => el.slice(0, 1).toUpperCase().concat(el.slice(1)))
    .join("");
};
