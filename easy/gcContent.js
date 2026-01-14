// DNA GC-content
// In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that are either guanine or cytosine.
// Given a DNA sequence (a string) return the GC-content in percent.

function gcContent(dna) {
  let filtered = dna.match(/[CG]/gi);
  return !filtered ? 0 : (filtered.length / dna.split("").length) * 100;
}
