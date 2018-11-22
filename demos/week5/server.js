let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let fs = require('fs');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));

app.get('/hello', function(req, res) {
  console.log('hello', req.body, req.params, req.query);
  let obj = {
    data: [
      {name: 'Viktor'},
      {name: 'Viktoria'},
    ]
  };
  res.send(obj);
});


app.post('/login', function(req, res) {
  console.log('login', req.body);
  res.redirect('/');
});

const PORT = 8090;
app.listen(PORT, function() {
  console.log('Listening on', PORT);
});
