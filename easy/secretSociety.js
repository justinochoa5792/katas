// Secret Society
// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(friends) {
  return friends
    .map((item) => item[0])
    .sort()
    .join("");
}
