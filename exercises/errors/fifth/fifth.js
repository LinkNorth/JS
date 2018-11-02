/* 
 * There is a bug in this code. Fix it!
 * You're allowed to change code here, but don't just remove everything and start from scratch.
 * Make sure you understand why the bug occurs (there may be more than one).
 * Expected result should be:
 * Mean: 5.5
 * Median: 3.5
 * Mode: 4
 */
let arr = [1, 4, 4, 19, 3, 2];
console.log("Mean: " + mean(arr))
console.log("Median: " + median(arr))
console.log("Mode: " + mode(arr));

function getSum(arr) {
  let sum = 0;

  while(arr.length) {
    sum += arr.pop();
  }
  return sum;
}

function mean(arr) {
  let sum = getSum(arr);
  return sum / arr.length;
}

function median(arr) {
  arr.sort(function(a, b) {return a - b});
  if (arr.length % 2 === 0) {
    // Even, we'll get the two numbers in the middle and average them
    return getSum(arr.splice(Math.floor(arr.length / 2) - 1, 2)) / 2;
  } else {
    // Odd, we'll return the number in the middle
    return arr[Math.floor(arr.length / 2)];
  }
}

function mode(arr) {
  let countObj = {};
  for (let x of arr) {
    if (x in countObj === false) countObj[x] = 0;
    countObj[x]++;
  }

  let maxCount = 0;
  let maxNumber;
  for (let x in countObj) {
    let count = countObj[x];
    if (count > maxCount) {
      maxCount = count;
      maxNumber = x;
    }
  }
  return parseInt(maxNumber);
}
