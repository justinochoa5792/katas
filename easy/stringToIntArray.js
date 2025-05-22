//String to list of integers.
//Given a string containing a list of integers separated by commas, write the function that takes said string and returns a new array / list containing all integers present in the string, preserving the order.

function stringToIntArray(s) {
  return s
    .split(",")
    .filter((el) => el.match(/[\d]/gi))
    .map((el) => Number(el));
}
