/*
P:
-in: an integer
-out: an integer
-rules:
  -featured # = odd multiple of 7 with all digits occuring exactly once each
  -largest possible featured # is 9876543201
  -return the the featured number greater than the integer and issue an error message if one is not possible
  -featured # cannot be negative
  -featured # returned must be greater than argument even if arg is featured #
  -validate that arg is supplied and arg is an integer

-questions:
  - can negative numbers be a featured number? no
  - can the argument be a negative number? yes
  - if argument is a featured number, we return next featured number, correct? yes
  - input validation:
    - do we need to check that input is supplied? yes
    - input being an integer? yes
Ex: see below
DS: use a variable assigned to a number and increment it
Algo: 
- validate the argument using a guard clause that calls a helper function
  - if true then return 'invalid'
  - otherwise continue
- declare a variable called featured number
- declare a variable called starting number which is 1 + arg
- check to see if starting number is > 9876543201
  -if so return "There is no possible number that fulfills those requirements."
  -otherwise continue
- iterate from 1 + arg until we find a featured number
  - for each iteration check the following condtions
    -number is greater than 6
    -number is divisible by 7 (num % 7 === 0)
    -number is odd (num % 2 === 1)
    -check to make sure digits are unique (helper function):
      -convert digit to string
      -convert string to array and save as variable
      -use Array.from(new Set [...arrVar]) to get uniques in array
      -check the length of the unique array against original array
        -if same, return true
        -if not return false
    -if all above coditions met then featured number = starting number
- return featured number

*/

function featured(inputNum) {
  if (invalidateArg(inputNum)) return "invalid";

  let featuredNumber;
  let startingNumber = inputNum;

  if (startingNumber >= 9876543201) return "There is no possible number that fulfills those requirements.";

  while (!featuredNumber) {
    startingNumber += 1;
    if (startingNumber < 6) {
      startingNumber = 6;
      continue;
    }  
    if (!(startingNumber % 7 === 0)) continue;
    if (!(startingNumber % 2 === 1)) continue;
    if (!(digitsUnique(startingNumber))) continue;

    featuredNumber = startingNumber;
  }

  return featuredNumber;
}

function invalidateArg(num) {
  if (num === undefined) return true;
  if (!(Number.isInteger(num))) return true;
}

function digitsUnique(num) {
  let numArr = num.toString().split('');
  let uniqueNumArr = Array.from(new Set([...numArr]));

  return numArr.length === uniqueNumArr.length;
}



console.log(featured());           // 'invalid'
console.log(featured("a"));           // 'invalid'
console.log(featured([]));           // 'invalid'
console.log(featured(-1));            //7
console.log(featured(7));            // 21
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
console.log(featured(-9876543200));