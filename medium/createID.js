// City School Creating IDS
// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

function createID(firstname, lastname) {
  let first = firstname.slice(0, 1).toLowerCase();
  let last =
    lastname.charAt(0).toUpperCase() + lastname.slice(1, 3).toLowerCase();
  return first + last;
}
