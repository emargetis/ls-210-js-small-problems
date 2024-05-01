/*
You have a 5 by 5 grid with multiple ships that do not touch. Count the number of ships on the board. Ships are represented by 'S'. There is at least one space between two ships. One ship can span two or more rows/columns in one direction.


[' ', ' ', ' ', ' ', ' ',
 ' ', ' ', ' ', ' ', ' ', 
 ' ', ' ', ' ', ' ', ' ', 
 ' ', ' ', ' ', ' ', ' ', 
 ' ', ' ', ' ', ' ', ' ']

Problem: count the number of ships in a 5x5 grid
-in: an array representing a 5x5 grid
-out: a number representing the number of ships on a board
-rules:
  -ships are represented by 'S' (case sensitive)
  -once space between two ships
  -one ship can span to or more spaces in one direction
  -if ships touch, return invalid
  -ship must be two or more, if not return invali
-Qs:
  -can the array contain values other than " " and 'S' and do we need to validate that? No
  -does case of the 'S' matter? No
  -how do we treat diagonals? they have a space betweeen them if there is nothing horizontal or vertical
  -do we need to check that ship doesn't span multiple directions? which is basically the same thing as ships touching? Yes
  -can a ship span one space? no
Examples: see below
DS: use array to hold board
Algo:
-create a function `countShips` that takes an array representing a board
-declare an array called spacesTaken which keeps track of coordinates occupied by S

-populate spacesTaken using a forEach loop
  -push [Math.floor(idx / 5) + 1, (idx % 5) + 1]
    [[row, column]]
    [[1,1], [2,1], [3,1], [3,2], [4,1], [5,1], [5, 3], [5, 4], [5, 5]] //invalid

-check for invalid boards (helper function)
  -for each occupied space, get a list of adjacent occupied spaces (either same row and 1 + column OR row + 1 and column)
      for [3,2] then [[2,1], [3,1], [4,1]]
    -if more than one of the spaces in the list share the same row and more than one in the list share the
      same column, return false

-declare variable called keepRemoving and set to true
  -create a while loop with condition keep removing
    -declare a removeCount variable and set to 0
    -remove first element of array and keep value called `last removed` and increment removeCount
    -iterate through array from left to right
      -remove all other elements that are either same row and column + 1 or same column + 1 then assign this to `last removed` and increment removeCount
      -if removecount < 1 then return 'invalid board'
    -increment shipCount by 1
    -if array.length === 0 then keepRemoving is false
-return shipCount

*/

// //First Attempt
// function countShips(boardArr) {
//   let spacesTaken = [];

//   boardArr.forEach((space, idx) => {
//     if (space === 'S') {
//       spacesTaken.push([Math.floor(idx / 5) + 1, (idx % 5) + 1])
//     }
//   });

//   if (!(isValidBoard(spacesTaken))) return 'invalid';

//   return getShipCount(spacesTaken);
// }

// function getShipCount(spacesTaken) {
//   let shipCount = 0;
//   let keepRemoving = (spacesTaken.length !== 0);

//   while (keepRemoving) {
//     let lastRemoved = spacesTaken.splice(0, 1);
//     let piecesRemoved = 1;
//     let findNextPiece = true;

//     while (findNextPiece) {
//       findNextPiece = false;
//       for (let idx = 0; idx < spacesTaken.length; idx += 1) {
//         if (spacesTaken[idx][0] === lastRemoved[0][0] && spacesTaken[idx][1] === lastRemoved[0][1] + 1 //same row diff col
//             || spacesTaken[idx][1] === lastRemoved[0][1] && spacesTaken[idx][0] === lastRemoved[0][0] + 1) { //same col diff row
//           lastRemoved = spacesTaken.splice(idx, 1);
//           piecesRemoved += 1;
//           findNextPiece = true;
//           break;
//         }
//       }
//     }

//     if (piecesRemoved < 2) return 'Invalid ship';
//     shipCount += 1;
//     keepRemoving = (spacesTaken.length !== 0);
//   }

//   return shipCount;
// }



// function isValidBoard(spacesTaken) {
//   return spacesTaken.every(space => {
//     let sameRowAdjCol = spacesTaken.filter(otherSpace => {
//       if (otherSpace[0] === space[0] && otherSpace[1] === space[1] + 1
//           || otherSpace[0] === space[0] && otherSpace[1] === space[1] - 1) {
//           return true
//       }
//     })

//     let sameColAdjRow = spacesTaken.filter(otherSpace => {
//       if (otherSpace[1] === space[1] && otherSpace[0] === space[0] + 1
//           || otherSpace[1] === space[1] && otherSpace[0] === space[0] - 1) {
//           return true
//       }
//     })

//     if (sameRowAdjCol.length > 0 && sameColAdjRow.length > 0) return false;
//     return true;
//   })
// }


//Second Attempt
function countShips(board) {
  let shipCount = 0;
  const ship = 'S';
  
  for (let idx = 0; idx < board.length; idx += 1) {
    if (board[idx] === ship) {
      
      if ((!aboveEmpty(board, idx) || !belowEmpty(board, idx)) && 
          (!rightEmpty(board, idx) || !leftEmpty(board, idx))) return 'invalid board - ships not separated';
      
      if (aboveEmpty(board, idx) && leftEmpty(board, idx)) {
        shipCount += 1;
        
        if (belowEmpty(board, idx) && rightEmpty(board, idx)) {
          return 'invalid board - lone piece of ship';
        }
      }
    }
  }
  
  return shipCount;
  
  function aboveEmpty(board, idx) {
    let spaceAbove = board[idx - 5];
    return spaceAbove === undefined || spaceAbove === " ";
  }
  
  function leftEmpty(board, idx) {
    let spaceLeft = board[idx - 1];
    return spaceLeft === undefined || spaceLeft === " " || (idx % 5 === 0);
  }
  
  function belowEmpty(board, idx) {
    let spaceBelow = board[idx + 5];
    return spaceBelow === undefined || spaceBelow === " ";
  }
  
  function rightEmpty(board, idx) {
    let spaceRight = board[idx + 1];
    return spaceRight === undefined || spaceRight === " " || (idx + 1) % 5 === 0;
  }
  
}



console.log(countShips([' ', ' ', ' ', ' ', ' ',
                        'S', ' ', ' ', ' ', ' ', 
                        'S', 'S', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' '])); //invalid

console.log(countShips(['S', ' ', ' ', ' ', ' ',
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' '])); //1

console.log(countShips([' ', 'S', ' ', ' ', ' ',
                        ' ', 'S', ' ', ' ', ' ', 
                        ' ', 'S', ' ', ' ', ' ', 
                        ' ', 'S', ' ', ' ', ' ', 
                        ' ', 'S', ' ', ' ', ' '])); //1

console.log(countShips(['S', ' ', ' ', ' ', ' ',
                        'S', ' ', ' ', ' ', ' ', 
                        'S', 'S', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', 'S', 'S', 'S'])); //invalid

console.log(countShips(['S', 'S', ' ', ' ', ' ',
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' '])); //1

console.log(countShips([' ', ' ', ' ', ' ', ' ',
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', 'S', ' ', ' '])); //invalid

console.log(countShips([' ', ' ', ' ', ' ', ' ',
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', ' ', ' ', ' ', 
                        ' ', ' ', 'S', ' ', ' ', 
                        ' ', ' ', 'S', ' ', ' '])); //1

console.log(countShips(['S', ' ', ' ', ' ', ' ',
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', ' ', ' ', ' ', 
                        'S', ' ', 'S', 'S', 'S'])); //2  [[1,1], [2,1], [3,1], [5, 3], [5, 4], [5, 5]]

console.log(countShips([' ', ' ', ' ', ' ', ' ',
                        ' ', 'S', ' ', ' ', ' ', 
                        ' ', 'S', ' ', 'S', 'S', 
                        ' ', 'S', ' ', ' ', ' ', 
                        ' ', ' ', 'S', 'S', 'S'])); //3

console.log(countShips(['S', ' ', 'S', 'S', ' ',
                        'S', ' ', ' ', ' ', ' ', 
                        ' ', 'S', ' ', 'S', 'S', 
                        ' ', 'S', ' ', ' ', ' ', 
                        ' ', ' ', 'S', 'S', 'S'])); //5