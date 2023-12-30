// Building Strings From a Hash
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

function solution(pairs) {
  // TODO: complete
  return Object.keys(pairs)
    .map((key) => `${key} = ${pairs[key]}`)
    .join(",");
}
