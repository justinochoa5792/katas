// Hot Pics of Danny DeVito!
// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:
// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

function preventDistractions(str) {
  return str.includes("anime") ||
    str.includes("meme") ||
    str.includes("vines") ||
    str.includes("roasts") ||
    str.includes("Danny DeVito")
    ? "NO!"
    : "Safe watching!";
}
