// Hells Kitchen
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
  let chars = { "a": "@", "e": "*", "i": "*", "o": "*", "u": "*" };
  return a
    .replace(/[aeiouAEIOU]/g, (m) => chars[m])
    .split(" ")
    .map((el) => el.toUpperCase().concat("!!!!"))
    .join(" ");
}
