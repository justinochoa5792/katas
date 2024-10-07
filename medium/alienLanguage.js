// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

function alienLanguage(str) {
  //coding here...
  return str
    .split(" ")
    .map((el) =>
      el
        .substring(0, el.length - 1)
        .toUpperCase()
        .concat(el.slice(el.length - 1).toLowerCase())
    )
    .join(" ");
}
