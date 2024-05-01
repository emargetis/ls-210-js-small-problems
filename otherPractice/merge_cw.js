/*
P: merge to objects
-in: two or more objects
-out: one object reference
-rules:
  - return a new object which combines all of the input objects
  - the values of matching keys are added together
  - all values for keys will be numbers
-questions:
  - no validation necessary
Ex: see below
DS: see below
-array to hold input objects
-an object for return
Algo:
-gather inputs into an array
-declare a variable that points to an object
-iterate through array objects from left to right
  -get array of object keys
  -iterate through array of object keys
    -check to see if object key exists in return object
    -if so, add value to exsiting value of key
    -otherwise add key and value to return object
-return return obj
*/

function combine (...inObj) {
  let mergeObj = {};

  inObj.forEach(obj => { 
    Object.keys(obj).forEach(key => {
      if (mergeObj[key]) {
        mergeObj[key] += obj[key];
      } else {
        mergeObj[key] = obj[key];
      }
    })
  })

  return mergeObj;
}

const objA1 = { a: 10, b: 20, c: 30 };
const objB1 = { a: 3, c: 6, d: 3 };
console.log(combine(objA1, objB1)); // Returns { a: 13, b: 20, c: 36, d: 3 }

const objA2 = { a: -1, b: 20, c: -30 }
const objB2 = { a: 3, c: 6, d: 3 }
console.log(combine(objA2, objB2)); // Returns { a: 2, b: 20, c: -24, d: 3 }

const objA3 = { a: "A", b: 20, c: -30 }
const objB3 = { a: 3, c: 6, d: 3 }
console.log(combine(objA3, objB3)); // Returns { a: "A3", b: 20, c: -24, d: 3 }