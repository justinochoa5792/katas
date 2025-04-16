// Club Doorman
// The Club Doorman will give you a word. To gain access, you need to provide the right number according to the given word.
// Each word contains exactly one pair of consecutive identical letters, such as the tt in lettuce.
// To determine the number, find the position of the repeated letter in the alphabet (where a is 1, b is 2, ..., z is 26) and multiply it by 3.

function passTheDoorMan(word) {
  let total;
  let split = word.split("");

  for (let i = 0; i < split.length; i++) {
    if (split[i] == split[i + 1]) {
      total = (split[i].charCodeAt(0) - 96) * 3;
    }
  }
  return total;
}
