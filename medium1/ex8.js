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

function fibonacci(n) {
  let fibOne = 0
  let fibTwo = 1
  
  for (let idx = 1; idx < n; idx += 1) {
    let sum = fibOne + fibTwo
    fibOne = fibTwo;
    fibTwo = sum;
  }
 
 return fibTwo;
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050