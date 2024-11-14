// SillyCASE
// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.
// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

function sillycase(silly) {
  //your code
  let middle = silly.split("").length;
  return silly
    .split("")
    .slice(0, Math.round(middle / 2))
    .join("")
    .toLowerCase()
    .concat(
      silly
        .split("")
        .slice(Math.round(middle / 2))
        .join("")
        .toUpperCase()
    );
}
