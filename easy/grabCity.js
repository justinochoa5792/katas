// Grab the City
// Write a function to return the city from each of these vacation spots.

function grabCity(str) {
  let regex = /\[.*?\]/g;
  let test = str.match(regex);
  return test[test.length - 1].replace(/(^.*\[|\].*$)/g, "");
}
