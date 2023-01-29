// Enharmonic Equivalents
// In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

function getEquivalent(note) {
  switch (note) {
    case "C#":
      return "Db";
      break;
    case "D#":
      return "Eb";
      break;
    case "Gb":
      return "F#";
      break;
    case "Db":
      return "C#";
      break;
    case "Eb":
      return "D#";
      break;
    case "F#":
      return "Gb";
      break;
    case "G#":
      return "Ab";
      break;
    case "Ab":
      return "G#";
      break;
    case "Bb":
      return "A#";
      break;
    case "A#":
      return "Bb";
      break;
  }
}
