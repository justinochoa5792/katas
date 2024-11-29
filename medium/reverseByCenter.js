// Do you speak retsec?
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

function reverseByCenter(s) {
  // ...
  let middle = Math.floor(s.length / 2);
  return s.length % 2 == 0
    ? s.slice(middle).concat(s.slice(0, middle))
    : s
        .slice(middle + 1)
        .concat(s.slice(middle, middle + 1))
        .concat(s.slice(0, middle));
}
