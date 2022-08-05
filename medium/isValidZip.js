// Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

function isValid(zip) {
  let validZipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  return validZipTest.test(zip);
}
