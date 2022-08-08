// Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

const checkTitle = (title) => !/\b[a-z]/g.test(title);
