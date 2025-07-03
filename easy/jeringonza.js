//Simple Jeringonza
// Jeringonza is a Spanish language game, similar to Pig Latin, played by children in Spain and all over Hispanic America. It consists of adding the letter p after each vowel (a, e, i, o or u) of a word, and repeating the vowel. For example, jeringonza becomes jeperipingoponzapa (or j-epe-r-ipi-ng-opo-nz-apa).
// For the purposes of this kata, the input and output are both strings and no input strings will be empty. Also, the added 'p' should match the case of the vowel. So opo for o and EPE for E.
// (If you're interested - there's a few extra components in jeringonza, such as how to deal with stressed vowels, but for the purposes of this kata we're keeping it simple)

function jeringonza(str) {
  // your copodede here :)
  let chars = {
    "a": "apa",
    "e": "epe",
    "i": "ipi",
    "o": "opo",
    "u": "upu",
    "A": "APA",
    "E": "EPE",
    "I": "IPI",
    "O": "OPO",
    "U": "UPU",
  };
  return str.replace(/[aeiouAEIOU]/g, (m) => chars[m]);
}
