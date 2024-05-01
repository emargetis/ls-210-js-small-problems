let numConversion = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function wordToDigit(string) {
  return string.replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi, 
  (match) => numConversion[match.toLowerCase()]);
}



console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."