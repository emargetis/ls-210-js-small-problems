/*
Problem:
-input: 3 integers representing angle degrees
-output: string representing triangle classification - 'right', 'acute', 'obtuse' or 'invalid'
-rules:
  - right angle = one has exactly 90 degress
  - acute = all three angles are less than 90
  - obtuse = one angle greater than 90
  - to be valid:
    - sum of all three angles must be exactly 180 degrees
    - every angle must be greater than 0
  -assume all angles have integer values and that all args are in degrees
-questions:
  -input validation:
    - do we need to validate that all arguments are supplied? yes
    - do we need to check the data type of all arguments? yes
Examples: see below
DS: use an array
Algo:
-perform validation on arguments (one at a time) using guard clauses (helper function that returns true if invalid then return string "invalid"):
  - the argument is supplied (!== undefined)
  - the argument is an integer data type
  - the argument is greater than 0
-put the angles into a single array  and pass to helper function that returns angle type
  -use ... to put args into an array
  -check to make sure sum of angles is 180, otherwise return "invalid"
  -use some to check that an angle is 90 degress, if so return "right"
  -use some to check that an angle is > 90, if so return "obtuse"
  -use some to check that every angle is less than 90 degrees, if so return "actue" or else
*/

function triangle (a1, a2, a3) {
  if (invalidateArgument(a1)) return 'invalid';
  if (invalidateArgument(a2)) return 'invalid';
  if (invalidateArgument(a3)) return 'invalid';

  return determineAngleType(a1, a2, a3);
}

function determineAngleType(...angles) {
  if (angles.reduce((sum, ang) => sum + ang) !== 180) return 'invalid';
  if (angles.some(ang => ang === 90)) return 'right';
  if (angles.some(ang => ang > 90)) return 'obtuse';
  if (angles.every(ang => ang < 90)) return 'acute';

  return 'not classified'
}

function invalidateArgument(angle) {
  if (angle === undefined) return true;
  if (!(Number.isInteger(angle))) return true;
  if (angle <= 0) return true;
}

console.log(triangle()); // "invalid"
console.log(triangle(60)); // "invalid"
console.log(triangle(60, 120)); // "invalid"
console.log(triangle(60, -9, 120)); // "invalid"
console.log(triangle("a", 90, 90)); // "invalid"
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"