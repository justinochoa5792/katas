// Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape

function areaShape(base, height, shape) {
  if (shape === "triangle") {
    return 0.5 * base * height;
  } else return base * height;
}
