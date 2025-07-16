// Remove B M W
// Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.
// If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message:

function removeBMW(str) {
  //TO DO
  const char = /[bmw]/gi;
  return typeof str == "string"
    ? str.replace(char, "")
    : "This program only works for text.";
}
