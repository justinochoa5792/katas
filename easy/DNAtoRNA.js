// DNA to RNA Conversion
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna
    .split("")
    .map((el) => {
      if (el === "T") {
        return el.replace("T", "U");
      } else {
        return el;
      }
    })
    .join("");
}
