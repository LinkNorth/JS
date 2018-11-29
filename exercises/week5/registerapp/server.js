let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));

let users = [];
let ID = 0;

function find(id) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.id === id) return {index: i, user: user};
  }
  return {};
}

function validate(user) {
  return user && user.name && user.email && user.password && user.passwordrepeat && user.password === user.passwordrepeat;
}

app.get('/users', (req, res) => {
  let data = users.map(x => {
    return {
      id: x.id,
      name: x.name,
      email: x.email,
    };
  });
  res.send({data: data});
});

app.post('/register', (req, res) => {
  if (req.get('Content-Type') !== 'application/x-www-form-urlencoded') {
    res.status(415);
    res.end();
    return;
  }

  let user = req.body;
  if (!validate(user)) {
    res.redirect('/register.html?error=1');
    return;
  }
  ID++;
  user.id = ID;
  users.push(user);
  res.redirect('/');
});

app.get('/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.end();
    return;
  }

  let user = find(id).user;
  if (user) {
    let data = {
      id: user.id,
      name: user.name,
      email: user.email,
    }
    res.json({data: data});
  } else {
    res.status(404);
    res.end();
  }
});

app.put('/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.end();
    return;
  }

  let user = req.body;
  if (!validate(user)) {
    res.status(400);
    res.end();
    return;
  }

  let f = find(id);
  let index = f.index;
  if (typeof index !== 'undefined') {
    delete user.id;
    users[index] = Object.assign(users[index], user);
    res.status(200);
    res.json(users[index]);
  } else {
    res.status(404);
    res.end();
  }
});

app.delete('/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400);
    res.end();
    return;
  }
  let index = find(id).index;
  if (typeof index !== 'undefined') {
    users.splice(index, 1);
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

const PORT = 8092;
app.listen(PORT, function() {
  console.log('Server started, visit http://localhost:' + PORT);
});
