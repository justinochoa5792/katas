// Complementary DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna) {
  return dna
    .split("")
    .map((el) => {
      if (el === "A") {
        return el.replace("A", "T");
      } else if (el === "T") {
        return el.replace("T", "A");
      } else if (el === "G") {
        return el.replace("G", "C");
      } else {
        return el.replace("C", "G");
      }
    })
    .join("");
}
