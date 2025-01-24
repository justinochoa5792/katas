// noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
// Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

function letterCheck(arr) {
  //write your code here!!
  let first = arr[0];
  first = first.toLowerCase().split("").sort();

  let second = arr[1];
  second = second.toLowerCase().split("").sort();

  return second.filter((el) => !first.includes(el)).length == 0;
}
