// Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(mood) {
  if (mood) {
    return `Today, I am feeling ${mood}`;
  } else return "Today, I am feeling neutral";
}
