// Letters Only
// Check if the given string consists of only letters and spaces and if every letter is in lower case.

function lettersOnly(str) {
  let regex = /^[a-z\s]*$/;
  return str === "" ? false : regex.test(str);
}
