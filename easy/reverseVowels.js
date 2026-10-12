// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let chars = s.split("");
  let vowels = /[aeiou]/i;

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.test(chars[left])) {
      left++;
    }

    while (left < right && !vowels.test(chars[right])) {
      right--;
    }

    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }

  return chars.join("");
};
