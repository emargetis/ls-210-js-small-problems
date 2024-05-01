function buyFruit(arr) {
  let returnArr = [];
  
  arr.forEach(item => {
    for (let idx = 1; idx <= item[1]; idx += 1) {
      returnArr.push(item[0]);
    }
  });
  
  return returnArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]