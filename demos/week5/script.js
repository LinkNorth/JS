let req = new XMLHttpRequest();

req.addEventListener('load', finished);
req.open('GET', 'https://api.openbrewerydb.org/breweries');
req.send();

function finished() {
  console.log(this.status, this.responseText);
  console.log(req.status, req.responseText);
  let data = JSON.parse(req.responseText);
  for (let row of data) {
    console.log(row.website_url);
  }
}
