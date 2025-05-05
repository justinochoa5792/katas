// Robotic Tattoo Removal
// Your task is to create a function for the robot function that will zap away the Xs and replace them with *s. Any array values that are not Xs must be left alone. Below is what skinScan should look like after the tattoo has been removed.

function robot(skinScan) {
  // code code code
  return skinScan.map((el) => el.map((el) => el.replace("X", "*")));
}
