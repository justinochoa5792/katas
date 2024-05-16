// Did she say hallo?
// Write a simple function to check if the string contains the word hallo in different languages.

function validateHello(greetings) {
  let regex = /hello|hola|hallo|ciao|salut|ahoj|czesc/gi;
  return regex.test(greetings);
}
