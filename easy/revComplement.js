// RNA Reverse Complement
// Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:

function reverseComplement(inputSequence) {
  return inputSequence
    .split("")
    .map((el) => {
      if (el === "A") {
        return "U";
      } else if (el === "U") {
        return "A";
      } else if (el === "G") {
        return "C";
      } else {
        return "G";
      }
    })
    .reverse()
    .join("");
}
