// Do you speak "English"?
// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
  //write your code here
  let regex = /english/i;
  return regex.test(sentence);
}
