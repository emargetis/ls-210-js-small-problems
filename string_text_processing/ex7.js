function staggeredCase(string) {
  let upper = true;
  
  return string.split('')
               .map((letter) => {
                  if (/[^a-z]/i.test(letter)) {
                    return letter;
                  } else if (upper) {
                    upper = false;
                    return letter.toUpperCase();
                  } else if (!upper) {
                    upper = true;
                    return letter.toLowerCase();
                  }
                })
               .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"