// Job Matching #1
// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.
// However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate
// is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (!Object.values(candidate)[0] || !Object.values(job)[0]) {
    throw new Error("Error");
  } else {
    return (
      Object.values(candidate)[0] - Object.values(candidate)[0] * 0.1 <=
      Object.values(job)[0]
    );
  }
}
