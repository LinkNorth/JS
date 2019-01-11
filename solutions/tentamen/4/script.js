/* Implement your solution here */
getData()
  .then(function(result) {
    let object = JSON.parse(result);
    let data = object.data;

    let ul = document.createElement('ul');
    for (let row of data) {
      let li = document.createElement('li');
      li.textContent = row.name;
      ul.appendChild(li);
    }

    let main = document.querySelector('main');
    main.appendChild(ul);
  });


/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({
      data: [
        {name: 'Knatte'},
        {name: 'Fnatte'},
        {name: 'Tjatte'},
      ],
    }));
  });
}
