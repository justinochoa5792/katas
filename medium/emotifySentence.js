// Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

function emotify(str) {
  let emoji = str.split(" ")[2];
  switch (emoji) {
    case "smile":
      return "Make me :D";
    case "sad":
      return "Make me :(";
    case "mad":
      return "Make me :P";
    default:
      return "Make me :)";
  }
}
