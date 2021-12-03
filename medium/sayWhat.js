// Burglary Series (11): Say What
// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function sayWhat(obj) {
  return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;
}
