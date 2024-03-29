// Explosion Intensity
// Given a number, return a string of the word "Boom", which varies in the following ways:
// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.

function boomIntensity(n) {
  if (n > 2 && n % 5 === 0 && n % 2 === 0) {
    return `B${"O".repeat(n)}M!`;
  } else if (n > 2 && n % 2 !== 0 && n % 5 !== 0) {
    return `B${"o".repeat(n)}m`;
  } else if (n > 2 && n % 5 === 0) {
    return `B${"O".repeat(n)}M`;
  } else if (n < 2) {
    return "boom";
  } else {
    return `B${"o".repeat(n)}m!`;
  }
}
