// ASCII Total
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

function uniTotal(string) {
  // total up dem unicodes!
  return string.length === 0
    ? 0
    : string
        .split("")
        .map((el) => el.charCodeAt())
        .reduce((a, b) => a + b);
}
