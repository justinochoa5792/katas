// How sexy is your name?
// There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

function sexyName(name) {
  let scores = {
    "A": 100,
    "B": 14,
    "C": 9,
    "D": 28,
    "E": 145,
    "F": 12,
    "G": 3,
    "H": 10,
    "I": 200,
    "J": 100,
    "K": 114,
    "L": 100,
    "M": 25,
    "N": 450,
    "O": 80,
    "P": 2,
    "Q": 12,
    "R": 400,
    "S": 113,
    "T": 405,
    "U": 11,
    "V": 10,
    "W": 10,
    "X": 3,
    "Y": 210,
    "Z": 23,
  };
  let nameTotal = name
    .toUpperCase()
    .split("")
    .map((el) => Number(el.replace(/[A-Z]/g, (e) => scores[e])))
    .reduce((a, b) => a + b, 0);
  return nameTotal >= 600
    ? "THE ULTIMATE SEXIEST"
    : nameTotal >= 301 && nameTotal <= 599
    ? "VERY SEXY"
    : nameTotal >= 61 && nameTotal <= 300
    ? "PRETTY SEXY"
    : "NOT TOO SEXY";
}
