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

let tableData = [{"id":2,"name":"Avondale Brewing Co","brewery_type":"micro","street":"201 41st St S","city":"Birmingham","state":"Alabama","postal_code":"35222-1932","country":"United States","longitude":"-86.774322","latitude":"33.524521","phone":"2057775456","website_url":"http://www.avondalebrewing.com","updated_at":"2018-08-23T23:19:57.825Z"}];

createTable(tableData, ['name', 'street', 'city'], document.querySelector('body'));
