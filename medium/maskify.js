// Maskify the String
// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(str) {
  return str.slice(0, -4).replace(/./g, "#") + ("" + str).slice(-4);
}
