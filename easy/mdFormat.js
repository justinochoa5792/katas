// Formatting Text on Edabit
// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

function mdFormat(word, style) {
  switch ((word, style)) {
    case (style = "b"):
      return `**${word}**`;
    case (style = "i"):
      return `_${word}_`;
    case (style = "s"):
      return `~~${word}~~`;
    default:
      return "`" + `${word}` + "`";
  }
}
