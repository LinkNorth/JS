let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('.'));

let todos = [];
let ID = 0;

function find(id) {
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    if (todo.id === id) return {index: i, todo: todo};
  }
  return {};
}


app.get('/todos', (req, res) => {
  res.send({data: todos});
});

app.post('/todos', (req, res) => {
  let todo = req.body;
  if (!todo || !todo.title || todo.title.length < 2) {
    res.status(400);
    res.end();
    return;
  }
  ID++;
  todo.id = ID;
  if (!todo.amount) todo.amount = 1;
  todos.push(todo);
  res.status(201);
  res.send(todo);
});

app.get('/todos/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.end();
    return;
  }

  let todo = find(id).todo;
  if (todo) {
    res.json({data: todo});
  } else {
    res.status(404);
    res.end();
  }
});

app.put('/todos/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.end();
    return;
  }

  let todo = req.body;
  if (!todo || (!todo.title || todo.title.length < 2) || !todo.amount) {
    res.status(400);
    res.end();
    return;
  }

  let f = find(id);
  let index = f.index;
  if (typeof index !== 'undefined') {
    if (todo.title) {
      todos[index].title = todo.title;
    }
    if (todo.amount) {
      todos[index].amount = todo.amount;
    }
    res.status(200);
    res.json(todos[index]);
  } else {
    res.status(404);
    res.end();
  }
});

app.delete('/todos/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.end();
    return;
  }
  let index = find(id).index;
  if (typeof index !== 'undefined') {
    todos.splice(index, 1);
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

app.use(function(err, req, res, next) {
  console.error('Got an error');
  console.error(err);
});

const PORT = 8091;
app.listen(PORT, function() {
  console.log('Server started, visit http://localhost:' + PORT);
});
