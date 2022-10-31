// Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
  let iso = str.toLowerCase().split("");

  for (let i = 0; i < iso.length; i++) {
    if (iso.indexOf(iso[i]) !== iso.lastIndexOf(iso[i])) {
      return false;
    }
  }
  return true;
}
