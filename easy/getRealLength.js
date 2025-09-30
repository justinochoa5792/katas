// Count of codepoints in a UTF-16 string
// In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

function getRealLength(string) {
  return Array.from(string).length; // Fix me !
}
