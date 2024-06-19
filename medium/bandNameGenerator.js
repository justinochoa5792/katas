// Band name generator
// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
// "dolphin" -> "The Dolphin"
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

function bandNameGenerator(str) {
  // Happy coding
  if (str.substring(0, 1) !== str.substring(str.length - 1)) {
    return `The ${str
      .substring(0, 1)
      .toUpperCase()
      .concat(str.substring(1, str.length))}`;
  } else {
    return str
      .substring(0, 1)
      .toUpperCase()
      .concat(str.substring(1, str.length - 1))
      .concat(str);
  }
}
