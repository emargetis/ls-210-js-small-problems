/*
Problem: write a function that calculates and returns the index of the first Fibonacci number that has the # of digits specified by the argument
-input: bigint
-output: bigint representing index of first fibonacci number
-rules:
  - use big ints
  - first two digits of fibonacci are 0 and 1 (problem states 1 and 1 but it makes more sense to start at 0)
  -argument will always be an integer greather than or equal to 2;
-questions:
Examples: see below
DS: bigints
Algo:
-declare an index variable and set equal to 1;
-declare a variable that is firstFib and set equal to 0
-declare a variable that is secondFib and set equal to 1;
-loop through fibonacci sequence using a while loop that checks to see if second number is desired length
  -create a sum variable that is firstFib + secondFib
  -reassign firstFib to Second Fib
  -reassign secondFib to sum
  -increment the index value
-return the value of the index
*/

function findFibonacciIndexByLength(length) {
  let index = 1n;
  let firstFib = 0n;
  let secondFib = 1n;
  
  while (BigInt(String(secondFib).length) !== length) {
    let sum = firstFib + secondFib;
    firstFib = secondFib;
    secondFib = sum;
    index += 1n;
  }
  
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.