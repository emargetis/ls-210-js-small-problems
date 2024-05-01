/*
P:
-in: an array with at least 2 elements
-out: nothing because we are using mutation
-rules:
  -sort array in ascending order
  -compare two elements in array
  -stop iterating the first time we make a pass throug the array
-quests:
  - will the elements always be the same type? yes
  - consider sparse arrays no
  - do we care if we mutate the original array? yes we want to mutate the array
  - do we need to consider arrays populated with data types other than string and number? no
Ex: see below
DS: arrays
Algo:
  - create a boolean variable which is set to false called switches
  - create a do while loop with switches being the condition
    - in each iteration, iterate through the array from idx 0 to inx length - 2
      -compare elements at idx and idx + 1
        - if idx + 1 < idx then swap values and set switch = true
        - else continue to next iteration
*/

function bubbleSort(arr) {
  let swap;
  let iterations = 1;

  do {
    swap = false;
    for (let idx = 0; idx < arr.length - iterations; idx += 1) {
      if (arr[idx + 1] < arr[idx]) {
        [ arr[idx + 1], arr[idx] ] = [arr[idx], arr[idx + 1]];
        swap = true;
      }
    }

    iterations += 1;
  } while (swap);
}



const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]