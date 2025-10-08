// I guess this is a 7kyu kata #1: Search result
// Complete function finalResult that accepts two arguments keywords and searchResult, return all valid results that contains all keywords.
// Argument keywords is always a string that contains uppercase or lowercase letters; Argument searchResult is always a string array that contains any strings.

function finalResult(keywords, searchResult) {
  //coding here...
  const letters = keywords.split("");

  return searchResult.filter((el) => letters.every((ch) => el.includes(ch)));
}
