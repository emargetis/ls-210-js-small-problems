/*
Problem:
-input: digit
-output: digit
-rules:
  -rotate the number by one to left, then decreas the digits to rotate and then do it again
  -use the rotateRightMostDidgits function from the previous exercise
-questions:
Examples:
DS:
Algo:
*/

function maxRotation(number) {
  if (invalidateArguments(number)) return undefined;
  
  for (let idx = number.toString().length; idx >= 1; idx -= 1) {
    number = rotateRightmostDigits(number, idx);
  }
  
  return number;
}

function rotateRightmostDigits(number, n) {
  let numArr = number.toString().split('');
  let rotatingPortion = numArr.splice((numArr.length - n), n);
  rotatingPortion.push(rotatingPortion.shift());
  return Number(numArr.concat(rotatingPortion).join(''));
}

function invalidateArguments(number) {
  if (number === undefined) return true;
  if (!(Number.isInteger(number))) return true;
  if (number < 0) return true;
}

console.log(maxRotation());      // undefined
console.log(maxRotation('abcdef'));      // undefined
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845