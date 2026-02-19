// Image Files Only
// Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

function imageFilter(arr) {
  return arr.map((file) => {
    const match = file.match(/^(.+)\.(jpg|gif|png|tiff|svg|bmp)$/i);
    return match ? [file, match[1], match[2]] : null;
  });
}
