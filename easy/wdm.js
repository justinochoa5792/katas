// Wise drunk man
// However, his talk was not continuous as it was frequently interrupted by an involuntary contractions  'puke' and 'hiccup' . Now i am hiring you to clean up his 'puke' and 'hiccup'  and tell me the old man's wisdom words.
// Because drunk man also needs to take a pause and take a deep breath, you have to remove those pauses (redundant/unnecessary spaces).

function wdm(talk) {
  return talk
    .split(" ")
    .filter((el) => el !== "")
    .filter((el) => el !== "hiccup")
    .filter((el) => el !== "puke")
    .join(" ");
}
