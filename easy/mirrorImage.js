// Training JS #28: methods of arrayObject---every() and some()
// Coding in function mirrorImage. function accept 1 parameter arr, it's a number array. Your task is find the first pair of mirror-image number and return as an array. The two number must be adjacent, and the returned array is in accordance with the order from left to right.
// What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number. Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121.

function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i].toString();
    let second = arr[i + 1].toString();
    let reversedFirst = first.split("").reverse().join("");
    let reversedSecond = second.split("").reverse().join("");

    if (first === reversedSecond || second === reversedFirst) {
      return [arr[i], arr[i + 1]];
    }
  }
  return [-1, -1];
}
