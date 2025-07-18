// Conference Traveller
// Write a conference picker function that takes in two arguments:
// Cities visited, a list of cities that Lucy has visited before, given as an array of strings.
// Cities offered, a list of cities that will host SECSR conferences this year, given as an array of strings. Cities offered will already be ordered in terms of the relevance of the conferences for Lucy's research (from the most to the least relevant).
// The function should return the city that Lucy should visit, as a string.

function conferencePicker(citiesVisited, citiesOffered) {
  // your code here
  let filtered = citiesOffered.filter((el) => !citiesVisited.includes(el));
  return filtered.length == 0
    ? "No worthwhile conferences this year!"
    : filtered[0];
}
