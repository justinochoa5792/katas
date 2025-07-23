// Help Mr. E
// Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

function evenator(str) {
  let punctuation = /[_.,?!]/g;
  let newText = str.replace(punctuation, "");
  return newText
    .split(" ")
    .map((el) => (el.length % 2 == 0 ? el : el.concat(el[el.length - 1])))
    .join(" ");
}
