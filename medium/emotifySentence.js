// Emotify the Sentence

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
