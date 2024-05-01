/*
Problem:
-input: string
-output: object with 3 properties 
-rules:
  - 3 properties are:
    -% of characters that are uppercase
    -% of characters that are lowercase
    -% of characters that are neither (including spaces)
  -output is expressed with two digits
  -assume string will always contain at least one character
  
-questions:
  -input validation:
    -do any input validation? checking its a straing, etc
Examples:
DS:
Algo:
  -save length of input as a variable `length`
  -use str.match (regex) to find # of lowercase
  -use str.match (regex) to find # of uppercase
  -use str.match (regex) to find # of neither
  -return object that does calcs in the property values
  
*/


function letterPercentages(inputStr) {
  let length = inputStr.length;
  let uppercase = ((inputStr.replace(/[^A-Z]/g,'').length / length) * 100).toFixed(2);
  let lowercase = ((inputStr.replace(/[^a-z]/g,'').length / length) * 100).toFixed(2);
  let neither = ((inputStr.replace(/[^a-zA-Z]/g,'').length / length) * 100).toFixed(2);
  
  return {
    lowercase,
    uppercase,
    neither
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

