// All Star Code Challenge #18
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

function strCount(str, letter) {
  //code here
  return str.split("").filter((el) => el === letter).length;
}
