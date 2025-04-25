// Ciphers #1 - The 01 Cipher
// It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.

function encode(plaintext) {
  //finish the function
  return plaintext
    .split("")
    .map((el) =>
      el.match(/[a-z]/gi) && (el.toLowerCase().charCodeAt() - 96) % 2 == 0
        ? 1
        : el.match(/[a-z]/gi) && (el.toLowerCase().charCodeAt() - 96) % 2 !== 0
        ? 0
        : el
    )
    .join("");
}
