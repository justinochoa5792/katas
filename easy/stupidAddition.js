// Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

function stupidAddition(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a.toString() + b.toString();
  } else if (typeof a === "string" && typeof b === "string") {
    return Number(a) + Number(b);
  } else return null;
}
