// Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function (name) {
  let upper = name.substring(0, 1).toUpperCase();
  return `Hello ${upper.concat(name.toLowerCase().slice(1, name.length))}!`;
};
