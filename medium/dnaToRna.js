// Transcribe to mRNA
// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.

function dnaToRna(dna) {
  const chars = { A: "U", T: "A", G: "C", C: "G" };
  return dna.replace(/[ATGC]/g, (m) => chars[m]);
}
