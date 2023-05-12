// Are Letters in the Second String Present in the First?
// Create a function that accepts an array of two strings and checks if all of the letters in the second string are present in the first string.

function letterCheck(arr) {
  let first = arr[0].toLowerCase().split("").sort();
  let second = arr[1].toLowerCase().split("").sort();

  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) < 0) {
      return false;
    }
  }
  return true;
}
