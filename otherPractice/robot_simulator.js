/*
A robot factory's test facility needs a program to verify robot movements.

The robots have three possible movements:

turn right
turn left
advance
Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of {x,y} coordinates, e.g., {3,8}, with coordinates increasing to the north and east.

The robot then receives a number of instructions, at which point the testing facility verifies the robot's new position, and in which direction it is pointing.

The letter-string "RAALAL" means:
Turn right
Advance twice
Turn left
Advance once
Turn left yet again
Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 4} facing west.
*/

/*
P: a robot will start at a particular set of coordinates then follow instructions and we should return the ending coordinates
-in: 
  - a set of cordinates (an array) that represent the starting place [0,0] [X, Y]
  - a second argumet which is the starting direction of the robot (one char string - NESW)
  - a third argument which is a string representing the instructions "RAALAL"
-out: return a set of coordinates in an array [0, 0] and a direction in string NESW
-rules:
  - Directions:
    - R = turn right
    - L = turn left 
    - A = advance 1 coordinate in either NWSE
  - N is moving in the positive y direction
  - E is moving in the positive x direction
  - S is moving in the negative y direction
  - W is moving in the negative x direction
  -Assume all inputs are valid
-questions:

-need some type of tracker that will indicate wether I'll be adding a positive value to the x coordinate or a neg value

Ex: okay
DS: 
- [NESW] will be the directions array
- Use object to look up the direction number sign {N: [0, 1], S: [0, -1], W: [-1, 0], E: [1, 0]}
- keep the coordinates in an array
Algo:
- initialize direction array
- initialize directionSign object
- look up `nextPlaneMovement` using the directionSign object and the current value of `startDir`
- turn directions into an array called directionQueue
- create a while loop that iterates until the queue is empty
  - shift the first direction off the directionQueue
  - if the direction is  "A"
    - add the current value of `nextPlaneMovement` to startCoor
  - if the direction is either "L" or "R" then call helper function changeDirections
    - use current direction to get index of currentDirection
    - if left move one to the left (idx -1)
      - undefined start at end of arrary
    - if right move one ro the right (idx + 1)
      - if undefined start at beginning of array
    -return the direction of the current index
    -look up return value in the object for direction number sign and assign to `nextPlaneMovement`
- look up return direction using the value of `nextPlaneMovement`
- return the current coordinates and the `nextPlaneMovement
*/


function robotTester(currCoor, currDir, instruct) {
  function move(coor, movement) {
    coor[0] += movement[0];
    coor[1] += movement[1];
  }

  function turn(currDir, instruction) {
    let currDirIdx = DIRECTION_ARR.indexOf(currDir);

    if (instruction === "L") {
      if (DIRECTION_ARR[currDirIdx - 1] === undefined) {
        return DIRECTION_ARR[DIRECTION_ARR.length - 1];
      } else {
        return DIRECTION_ARR[currDirIdx - 1];
      }
    } else {
      if (DIRECTION_ARR[currDirIdx + 1] === undefined) {
        return  DIRECTION_ARR[0];
      } else {
        return  DIRECTION_ARR[currDirIdx + 1];
      }
    }
  }

  const DIRECTION_ARR = ['N', 'E', 'S', 'W'];
  const DIRECTION_SIGN = {N: [0, 1], S: [0, -1], W: [-1, 0], E: [1, 0]};
  
  let nextMove = DIRECTION_SIGN[currDir];
  let instructQueue = instruct.split('');

  instructQueue.forEach(instruction => {
    if (instruction === 'A') {
      move(currCoor, nextMove);
    } else {
      currDir = turn(currDir, instruction);
      nextMove = DIRECTION_SIGN[currDir];
    }
  })

  return [currCoor, currDir];
}

console.log(robotTester([7, 3], "N", "RAALAL").toString()  === [[9, 4], "W"].toString()); //true
/* 
Start - [7, 3] _ [0, 1] =
R     - [7, 3] _ [1, 0] = 
A     - [7, 3] + [1, 0] = [8, 3]
A     - [8, 3] + [1, 0] = [9, 3]
L     - [9, 3] _ [0, 1] = [9, 3]
A     - [9, 3] + [0, 1] = [9, 4]
L     - [9, 3] _ [-1, 0] = [9, 4]
*/
console.log(robotTester([0, 0], "E", "ARARRRR").toString() === [[1, -1], "S"].toString()); //true
console.log(robotTester([0, 0], "E", "ARARR").toString() === [[1, -1], "N"].toString()); //true
console.log(robotTester([0, 0], "E", "ARARRRR").toString() === [[1, -1], "S"].toString()); //true
console.log(robotTester([0, 0], "E", "ARARR").toString() === [[1, -1], "N"].toString()); //true
console.log(robotTester([7, 3], "N", 'A').toString() === [[7, 4], "N"].toString());
console.log(robotTester([7, 3], "E", 'A').toString() === [[8, 3], "E"].toString());
console.log(robotTester([7, 3], "S", 'A').toString() === [[7, 2], "S"].toString());
console.log(robotTester([7, 3], "W", 'A').toString() === [[6, 3], "W"].toString());


/*
input
- position:  coordinates X, Y, direction (N, E, S, or W)
- instruction string (string of 'R', 'L', 'A' only)

output
- position:  coordinates X, Y, direction (N, E, S, or W)

rules
- instructions
  - R : rotate 90 deg to R (e.g., N to E)
  - L : rotate 90 deg to L (e.g., N to W)
  - A : move +x, -x, +y, -y by 1 coordinate
- coordinates
  - N : +y
  - E : +x
  - S : -y
  - W : -x
- no input validation

data structure
- 

approach
- initialize array to track various positions after instructions 'positions'
- iterate through instructions letter by letter
  - look-up and execute appropriate instruction based upon position (coord / NESW)
  - add new position to 'positions'

  - return final position in 'positions'
*/

// console.log(robotTester([7, 3, 'N'], "RAALAL").toString()  === [9, 4, 'W'].toString());
/*
position  instruction  after-position
[7,3,N]         R       [7,3,E] (R-turn N>E)
[7,3,E]         A       [8,3,E] (+x)
[8,3,E]         A       [9,3,E] (+x)
[9,3,E]         L       [9,3,N] (L-turn E>N)
[9,3,N]         A       [9,4,N] (+y)
[9,4,N]         L       [9,4,W] (L-turn N>W)
*/
// console.log(robotTester([0, 0, 'E'], "ARARRRR").toString() === [1, -1, 'S'].toString()); //true
// console.log(robotTester([0, 0], "E", "ARARR").toString() === [[1, -1], "N"].toString()); //true

// console.log(robotTester([7,3,'N'],'A').toString() === [7,4,'N'].toString());
// console.log(robotTester([7,3,'E'],'A').toString() === [8,3,'E'].toString());
// console.log(robotTester([7,3,'S'],'A').toString() === [7,2,'S'].toString());
// console.log(robotTester([7,3,'W'],'A').toString() === [6,3,'W'].toString());

// function robotTester(position, instructions) {
//   let positions = [position];

//   let plusX = (position) => [position[0] + 1, position[1], position[2]];
//   let minusX = (position) => [position[0] - 1, position[1], position[2]];
//   let plusY = (position) => [position[0], position[1] + 1, position[2]];
//   let minusY = (position) => [position[0], position[1] - 1, position[2]];

//   let execute = (instruction, lastPosition) => {
//     let newPosition;
//     if (instruction === 'A') {
//       switch (lastPosition[2]) {
//         case 'N':
//           newPosition = plusY(lastPosition);
//           break;
//         case 'E':
//           newPosition = plusX(lastPosition);
//           break;
//         case 'S':
//           newPosition = minusY(lastPosition);
//           break;
//         case 'W':
//           newPosition = minusX(lastPosition);
//           break;
//       }
//     }
//     return newPosition;
//   };
  
//   instructions.split('').forEach(instruction => {
//     console.log(instruction);
//     let lastPosition = positions[positions.length - 1];
//     let newPosition = execute(instruction, lastPosition);
//     positions.push(newPosition);
//   });
//   console.log(positions);
//   return positions[positions.length - 1];
// }

// function turn(direction, currentDir) {
//   let DIRECTIONS = ['N', 'E', 'S', 'W'];
//   let index = DIRECTIONS.indexOf(currentDir);
//   switch (direction) {
//     case 'L':
//       index -= 1;
//       index = index % 4;
//       break;
//     case 'R':
//       index += 1;
//       index = index % 4;
//       break;
//   }
//   return DIRECTIONS[index];
// }