// Expected result: 120
debugger;
let filter = removeNumbersOverX([10, 20, 30, 40, 50], 30);
let double = doubleAll(filter);
let result = sum(double);
console.log(result);

// Return sum of all numbers in arr
function sum(arr) {
  return arr.reduce(function(acc, x) {
    return acc + x;
  });
}

// Double all numbers in arr
function doubleAll(arr) {
  let result =  arr.map(function(x) {
    return x * 2;
  });
  return result;
}

// Remove all numbers in arr that is over x
function removeNumbersOverX(arr, x) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    let value = arr[i];
    if (value <= x) {
      newArray.push(value);
    }
  }
  return newArray;
}
