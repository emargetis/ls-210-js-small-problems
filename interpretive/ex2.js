/*
Problem: print a four-pointed diamond in an n x n grid where n is an odd integer supplied as an argument
-input: an integer
-output: printed diamond
-rules:
  -input is odd integer
  -we may assume input will always be odd integer (no need to do validation)
  -1st row has 1 star in center (4 leading spaces and 4 trailing spaces)
  -2nd row has 3 stars in center (3 leading spaces and 3 trailing spaces)
  -3rd row has 5 stars in center (2 leading spaces and 2 trailing spaces)
  -4th row has 7 stars in center (1 leading space and 1 trailing space)
  -5th row has 9 stars in center (0 leading space and 1 trailing space)
  -6th row has 7 stars in center (1 leading space and 1 trailing space)
-questions:
  - none
Examples: see below
DS: strings
Algo:
input 1
- row 1 | 1 stars | 0 spaces (input - stars)

input 3
- row 1 | 1 stars | 2 spaces (input - stars)
- row 2 | 3 stars | 0 spaces (input - stars)
- row 3 | 1 stars | 2 spaces (input - stars)

-build each row one at a time and then log it
  - increment from 1 to floor(n / 2) inclusive which represents # of rows in top half
    - if row# is 1 -> then create a string which has 1 star and (input - stars) / 2 spaces at the beginning
    - if row# is > 1 AND 2 * row# < input -> create a string which has (2 * row) - 1 stars and (input - stars) / 2 spaces at the beginning
  - create a string which has input * stars and 0 spaces
  - decrement floor(n / 2) inclusive to 1
    - if row# is 1 -> then create a string which has 1 star and (input - stars) / 2 spaces at the beginning
    - if row# is > 1 AND 2 * row# < input -> create a string which has (2 * row) - 1 stars and (input - stars) / 2 spaces at the beginning
*/

function diamond(n) {
  let topRows = Math.ceil(n/2);
  
  for (let rowNum = 1; rowNum < topRows; rowNum += 1) {
      let stars = (2 * rowNum) - 1;
      let spaces = (n - stars) / 2;
      let str = ' '.repeat(spaces) + '*'.repeat(stars);
      console.log(str);
  }
  
  console.log('*'.repeat(n));
  
  let bottomRows = Math.floor(n/2);
  
  for (let rowNum = bottomRows; rowNum > 0; rowNum -= 1) {
    let stars = (2 * rowNum) - 1;
    let spaces = (n - stars) / 2;
    let str = ' '.repeat(spaces) + '*'.repeat(stars);
    console.log(str);
  }
}

function hollowDiamond(n) {
  let topRows = Math.ceil(n/2);
  
  for (let rowNum = 1; rowNum < topRows; rowNum += 1) {
      let stars = (2 * rowNum) - 1;
      let spaces = (n - stars) / 2;
      let innerSpaces = stars - 2 > 0 ? stars - 2 : 0;
      let str = ' '.repeat(spaces) + '*' + ' '.repeat(innerSpaces);
      if (innerSpaces > 0) {
        str += '*';
      }
      console.log(str);
  }
  
  let middleInnerSpaces = n - 2 > 0 ? n - 2 : 0;
  let middleStr = '*' + ' '.repeat(middleInnerSpaces)
  if (middleInnerSpaces > 0) {
    middleStr += '*';
  }
  
  console.log(middleStr);
  
  let bottomRows = Math.floor(n/2);
  
  for (let rowNum = bottomRows; rowNum > 0; rowNum -= 1) {
    let stars = (2 * rowNum) - 1;
    let spaces = (n - stars) / 2;
    let innerSpaces = stars - 2 > 0 ? stars - 2 : 0;
    let str = ' '.repeat(spaces) + '*' + ' '.repeat(innerSpaces);
    if (innerSpaces > 0) {
      str += '*';
    }
    console.log(str);
  }
}


diamond(1);
// // logs
// *


diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

hollowDiamond(1);
// // logs
// *


hollowDiamond(3);
// logs
//  *
// ***
//  *

hollowDiamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *