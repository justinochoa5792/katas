// Get the File Extension
// Write a function that maps files to their extension names.

function getExtension(arr) {
  let ext = arr.map((array) => array.split("."));
  return ext.map((extension) => extension[1]);
}
