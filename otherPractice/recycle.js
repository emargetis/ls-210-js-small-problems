// Task
// You will be given a list of objects. Each object has type, material, and
// possibly secondMaterial. The existing materials are: paper, glass, organic,
// and plastic.

// Your job is to sort these objects across the 4 recycling bins according to
// their material (and secondMaterial if it's present), by listing the type's
// of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in
// both of the respective bins
// The order of the type's in each bin should be the same as the order of
// their respective objects was in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

/*
P:
-in: an array of objects
-out: we should log all the bins and their contents to the console
-rules:
  -each object has a type, material and optional second material
  -sort the objects into a recycling bin according to their material and second material
  -if an object has a second material, it should show up in both the primary and secondary material bins
  -bins should be listed in same order as the materials listed above
  -empty bins should be listed in output
  -order in a bin should be same as order of their respective output
  -if format of argument is not right, then return "invalid input"
-qs:
  -do we need to validate the input? yes to All
    -argument is an array
    -array is filled with objects
    -each object needs at least a type and material and a secondary material
Ex: see below
DS:
-collection of bins should be array
-each bin is an array
-lookup object to determine bin index {"paper": 0, "glass": 1, "oranic": 2, "plastic": 3}
Algo:
-initialize bins
-validate input using a helper function
  - check to make input is an array
  - iterate through array to:
    -make sure each element is an object (not including an array)
    -make sure each object contains "type" property and "organic"
-iterate through input
  -check the material type
    - look up bin index using lookup object
    - insert object into bins array
  -ckeck for secondary material type
    - if exists, look up bin index using lookup object
    - insert object into bins array
-return bins array
*/

function sortObjects(inputArr) {
  if (isInvalidInput(inputArr)) return "invalid input";
  
  let bins = [[], [], [], []];
  let binsLookup = {"paper": 0, "glass": 1, "organic": 2, "plastic": 3};

  inputArr.forEach(item => {
    let primaryBinIdx = binsLookup[item["material"]];
    bins[primaryBinIdx].push(item["type"]);

    let secondaryBinIdx = binsLookup[item["secondMaterial"]];
    
    if (secondaryBinIdx >= 0) {
      bins[secondaryBinIdx].push(item["type"]);
    }

  })

  return bins;
}

function isInvalidInput(inputArr) {
  if (!(Array.isArray(inputArr))) {
    return true;
  }

  for (let i = 0; i < inputArr.length; i ++) {
    if (typeof inputArr[i] !== "object" || Array.isArray(inputArr[i])) {
      return true;
    }
    if (!(inputArr[i].hasOwnProperty("type")) || !(inputArr[i].hasOwnProperty("material"))) {
      return true;
    }
  }
}


let input1 = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ];
console.log(sortObjects(input1));
// [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]


// let input3 = {
//   1 : {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   2 : {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   3 : {"type": "amazon box", "material": "paper"},
//   4 : {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// };
// console.log(sortObjects(input3));
// //invalid input

// let input2 = [
//   "abc",
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"},
// ];
// console.log(sortObjects(input2));
// //invalid input


// let input4 = [
//   {"type1": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ];
// console.log(sortObjects(input4));
// //invalid input
  