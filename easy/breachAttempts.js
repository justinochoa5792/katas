// Adaptive Security System
// For each hacker:
// If the hacker's skill is strictly greater than the current security level, the hacker successfully breaches the system.
// Otherwise, the system blocks the attack and learns from it, increasing its security level.
// Each blocked attack increases the security level by a fixed amount.
// Your task is to return the number of successful breaches.
// If there are no hackers, return 0.

function breachAttempts(hackers, securityLevel, increase) {
  let total = [];
  for (let i = 0; i < hackers.length; i++) {
    if (hackers[i] <= securityLevel) {
      securityLevel += increase;
    } else {
      total.push(hackers[i]);
    }
  }
  return total.length;
}
