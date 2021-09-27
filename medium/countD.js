// How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

function countDs(sentence) {
  return sentence.toLowerCase().match(/d/g).length;
}
