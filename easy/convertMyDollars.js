// Currency Conversion
// Using your understanding of converting currencies in conjunction with the preloaded conversion-rates table (CONVERSION_RATES), properly convert your dollars into the correct amount of foreign currency.

function convertMyDollars(usd, currency) {
  // use CONVERSION_RATES object
  let rate = CONVERSION_RATES[currency];
  const startsWithConsonant = !"aeiou".includes(currency[0].toLowerCase());

  if (startsWithConsonant) {
    rate = parseInt(rate, 2);
  }

  return `You now have ${usd * rate} of ${currency}.`;
}
