//Lowercase strings in array
//Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

function arrayLowerCase(arr) {
  // return array of strings in lowercase
  return arr.map((el) => (typeof el == "string" ? el.toLowerCase() : el));
}
