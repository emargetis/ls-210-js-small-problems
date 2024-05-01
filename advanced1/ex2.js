/*
Notes:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

1  4  3
5  7  9
8  2  6


P:
-in: a 2d array representing a 3d matrix
-out: a new 2d array representing 3d matrix transposed
-rules:
  -we cannot mutate the original array
  -we cannot use any external libraries
  -need to validate input, if not valid return string "invalid"
  -subarrays can contain negative number and postive numbers only
-questions:
  -input validation:
    -make sure the outer array contains 3 subarrays? yes
    -make sure innter array contains 3 numbers? yes
    -return invalid
Ex: 
DS:
Algo:
*/

function transpose(matrix) {
  //done in coderpad
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
console.log(transpose(matrix1)) // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix2 = [
  [1, 5, 8],
  [4, "a", 2],
  [3, 9, 6],
];
console.log(transpose(matrix2)) // invalid

const matrix3 = [
  [1, 5, ],
  [4, 7, 2],
  [3, 9, 6],
];
console.log(transpose(matrix3)) // invalid

const matrix4= [
  [2, 0, 0],
  [1, 2, 0],
  [1, 1, 2],
];
console.log(transpose(matrix4)) // invalid [[2, 1, 1], [0, 1, 2], [0, 0, 2]]

const matrix5= [
  [2, 0, 0],
  [-1, 2, 0],
  [-1, -1, 2],
];
console.log(transpose(matrix5)) // invalid [[2, -1, -1], [0, -1, 2], [0, 0, 2]]