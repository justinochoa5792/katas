// Password Check - Binary to String
// Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;

function decodePass(passArr, bin) {
  // Code here
  let password = bin
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
  return passArr.filter((el) => el == password).length > 0 ? password : false;
}
