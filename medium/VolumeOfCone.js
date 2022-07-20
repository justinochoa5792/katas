// Volume of a Cone
// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.

function coneVolume(h, r) {
  let volume = (Math.PI * r * r * h) / 3;
  return volume === 0 ? 0 : Number(volume.toFixed(2));
}
