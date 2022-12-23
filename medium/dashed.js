// Dashed Vowels
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

function dashed(str) {
  const chars = {
    a: "-a-",
    e: "-e-",
    i: "-i-",
    o: "-o-",
    u: "-u-",
    A: "-A-",
    E: "-E-",
    I: "-I-",
    O: "-O-",
    U: "-U-",
  };
  return str
    .split("")
    .map((i) => i.replace(/[aeiouAEIOU]/g, (m) => chars[m]))
    .join("");
}
