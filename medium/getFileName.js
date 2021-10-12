// Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(path) {
  let strg = path.split("/");
  return strg.pop();
}
