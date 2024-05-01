function swapCase(string) {
  let newString = '';
  
  for(let idx = 0; idx < string.length; idx += 1) {
    if (string[idx].toLowerCase() === string[idx]) {
      newString += string[idx].toUpperCase();
    } else {
      newString += string[idx].toLowerCase();
    }
  }
  
  return newString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"