// Grasshopper - If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

//Old
// function checkAlive (health) {
//     if () {
//       health < 0
//       return false
//     } else () {
//       return true
//     }
//   }

//fixed
function checkAlive(health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}
