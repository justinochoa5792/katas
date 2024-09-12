// Count consonants
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

function consonantCount(str) {
  // ...
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (char >= "a" && char <= "z" && !"aeiou".includes(char)) {
      cnt++;
    }
  }
  return cnt;
}
