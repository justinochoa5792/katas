// Freudian translator
// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.
// In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {
  let splitStr = string.split(" ");
  return string === ""
    ? ""
    : splitStr.map((el) => el.replace(el, "sex")).join(" ");
}
