// How many e-mails we sent today?
// Write a function that will return the integer number of e-mails sent in the percentage of the limit.

function getPercentage(sent, limit) {
  // write code here
  limit = !limit ? 1000 : limit;
  return sent >= limit
    ? "Daily limit is reached"
    : sent == 0
    ? "No e-mails sent"
    : `${Math.floor((sent / limit) * 100)}%`;
}
