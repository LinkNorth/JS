function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createTable(data, atElement) {
  let table = document.createElement('table');
  
  let thead = document.createElement('thead');

  let headerRow = document.createElement('tr');
  for (let column in data[0]) {
    let th = document.createElement('th');
    th.textContent = capitalize(column);
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');

  for (let row of data) {
    let tr = document.createElement('tr');
    for (let column in row) {
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

let tableData = [
   {name: 'Simba', animal: 'Lion'},
   {name: 'Timon', animal: 'Meerkat'},
   {name: 'Pumba', animal: 'Warthog'}
]

createTable(tableData, document.querySelector('.container'));
