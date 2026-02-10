// RegExp Fun #1 - When I miss few days of gym
// As can be seen from the funny image above (or am I the only person to find the picture above hilarious?) there is lots of slang. Your task is to define a function gymSlang which accepts a string argument and does the following:

function gymSlang(phrase) {
  const replacements = {
    "i am": "i'm",
    "probably": "prolly",
    "instagram": "insta",
    "do not": "don't",
    "going to": "gonna",
    "combination": "combo",
  };

  // Create regex dynamically from keys
  const regex = new RegExp(
    `\\b(${Object.keys(replacements).join("|")})\\b`,
    "gi",
  );

  return phrase.replace(regex, (match) => {
    const lowerMatch = match.toLowerCase();
    const replacement = replacements[lowerMatch];

    // Capitalize first letter if original word starts with uppercase
    if (match[0] === match[0].toUpperCase()) {
      return replacement[0].toUpperCase() + replacement.slice(1);
    }

    return replacement;
  });
}
