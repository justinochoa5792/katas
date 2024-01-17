// Pirates!! Are the Cannons ready!??
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = (gunners) => {
  //your solution here
  return Object.values(gunners).includes("nay")
    ? "Shiver me timbers!"
    : "Fire!";
};
