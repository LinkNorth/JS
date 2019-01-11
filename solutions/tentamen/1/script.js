/* Implement your solution here */
function sum(arr) {

  let sumVar = 0;
  for (let value of arr) {
    sumVar += value; 
  }
  return sumVar;
}


/* Do not touch code below this line, but make sure that these examples work */
if (sum([1, 2, 3]) !== 6) console.error('Invalid solution');
if (sum([]) !== 0) console.error('Invalid solution');
if (sum([7, 2]) !== 9) console.error('Invalid solution');
if (sum([1, 2, 3, 4, 5, 6, 7, 8, 9]) !== 45) console.error('Invalid solution');
