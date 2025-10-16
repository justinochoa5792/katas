// The Ladies of ENIAC
// Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!
// To keep: only alpha characters, space characters and exclamation marks.
// To remove: numbers and these characters: %$&/£?@

function radLadies(name) {
  return name.replace(/[\d%$&/£?@]/gi, "").toUpperCase(); // reveal the rad ladies of ENIAC!
}
