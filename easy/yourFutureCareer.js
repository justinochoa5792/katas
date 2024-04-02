// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
// This code is a mess! Would you help Pac to fix the code in time?

//Original
// function {
// 	var : Math.random()
// 		if (career <= 0.32) {
// 			return = FrontEnd Developer
// 		 else if (career <= 0.65)
// 			return : BackEnd Developer,
// 		} else {
// 			return 'Full-Stack Developer'
// 		}
// yourFutureCareer();

// The Fix
function yourFutureCareer() {
  var career = Math.random();
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  }
}
