/*
Problem:
-input: an integer representing the year
-output: an integer representing the number of Friday 13 days in a year
-rules:
  -we may assume that year is greater than 1752 and that cal will remain in use for foreseeable future
-questions:
  -do we need to do input validation:
    -make sure sure year is supplied? yes, 'invalid'
    -make sure year is an integer? yes
    -make sure year is greater than 1752? yes
Examples: see below
DS: using integers and dates
Algo:
-validate the argument using a guard clause and a helper function
  -check to see if argument is undefined
  -check to make sure argument is an integer usign Number.isInteger
  -check to see if argument is greater than 1752
-create a friday 13 counter variable
-for the input year, loop through every day of the year
  - if the day is a friday and equal to the 13th of the month, increment counter
-return friday 13 counter

- getDate() returns the 
*/

function fridayThe13ths(year) {
  if (invalidateYear(year)) return 'invalid';

  let month = 0;
  let counter = 0;

  while (month <= 11) {
    if ((new Date (year, month, 13)).getDay() === 5) {
      counter += 1;
    }
    month += 1;
  }
  
  return counter;
}

function invalidateYear(year) {
  if (year === undefined) return true;
  if (!(Number.isInteger(year))) return true;
  if (year <= 1752) return true;
}

console.log(fridayThe13ths());      // invalid
console.log(fridayThe13ths("abcd"));      // invalid
console.log(fridayThe13ths([]));      // invalid
console.log(fridayThe13ths(1752));      // invalid
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2