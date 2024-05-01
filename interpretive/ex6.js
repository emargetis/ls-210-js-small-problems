/*
Problem:
-input: integer representing grid size
-output: N/A but print a star to the console 
-rules:
  -n is an odd integer greater than or equal to 7
  
  Input = 7
  ---------------------
  Row=1 | stars = 3 | inner spaces = 4 (2 between each star) | outerspaces = 0 (0 leading and 0 trailing)
  Row=2 | stars = 3 | inner spaces = 2 (1 between each star) | outerspaces = 2 (1 leading and 1 trailing)
  Row=3 | stars = 3 | inner spaces = 0 (0 between each star) | outerspaces = 4 (2 leading and 2 trailing)
  Row=4 | stars = 7 | inner spaces = 0 (0 between each star) | outerspaces = 0 (0 leading and 0 trailing)
  
  -iterate from rows 1 to input / 2 exclusive
    - stars = 3
    - total outerspaces = (row * 2) - 2
    - each outerspace = total outerspaces / 2
    - total inner spaces = (input - stars - inner spaces)
    - each inner space = total inner spaces / 2
    
    Input = 9
  ---------------------
  Row=1 | stars = 3 | inner spaces = 6 (3 between each star) | outerspaces = 0 (0 leading and 0 trailing)
  Row=2 | stars = 3 | inner spaces = 4 (2 between each star) | outerspaces = 2 (1 leading and 1 trailing)
  
  -print middle row
  
  -iterate from input / 2 exclusive to 1
  
-questions:
  -input validation:
    -check to make sure the argument is a positive odd integer >= 7? yes
Examples:
DS:
Algo:
-perform validatoin on the input, otherwise return null;
-see rules above
*/

function star(n) {
  if(invalidateInput(n)) return null;
  
  for (let row = 1; row < (n / 2); row += 1) {
    let stars = 3;
    let totalOuterSpaces = (row * 2) - 2;
    let eachOuterSpace = totalOuterSpaces / 2;
    let totalInnerSpaces = (n - stars - totalOuterSpaces);
    let eachInnerSpace = totalInnerSpaces / 2;
    let str = ' '.repeat(eachOuterSpace) + '*' + ' '.repeat(eachInnerSpace) + '*' + ' '.repeat(eachInnerSpace) + '*';
    
    console.log(str);
  }
  
  console.log('*'.repeat(n));
  
  for (let row = Math.floor(n / 2); row >= 1; row -= 1) {
    let stars = 3;
    let totalOuterSpaces = (row * 2) - 2;
    let eachOuterSpace = totalOuterSpaces / 2;
    let totalInnerSpaces = (n - stars - totalOuterSpaces);
    let eachInnerSpace = totalInnerSpaces / 2;
    let str = ' '.repeat(eachOuterSpace) + '*' + ' '.repeat(eachInnerSpace) + '*' + ' '.repeat(eachInnerSpace) + '*';
    
    console.log(str);
  }
  
}

function invalidateInput(n) {
  if (!(Number.isInteger(n))) return true;
  if (n < 7) return true;
  if (n % 2 !== 1) return true;
}

console.log(star(6));
console.log(star(8));
console.log(star('a'));

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *