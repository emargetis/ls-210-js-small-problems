/*
There is a queue for the self-checkout tills at the supermarket. Your task is
write a function to calculate the total time required for all the customers to check out!

input
-customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
- n: a positive integer, the number of checkout tills.

output
The function should return an integer, the total time required.

rules
-there is only one queue serving many tills
-the order of the queue never changes
-all test input will be valid
-the front person procees to a till as soon as it becomes
-we are optimizing for the shortest wait total checkout time

ds: input is an arry, create an array where the integers represent the total time at that till
algo:
-create array of tills `tillBank` by filing an array with 0s
-use a while loop to loop through queue until empty
  -unshift the first customer in the queue and save as variable `currentCustomerTime`
  -declare variable for `tillSelected` and set to 0
  -declare variable for `tillSelectedTime` and set to tillBank[0]
  -iterate through the tillBank array
    - if tillBank[idx] + currentCustomerTime < tillSelectedTime then set `tillSelected` to idx and tillSelectedTime to tillBank[idx] + currentCustomerTime
  -add tillBank[idx] += currentCustomerTime
-return the max value from the tillBank using Math.max(...tillBank)

*/


function queueTime(queue, queQuant) {
  let tillBank = Array(queQuant).fill(0);

  while(queue.length > 0) {
    let nextCustomerTime = queue.shift();
    let tillIdxSelected = 0;
    let tillSelectedPreTime = tillBank[0];

    for (let bankIdx = 1; bankIdx < tillBank.length; bankIdx += 1) {
      if (tillBank[bankIdx] + nextCustomerTime < tillSelectedPreTime + nextCustomerTime) {
        tillIdxSelected = bankIdx;
        tillSelectedPreTime = tillBank[bankIdx] + nextCustomerTime;
      }
    }

    tillBank[tillIdxSelected] += nextCustomerTime;
  }

  console.log(tillBank);

  return Math.max(...tillBank);
}

console.log(queueTime([5,3,4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2));
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

console.log(queueTime([2,3,10], 2));
// should return 12

console.log(queueTime([5, 3, 4, 6, 2, 4, 5], 3));
// should return 11

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.


console.log(queueTime([5,3,4], 1) === 12);
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2) === 10);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

console.log(queueTime([2,3,10], 2) === 12);
// should return 12

console.log(queueTime([5, 3, 4, 7, 2, 3], 2) === 12);

function queueTime(customers, numTills) {
  let initializeTills = numTills => {
    let tills = [];
    for (let i = 0; i < numTills; i += 1) {
      tills.push([0]);
    }
    return tills;
  };

  let totalTime = till => till.reduce((sum, time) => sum + time);

  let findTillIndex = tills => {
    let index = 0;
    let minTime = Infinity;
    tills.forEach((tillArray, tillIndex) => {
      if (totalTime(tillArray) < minTime) {
        index = tillIndex;
        minTime = totalTime(tillArray);
      }
    });
    return index;
  };

  let getMaxTime = tills => {
    let maxTime = 0;
    tills.forEach(tillArray => {
      if (totalTime(tillArray) > maxTime) {
        maxTime = totalTime(tillArray);
      }
    });
    return maxTime;
  };

  let tills = initializeTills(numTills);

  customers.forEach(time => {
    let tillIndex = findTillIndex(tills);
    tills[tillIndex].push(time);
  });
  
  console.log(tills);
  console.log(getMaxTime(tills));
  return getMaxTime(tills);
 
}