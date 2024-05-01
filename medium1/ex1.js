/*
Problem:
-input: an array
-output: an array with elements rotated by 1 position
-rules:
  -if the input is not an array, return undefined
  -if the array is empty return an empty array
  -do not mutate the original array 
  -array can contain any other data type
-questions:
  -validation:
    -how should handle sparse arrays? no need to worry
  -does the copy need to be a deep copy? yes
Example: see below
DS: array
Algo: 
-perform validation on input using guard clauses
  - check to see that input type is an array, if so retur undefined
  - check to see that array is not empty, if so return empty array
-make a copy of the original array using JSON.parse(JSON.stringify())
-shift() the first element and append it to the end of the array using push()
*/

function rotateArray(inputArr) {
  if (!(Array.isArray(inputArr))) return undefined;
  if (inputArr.length === 0) return [];
  
  let returnArr = JSON.parse(JSON.stringify(inputArr));
  
  returnArr.push(returnArr.shift());
  
  return returnArr;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]