// Disagreeable ascii
// You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.

function getWeight(name) {
  return name
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return code + 32;
      } else if (code >= 97 && code <= 122) {
        return code - 32;
      } else {
        return 0;
      }
    })
    .reduce((a, b) => a + b, 0);
}
