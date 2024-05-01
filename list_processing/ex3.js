function multiplyAllPairs(arr1, arr2) {
  return arr1.flatMap(num1 => {
    return arr2.map(num2 => {
      return num1 * num2;
    });
  }).sort((a,b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]