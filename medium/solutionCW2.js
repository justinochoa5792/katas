// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  const numChunks = Math.ceil(str.length / 2);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; i++, o += 2) {
    if (str.substr(o, 2).length == 2) {
      chunks[i] = str.substr(o, 2);
    } else {
      chunks[i] = str.substr(o, 2).concat("_");
    }
  }

  return chunks;
}
