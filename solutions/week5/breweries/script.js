function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createTable(data, keys, atElement) {
  let table = document.createElement('table');
  
  let thead = document.createElement('thead');

  let headerRow = document.createElement('tr');
  for (let column of keys) {
    let th = document.createElement('th');
    th.textContent = capitalize(column);
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');

  for (let row of data) {
    let tr = document.createElement('tr');
    for (let column of keys) {
      let value = row[column];
      let td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  atElement.appendChild(table);
}

function onResponse() {
  if (this.status === 200) {
    let data = JSON.parse(this.responseText);
    createTable(data, ['name', 'street', 'city'], document.querySelector('body'));
  } else {
    console.error('Invalid status', this);
  }
}

function doReq() {
  let req = new XMLHttpRequest();
  req.addEventListener('load', onResponse);
  req.open('GET', 'https://api.openbrewerydb.org/breweries');
  req.send();
}

doReq();
