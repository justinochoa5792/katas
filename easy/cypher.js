// Number encrypting: cypher
// You will receive a string composed by English words, string. You will have to return a cyphered version of that string.
// The numbers corresponding to each letter are represented at the table below. Notice that different letters can share the same number. In those cases, one letter will be upper case and the other one lower case.

function cypher(string) {
  // do your magic here
  let chars = {
    "I": "1",
    "l": "1",
    "R": "2",
    "z": "2",
    "E": "3",
    "e": "3",
    "A": "4",
    "a": "4",
    "S": "5",
    "s": "5",
    "G": "6",
    "b": "6",
    "T": "7",
    "t": "7",
    "B": "8",
    "g": "9",
    "O": "0",
    "o": "0",
  };
  return string.replace(/[IREASGTBOlzeasbtgo]/g, (m) => chars[m]);
}
