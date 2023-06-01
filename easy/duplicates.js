// Count the Number of Duplicate Characters
// Count the Number of Duplicate Characters

function duplicates(str) {
  return str.split("").filter((item, index) => str.indexOf(item) !== index)
    .length;
}
