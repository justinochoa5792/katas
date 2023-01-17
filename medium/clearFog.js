// Clear the Fog
// Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

function clearFog(str) {
  let newStr = str.replace(/[fog]/gi, "");
  return newStr === str ? "It's a clear day!" : newStr;
}
