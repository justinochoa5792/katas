// String reverse slicing 101
// You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

function reverseSlice(str) {
  let result = [];
  let reversedStr = str.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    result.push(reversedStr.slice(i));
  }

  return result;
}
