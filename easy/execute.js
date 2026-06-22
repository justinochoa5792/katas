// Execute me nTimes
// Find a way to execute the action n times in parallel, such that the sample tests complete under the 12 second time limit imposed by Codewars. The submission tests will also test for similar scenarios.

async function execute(action, nTimes) {
  return Promise.all(Array.from({ length: nTimes }, () => action()));
}
