// Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

function minutesToSeconds(time) {
  let newTime = time.split(":");
  return newTime[1] >= 60
    ? false
    : Number(newTime[0]) * 60 + Number(newTime[1]);
}
