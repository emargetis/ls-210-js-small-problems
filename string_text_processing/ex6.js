function staggeredCase(string) {
  return string.split('')
               .map((letter, idx) => {
                  if (!(idx % 2)) {
                    return letter.toUpperCase();
                  } else { 
                    return letter.toLowerCase();
                  }
                })
               .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"