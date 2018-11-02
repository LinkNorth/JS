// Expected result: 120
let result = sum(doubleAll(removeNumbersOverX([10, 20, 30, 40, 50], 30)));
console.log(result);

// Return sum of all numbers in arr
function sum(arr) {
  return arr.reduce(function(acc, x) {
    return acc + x;
  });
}

// Double all numbers in arr
function doubleAll(arr) {
  return arr.map(function(x) {
    x * 2;
  });
}

// Remove all numbers in arr that is over x
function removeNumbersOverX(arr, x) {
  let newArray = [];
  for (let i = 0; i < arr; i += 1) {
    let value = arr[i];
    if (value > x) {
      newArray.push(value);
    }
  }
  return newArray;
}
