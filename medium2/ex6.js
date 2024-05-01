/*
P:
-in: integer
-out: an integer which represents the difference between square of sums and sum of squares
-rules:
  -include argument as one of the digits
  -only inclue positive integers
  -return difference between square of sums and sum of squares
  -input validation:
    -arg must be present
    -arg must be an integer
    -arg must be positive

-quests:
  -can the argument be a negative number? yes, but check for it
Ex: see below
DS: variables assigned to #s
Algo:
-validate argument using a guard clause and helper function
  -if helper returns true then return 'invalid argument'
    -check to see if arg === undefined
    -check to see arg is an integer
    -check to see arg is > 0
  -if false continue
-let sumOfInts = 0;
-let sumOfSquares = 0;
-create a for loop that iterates from 1 to the argument inclusive
  - idx**2 and add to sumOfSquares
  - add idx to sumOfInts
-let squareOfSums = sumOfInts ** 2
-return squareOfSums - sumOfSquares
*/

function sumSquareDifference(num) {
  if (invalidateArg(num)) return 'invalid argument';

  let sumOfInts = 0;
  let sumOfSquares = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    sumOfInts += idx;
    sumOfSquares += (idx**2);
  }

  let squareOfSums = sumOfInts**2;

  return squareOfSums - sumOfSquares;
}

function invalidateArg(num) {
  if (num === undefined) return true;
  if (!(Number.isInteger(num))) return true;
  if (num < 1) return true;
}

console.log(sumSquareDifference()); //'invalid argument'
console.log(sumSquareDifference('a')); //'invalid argument'
console.log(sumSquareDifference([])); //'invalid argument'
console.log(sumSquareDifference(1.10)); //'invalid argument'
console.log(sumSquareDifference(0)); //'invalid argument'
console.log(sumSquareDifference(-1)); //'invalid argument'
console.log(sumSquareDifference(-100)); //'invalid argument'
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150