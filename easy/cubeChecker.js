// cubeCheckerFind out whether the shape is a cube
// To find the volume (centimeters cubed) of a cuboid you use the formula:

function cubeChecker(volume, side) {
  return volume <= 0 || side <= 0 || volume !== side ** 3 ? false : true;
}
