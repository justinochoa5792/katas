// Greed
// In my "getQuotes" function, I am trying to extract only the quotes from a string.

function getQuotes(string) {
  const regex = /"[^"]*"/g;
  return string.match(regex);
}
