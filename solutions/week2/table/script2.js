function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createTable(data, atElement) {
  let table = $("<table>");

  let thead = $("<thead>");

  let headerRow = $("<tr>");
  for (let column in data[0]) {
    let th = $("<th>");
    th.text(capitalize(column));
    headerRow.append(th);
  }

  thead.append(headerRow);
  table.append(thead);

  let tbody = $("<tbody>");
  for (let row of data) {
    let tr = $("<tr>");
    for (let column in row) {
      let td = $("<td>");
      td.text(row[column]);
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  atElement.append(table);
}

let tableData = [
   {name: 'Simba', animal: 'Lion'},
   {name: 'Timon', animal: 'Meerkat'},
   {name: 'Pumba', animal: 'Warthog'}
]

createTable(tableData, $('.container'));
