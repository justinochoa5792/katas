// Deutschstunde
// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:
// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"

function derDieDas(wort) {
  //Du kannst es schaffen!
  let vowelCount = wort.match(/[aeiouäöü]/gi);

  if (wort == "" || !vowelCount || vowelCount.length < 2) {
    return `das ${wort}`;
  } else if (vowelCount.length > 3) {
    return `der ${wort}`;
  } else {
    return `die ${wort}`;
  }
}
