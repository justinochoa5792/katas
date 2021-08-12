// Assign Person to Occupation
// You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.

function assignPersonToJob(names, jobs) {
  return Object.assign(...names.map((v, i) => ({ [v]: jobs[i] })));
}
