// Simple Fun #40: Timed Reading
// Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.

function timedReading(maxLength, text) {
  //coding and coding..
  let wordLength = text
    .split(" ")
    .map((el) => (!el.match(/[a-z]/gi) ? el : el.match(/[a-z]/gi).join("")));
  return wordLength.filter((el) => el.length <= maxLength).length;
}
