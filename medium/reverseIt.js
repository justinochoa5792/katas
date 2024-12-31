// reverseIt
// You have to create a function named reverseIt.
// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

function reverseIt(data) {
  return typeof data === "object" || typeof data === "boolean"
    ? data
    : typeof data === "number"
    ? Number(data.toString().split("").reverse().join(""))
    : data.split("").reverse().join("");
}
