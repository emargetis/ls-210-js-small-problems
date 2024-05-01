/*
Problem: given an integer n that represents a number of switches, toggle 
  switches by increasing amounts for n repetitions and return array of switches
  that are still on after the repetitions
-input: an integer n
-output: array representing the number of switches turned on still
-rules:
  -number of lights equals n
  -start at 1 and go to n repetitions
  -toggle means turn switch on that was off, vice-versa
  -input validation:
    -does the argument need to be a postive integer? if not, return null
    -if input type is not a integer? if not, return null
  -output:
    -array of numbers
-Example: see below
-Data: array to repesent switches
-Algo:
  - validate input using guard clause helper function
    - make sure argument is not undefined
    - make sure argument is greather than 0
    - make sure argument is an integers
  - create an array that represents the switches
    - use the fill method for the array, to create an array of falses with n spaces (false = off and true = on)
  - iterate from 1 to n (inclusive) with incrementer known as repetition
    - iterate through the array
      - if index + 1 of array is divisible by the repetion value then toggle the switch
  - map the array of switches
    - if the switch is on (=== true) return a value of the current index + 1
    - otherwise return false;
  - filter the array of switches to numeric values or non-falses
  - return the switch array    
*/


function lightsOn(switches) {
  if (invalidateInput(switches)) return null;
  
  let switchBank = Array(switches).fill(false);
  
  for (let rep = 1; rep <= switches; rep += 1) {
    toggleLights(switchBank, rep);
  }
  
  return filterOnLights(switchBank);
  
}

function toggleLights(switchBank, rep) {
  switchBank.forEach((light, idx, switchBank) => {
    if ((idx + 1) % rep === 0) {
      switchBank[idx] = !light;
    }
  });
}

function filterOnLights(switchBank) {
  return switchBank.map((light, idx) => {
                      if (light) {
                        return idx + 1;
                      } else {
                        return light;
                      }
                    }).filter(Boolean); 
}

function invalidateInput(switches) {
  if (switches === undefined) return true;
  if (!(Number.isInteger(switches))) return true;
  if (switches < 1) return true;
}

console.log(lightsOn());       // null
console.log(lightsOn(-1));        // null
console.log(lightsOn(0));         // null
console.log(lightsOn("1"));       // null
console.log(lightsOn(3));        // [1] -> 1,2,3 -> 1,3 -> 1
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]