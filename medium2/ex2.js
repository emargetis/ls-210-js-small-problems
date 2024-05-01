/*
Problem:
-input: 3 numbers
-output: string with values of either "equilateral", " isosceles", or "scalene" or "invalid"
-rules:
  -equilateral: all three sides ===
  -isosceles: two sides === while third is diff
  -scalene: all three sides are !==
  -Valid triangles:
    -sum of two lengths of the two shortest sides must be greater than the third
    -every side must have a length greater than 0
-questions:
  -input validation:
    -make sure all three args are provided? yes
    -making sure all three args are numbers? yes
    -how do we handle extra arguments? just ignore them
Example: see below
DS: keep numbers as is and assign to variables 
Algo:
-perform input validation on each argument using guard clauses (helper function) (if any of following are true return "invalid"):
  -check to make sure argument is provided (!== undefined) else return true
  -check to make sure argument is a number else return true
  -check to make sure argument is greater than 0 else return true
-check that sum of two shortest sides is greater than 3rd (helper function)
  -put arguments into an array
  -sort array from smallest to largest
  -write a comparison that returns 'invalid' if two smallest are not > largest
-write a an if statment that determines triangle type (extract to helper function)
  - if all of the sides equal each other then return "equilateral"
  - if two of the sides qual each other and the third does not then return "isosceleles"
  - if none of the sides are eqaul each other then return "scalene"
*/

function triangle(s1, s2, s3) {
  if (invalidateArg(s1)) return "invalid";
  if (invalidateArg(s2)) return "invalid";
  if (invalidateArg(s3)) return "invalid";

  if (illegalSides(s1, s2, s3)) return "invalid";

  return determineTriangleType(s1, s2, s3);
}

function invalidateArg(side) {
  if (side === undefined) return true;
  if (typeof side !== "number") return true;
  if (side <= 0) return true;
}

function illegalSides(...sides) {
  sides.sort((a, b) => a - b);

  return (sides[0] + sides[1]) <= sides[2];
}

function determineTriangleType(s1, s2, s3) {
  if (s1 === s2 && s2 === s3 && s1 === s3) {
    return "equilateral";
  } else if (s1 === s2 && s1 !== s3 || s1 === s3 && s1 !== s2 || s3 === s2 && s1 !== s3) {
    return "isosceleles";
  } else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
    return "scalene";
  } else {
    "not determined";
  }
}


//input validation
console.log(triangle()); //invalid
console.log(triangle(3)); // invalid
console.log(triangle(3, 2));           // "invalid"
console.log(triangle(3, 2));           // "invalid"
console.log(triangle(3, 2, 'a'));           // "invalid"
console.log(triangle('a', 2, 3));           // "invalid"

//does not meet triangle criteria
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"