// Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

function sayHelloBye(name, num) {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return num === 1 ? `Hello ${nameCapitalized}` : `Bye ${nameCapitalized}`;
}
