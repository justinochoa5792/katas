// COFFEE!
// Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

function coffee(str) {
  //code goes here
  return str.replace(/coffee\b/gi, "COFFEE");
}
