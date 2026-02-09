// They're good dogs.
// The function weRateDogs(str, rating) takes a string and an integer as the inputs. Within the string is an incorrect rating x/y.
// You will need to change the incorrect rating x/y to the correct rating rating/10. The given string may contain numbers and letters, but no special characters other than /.

function weRateDogs(str, rating) {
  //write code here
  let splitSentence = str.split("/");
  return splitSentence[0]
    .slice(0, -1)
    .concat(`${rating}/`)
    .concat(splitSentence[1]);
}
