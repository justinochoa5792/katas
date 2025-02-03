// Decoding a message
// You have managed to intercept an important message and you are trying to read it.
// You realise that the message has been encoded and can be decoded by switching each letter with a corresponding letter.
// You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.
// For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

function decode(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";
  return message
    .split("")
    .map((el) => {
      let index = alphabet.indexOf(el);
      if (index !== -1) {
        let reversedChar = reversedAlphabet[index];
        return reversedChar;
      }
      return el;
    })
    .join("");
}
