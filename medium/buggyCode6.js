// Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!
// H elp him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Original
function removeNumbers(str) {
  return str
    .split("")
    .filter((c) => !parseInt(c))
    .join("");
}

// Remix
function removeNumbers(str) {
  return str.replace(/[0-9]/g, "");
}
