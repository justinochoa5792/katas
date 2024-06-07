// Valid Spacing
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

function validSpacing(s) {
  // write your code here
  return s.split(" ").filter((el) => el == "").length === 0 || s === ""
    ? true
    : false;
}
