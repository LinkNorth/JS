let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

function req(method, url, data) {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.addEventListener('load', function() {
      if (this.status >= 200 && this.status < 300) {
        let data = null;
        if (this.responseText) {
          data = JSON.parse(this.responseText);
        } 
        resolve(data);
      } else {
        reject(new Error('Invalid status'));
      }
    });

    req.open(method, url);
    if (data) {
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify(data));
    } else {
      req.send();
    }
  });
}

function renderItemDelete(todo, li) {
  let button = document.createElement('button');
  button.textContent = 'Remove me';
  button.addEventListener('click', function() {
    req('DELETE', '/todos/' + todo.id, undefined).then(getDataAndRender);
  });
  li.appendChild(button);
}

function renderItemEdit(todo, li) {
  let input = document.createElement('input');
  input.value = todo.title;
  input.addEventListener('blur', function(e) {
    if (input.value !== todo.title) {
      todo.title = input.value;
      req('PUT', '/todos/' + todo.id, todo).then(getDataAndRender);
    } else {
      li.innerHTML = "";
      renderItemText(todo, li);
      renderItemDelete(todo, li);
    }
  });
  li.appendChild(input);
  input.focus();
}

function renderItemText(todo, li) {
  let span = document.createElement('span');
  span.textContent = todo.title;
  li.appendChild(span);

  li.addEventListener('dblclick', function() {
    li.innerHTML = "";
    renderItemEdit(todo, li);
    renderItemDelete(todo, li);
  });
}

function renderList(list) {
  ul.innerHTML = '';
  for (let todo of list) {
    let li = document.createElement('li');
    renderItemText(todo, li);
    renderItemDelete(todo, li);
    ul.appendChild(li);
  }
}

function getDataAndRender() {
  req('GET', '/todos', undefined)
  .then(function(data) {
    renderList(data.data);
  })
  .catch(function(err) {
    console.error(err);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let value = input.value;
  req('POST', '/todos', {title: value})
    .then(getDataAndRender)
    .catch(function(err) {
      console.error(err);
    });

  input.value = "";
});

getDataAndRender();
