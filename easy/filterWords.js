// Regex Failure - Bug Fixing #2
// You are given a string phrase containing some potentially offensive words such as "bad," "mean," "ugly," "horrible," and "hideous." Timmy wants to replace these words with the word "awesome" to make the message more positive. Your task is to implement a function, that replaces all occurrences of these offensive words with "awesome" in the input string phrase.

function filterWords(phrase) {
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, "awesome");
}
