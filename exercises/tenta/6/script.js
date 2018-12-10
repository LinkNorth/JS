/* Implement your solution here */


/* Do not touch anything below this line */
function getData() {
  return new Promise(function(resolve, reject) {
    let t = Math.random() * 2000 + 1000;
    setTimeout(function() {
      resolve(JSON.stringify({
        data: [
          'Sweden',
          'Denmark',
          'Norway',
          'Finland'
        ]
      }));
    }, t);
  });
}
