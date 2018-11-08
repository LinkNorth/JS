function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createTable(data, atElement) {
  let tableStr = "<table>";

  // Header
  let firstRow = data[0];
  tableStr += "<thead>";
  tableStr += "<tr>";
  for (let column in firstRow) {
    tableStr += "<th>" + capitalize(column) + "</th>";
  }
  tableStr += "</tr>";
  tableStr += "</thead>";


  // Body
  tableStr += "<tbody>";
  for (let row of data) {
    tableStr += "<tr>";

    for (let column in row) {
      let value = row[column];
      tableStr += "<td>" + value + "</td>";
    }

    tableStr += "</tr>";
  }

  tableStr += "</tbody>";


  tableStr += "</table>";
  $(atElement).append(tableStr);
}

let tableData = [
   {name: 'Simba', animal: 'Lion'},
   {name: 'Timon', animal: 'Meerkat'},
   {name: 'Pumba', animal: 'Warthog'}
]

createTable(tableData, $('.container'));
