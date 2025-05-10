// Weird words
// Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).
// Spaces and special characters should remain the same.
// Capital letters should transfer in the same way but remain capitilized.

function nextLetter(s) {
  return s.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(base + ((c.charCodeAt(0) - base + 1) % 26));
  });
}
