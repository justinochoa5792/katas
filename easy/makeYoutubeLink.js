// Youtube URL
// If we insert the first link in the iframe, it works, but another do not work.

function makeYoutubeLink(str) {
  // your code here
  let splitSlash = str.split("/");
  let splitEqual = str.split("=");

  return splitEqual.length >= 2
    ? `https://www.youtube.com/embed/${splitEqual[splitEqual.length - 1]}`
    : `https://www.youtube.com/embed/${splitSlash[splitSlash.length - 1]}`;
}
