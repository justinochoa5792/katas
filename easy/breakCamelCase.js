// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
  return string.match(/[A-Z]*[^A-Z]+/g).join(" ");
}
