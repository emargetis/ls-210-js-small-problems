/*
Problem: return nth fibonacci number
-input: digit
-output: digit
-rules:
  -use a procedural way to get fibonacci which means use a loop
-questions:
  -input validation:
    -do i need to validate inputs? no need to validate inputs, can always assume argument will be positive integer
Examples: see below
DS: just use variables that point to integers
Algos:
-let fibOne = 0
-let fibTwo = 1
-use for loop to iterate until we reach the desired number exclusive
  -let sum = fibOne + fibTwo
  -fibOne = fibTwo;
  -fibTwo = sum;
-return fibTwo when we do
  

*/

function fibonacci (n) {
  let fibLookup = {};
    
  return ( 
    function fibMemo(n) {  
      if (n <= 2) {
        return 1;
      } else {
        if (fibLookup[n]) {
          return fibLookup[n];
        } else {
          let result = fibMemo(n - 1) + fibMemo(n - 2);
          fibLookup[n] = result;
          return result;
        }
      }
    }
  )(n);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(75));      // 2111485077978050
