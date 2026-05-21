// How far will I go?
// You have recently discovered that horses travel in a unique pattern - they're either running (at top speed) or resting (standing still).
// Here's an example of how one particular horse might travel:
// The horse Blaze can run at 14 metres/second for 60 seconds, but must then rest for 45 seconds.
// After 500 seconds Blaze will have traveled 4200 metres.
// Your job is to write a function that returns how far a horse will have traveled after a given time.

function travel(totalTime, runTime, restTime, speed) {
  const cycleTime = runTime + restTime;

  // Number of complete cycles
  const fullCycles = Math.floor(totalTime / cycleTime);

  // Remaining time after full cycles
  const remainingTime = totalTime % cycleTime;

  // Horse can only run for at most runTime seconds
  const extraRunTime = Math.min(remainingTime, runTime);

  // Total running time
  const totalRunTime = fullCycles * runTime + extraRunTime;

  // Distance traveled
  return totalRunTime * speed;
}
