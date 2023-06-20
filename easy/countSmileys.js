// Count the Smiley Faces :)
// Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:
// A smiley has eyes. Eyes can be : or ;.
// A smiley has a nose but it doesn't have to. A nose can be - or ~.
// A smiley has a mouth which can be ) or D.
// No other characters are allowed except for those mentioned above.

function countSmileys(arr) {
  return arr.filter((face) => /[:;][-~]?[\)D]/.test(face)).length;
}
