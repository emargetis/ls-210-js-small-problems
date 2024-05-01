/*
Problem: return nth fibonacci number
-input: digit
-output:
-rules:
  -use recursion to return the nth fibonacci number
-questions:
  -input validation:
    -do i need to validate inputs? no need to validate inputs, can always assume argument will be positive integer
Examples: see below
DS: just use variables that have values of 1
Algos:
-create a stopping condition which is when the counter is equal to n
-create variable fibOne and assign to 0
-create variable fibtwo and assign to 1
-

*/

function fibonacci(n, counter = 1, fibOne = 0, fibTwo = 1) {
  
  if (n === counter) {
    return fibTwo;
  } else {
    let sum = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = sum;
    return fibonacci(n, counter + 1, fibOne, fibTwo);
  }
}

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
   return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(75));    