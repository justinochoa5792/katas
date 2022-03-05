// Which Generation Are You?
// Try finding your ancestors and offspring with code.
// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function generation(x, y) {
  if (x === 1 && y === "m") {
    return "son";
  } else if (x === 1 && y === "f") {
    return "daughter";
  } else if (x === 2 && y === "m") {
    return "grandson";
  } else if (x === 2 && y === "f") {
    return "granddaughter";
  } else if (x === 3 && y === "m") {
    return "great grandson";
  } else if (x === 3 && y === "f") {
    return "great granddaughter";
  } else if (x === -1 && y === "m") {
    return "father";
  } else if (x === -1 && y === "f") {
    return "mother";
  } else if (x === -1 && y === "m") {
    return "father";
  } else if (x === -1 && y === "f") {
    return "mother";
  } else if (x === -2 && y === "m") {
    return "grandfather";
  } else if (x === -2 && y === "f") {
    return "grandmother";
  } else if (x === -3 && y === "m") {
    return "great grandfather";
  } else if (x === -3 && y === "f") {
    return "great grandmother";
  } else {
    return "me!";
  }
}
