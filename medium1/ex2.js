/*
Problem:
-input: two digits
-output: one digit, which is the first argument rotated accordingly
-rules:
  -rotate the last n digits by one to the left and move the first digit to the end
-questions:
  -input validation:
    -do we need to check that both arguments are supplied? yes, otherwise return undefined;
    -do we need to check that both arguments are integers? yes, otherwise return undefined;
  -can we have negative integers? no because its treated as a single number
Examples: see below
DS: use an array
Algo:
-perform validation on the inputs using guard clauses
  -check to see if both arguments are supplied
  -check to see if both arguments are integers
  -check to see if both arguments are positive
-convert the first number to a string then an array of digits
-splice the number of digits from the end of the array splice((arr.length - 1 - digits), digits) and save as variable
-rotate the cut off portion
-concat it back to the original postion
-convert back to string then number
-return value
*/

function rotateRightmostDigits(number, n) {
  if (invalidateArguments(number, n)) return undefined;
  
  let numArr = number.toString().split('');
  let rotatingPortion = numArr.splice((numArr.length - n), n);
  rotatingPortion.push(rotatingPortion.shift());
  return Number(numArr.concat(rotatingPortion).join(''));
}

function invalidateArguments(number, n) {
  if (number === undefined || n === undefined) return true;
  if (!(Number.isInteger(number)) || !(Number.isInteger(n))) return true;
  if (number < 0 || n < 0) return true;
}

console.log(rotateRightmostDigits(1));
console.log(rotateRightmostDigits(735291, ));
console.log(rotateRightmostDigits(735291, 'a'));      // undefined
console.log(rotateRightmostDigits('abcdef', 2));      // undefined
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917