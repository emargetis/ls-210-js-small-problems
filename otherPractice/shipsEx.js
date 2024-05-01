/*

Practice problem: 4:08pm - 5:19pm 67 mins
You have a 5 by 5 grid with multiple ships that should not touch. Count the number of ships on the board. 
Ships are represented by 'S'. There should be at least one space between two ships. A ship must span two or more rows/columns in one direction.

[P]
Input: multi-dimensional array
Output: integer that represents the amount of ships that don't touch each other
Rules:
- one ship can span two or more rows
- one ship can span two or more columns
HOW TO COUNT Ships
- if an 'S' is followed by an empty string or undefined, increase counter by 1
- if there's an `S` in the current subArray index and the next subArray same index don't increment


[E]
[D]
- strings, arrays, nested arrays
1. identify what a ship is
2. iterate through the array
3. iterate through each subarray
4. count the amount of Ss that have a space on either side
5. return that number

[A]
CREATE function `countShips` and it takes one parameter `array`
CREATE a local variable `ship` and assign it `S`
CREATE local variable `counter` and assign it to zero
ITERATE through the array
  ITERATE through each element/subarray
    CREATE local variable called `previousElement` and assign it the index - 1 of the `array`
    CREATE local variable called `currentElement` and assign it the index of the array
    CREATE local variable called `nextElement` and assign it the current index + 1 of the array
    IF `nextElement` is equal to empty strings of "undefined"

    AND currentElement is not in the nextSubarray at the same index, or next subArray is `undefined` increment counter;
RETURN `counter`
*/

function countShips(array) {
  let ship = 'S';
  let counter = 0;
  array.forEach((row, indexOne) => { // subarrays
    row.forEach((element, indexTwo) => { // elements of each subarray
      let previousElement = row[indexTwo - 1];
      let currentElement = element;
      let nextElement = row[indexTwo + 1];

      if (!nextElement) {
        if (currentElement === ship) {
          let nextRow = array[indexOne + 1];

          if (nextRow === undefined || !(currentElement === nextRow[indexTwo])) {
            counter++;
            console.log('counted, ', indexOne, indexTwo);
          }
      }
    }})
  })
  return counter;
}

console.log(countShips([
                        ['S', '', '', '', ''],
                        ['S', '', '', '', ''],
                        ['S', 'S', '', '', ''],
                        ['S', '', '', '', ''], 
                        ['S', '', 'S', 'S', 'S']
                        
                        ])); //returns 5 but should be invalid


let board = [
  ['S', 'S', '', 'S', ''],
  ['', '', '', '', ''],
  ['S', '', '', 'S', ''],
  ['', '', '', 'S', ''],
  ['S', 'S', '', 'S', ''],
]; // 5

console.log(countShips(board));

/**
 * 
R
Vertical ship - same column index, no space between
Horizontal ship - same row index, no space between

D
Array

A
For each row of the board,
    For each column of the row,
        If the left and top are NOT ships, but the current one is, 
            add a ship and continue
 * 
 */
function isShip(row, col) {
  if (row === undefined) return false;
  return row[col] === 'S';
}

function addShips() {
  let ships = 0;

  for (let i = 0; i < board.length; i++) {
      let row = board[i];
      let top = board[i - 1];

      for (let col = 0; col < row.length; col++) {
          let left = col - 1;
          
          if(isShip(row, col) && !isShip(top, col) && !isShip(row, left)) {
              ships += 1;
          }
      }
  }

  return ships;
}


