// Make the small words big!
// Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.

function smallWordHelper(sentence) {
  return sentence
    .split(" ")
    .map((el) =>
      el.length <= 3 ? el.toUpperCase() : el.replace(/[aeiou]/gi, "")
    )
    .join(" "); // your code here
}
