function letterCaseCount(string) {
  let lowerCase = string.match(/[a-z]/g) || [];
  let upperCase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerCase.length,
    uppercase: upperCase.length,
    neither: neither.length,
  }
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }